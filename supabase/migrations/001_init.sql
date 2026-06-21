-- ============================================================
-- Leaf & Bloom — Database Schema
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. Profiles (extends auth.users) ----------------------------
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

-- Users can SELECT their own profile
create policy "Users can view own profile"
  on profiles
  for select
  to authenticated
  using (auth.uid() = id);

-- Users can UPDATE their own profile
create policy "Users can update own profile"
  on profiles
  for update
  to authenticated
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    new.email
  );
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function handle_new_user();

-- 3. Orders ---------------------------------------------------
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'pending'
    check (status in ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  total_amount numeric(10,2) not null,
  created_at timestamptz default now()
);

alter table orders enable row level security;

-- Users can SELECT only their own orders
create policy "Users can view own orders"
  on orders
  for select
  to authenticated
  using (auth.uid() = user_id);

-- 4. Order Items ----------------------------------------------
create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_name text not null,
  product_image text,
  quantity int not null default 1,
  price numeric(10,2) not null
);

alter table order_items enable row level security;

-- Users can SELECT items belonging to their own orders
create policy "Users can view own order items"
  on order_items
  for select
  to authenticated
  using (
    exists (
      select 1 from orders
      where orders.id = order_items.order_id
      and orders.user_id = auth.uid()
    )
  );
