import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/site/ProtectedRoute";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Package, LogOut } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

interface Profile {
  full_name: string;
  email: string;
}

interface OrderItem {
  id: string;
  product_name: string;
  product_image: string | null;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  order_items: OrderItem[];
}

const statusColors: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  processing: "bg-blue-100 text-blue-800 border-blue-200",
  shipped: "bg-teal-100 text-teal-800 border-teal-200",
  delivered: "bg-emerald-100 text-emerald-800 border-emerald-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

function ProfilePage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchProfileAndOrders = async () => {
      const [profileRes, ordersRes] = await Promise.all([
        supabase.from("profiles").select("full_name, email").eq("id", user.id).single(),
        supabase
          .from("orders")
          .select("*, order_items(*)")
          .order("created_at", { ascending: false }),
      ]);

      if (profileRes.data) {
        setProfile(profileRes.data);
      } else {
        setProfile({
          full_name: user.user_metadata?.full_name ?? "Plant Lover",
          email: user.email ?? "",
        });
      }

      if (ordersRes.data) {
        setOrders(ordersRes.data);
      }

      setLoading(false);
    };

    fetchProfileAndOrders();
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
          {/* Profile header */}
          <div className="rounded-3xl bg-card p-8 shadow-soft sm:p-10">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Leaf className="h-7 w-7" />
              </span>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-semibold">{profile?.full_name || "Plant Lover"}</h1>
                <p className="text-muted-foreground">{profile?.email || user?.email}</p>
              </div>
              <div className="sm:ml-auto">
                <Button variant="outline" onClick={handleSignOut} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign out
                </Button>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <Package className="h-5 w-5 text-leaf" />
              Order History
            </h2>

            {orders.length === 0 ? (
              <div className="mt-6 rounded-3xl bg-card p-12 text-center shadow-soft">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-secondary">
                  <Package className="h-9 w-9 text-muted-foreground" />
                </span>
                <h3 className="mt-5 text-lg font-medium">No orders yet</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">
                  Start shopping to see your order history here!
                </p>
                <Button className="mt-6" asChild>
                  <a href="/#featured">Browse plants</a>
                </Button>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="rounded-3xl bg-card p-6 shadow-soft sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <Badge
                        className={statusColors[order.status] || "bg-gray-100"}
                        variant="outline"
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>

                    <div className="mt-4 divide-y divide-border">
                      {order.order_items?.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 py-3">
                          {item.product_image ? (
                            <img
                              src={item.product_image}
                              alt={item.product_name}
                              className="h-14 w-14 rounded-xl object-cover"
                            />
                          ) : (
                            <span className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-muted-foreground">
                              <Leaf className="h-5 w-5" />
                            </span>
                          )}
                          <div className="flex-1">
                            <div className="font-medium">{item.product_name}</div>
                            <div className="text-sm text-muted-foreground">
                              Qty: {item.quantity}
                            </div>
                          </div>
                          <div className="font-medium">
                            ₹{Number(item.price).toLocaleString("en-IN")}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg font-semibold">
                      <span>Total</span>
                      <span>₹{Number(order.total_amount).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
