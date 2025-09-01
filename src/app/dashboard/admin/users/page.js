"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UsersAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        console.error("Erro ao buscar usuários:", error.message);
      } else {
        setUsers(data);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Usuários</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((u) => (
            <li key={u.id} className="p-4 bg-white shadow rounded">
              <h2 className="font-bold">{u.name}</h2>
              <p>{u.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
