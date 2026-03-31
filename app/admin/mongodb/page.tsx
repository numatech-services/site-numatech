"use client";

import { useState, useEffect } from "react";

export default function AdminMongoDBPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/mongodb-test")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setData({ error: "Impossible de se connecter à MongoDB" });
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Connexion à MongoDB...</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Test de connexion MongoDB</h1>
      {data?.error ? (
        <p style={{ color: "red" }}>{data.error}</p>
      ) : (
        <div>
          <p>{data.message}</p>
          <h3>Collections :</h3>
          <ul>
            {data.collections.map((col: string) => (
              <li key={col}>{col}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
