"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push("/login");
      else setUser(user);
    }
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) router.push("/login");
      else setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [router]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin</h2>
        <nav className="flex flex-col gap-4">
          <a href="/admin">Dashboard</a>
          <a href="/admin/properties">Imóveis</a>
          <a href="/admin/users">Usuários</a>
        </nav>
        <button
          onClick={async () => { await supabase.auth.signOut(); router.push("/login"); }}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        >
          Sair
        </button>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
