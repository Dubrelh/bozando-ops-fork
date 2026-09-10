import React from "react"

export function Subject(ctx: { role?: string; serverId?: string }) {
  return `Hullbay — rôle du serveur modifié (${ctx.role ?? "rôle"})`
}

export function Component(props: { serverId?: string; role?: string; actorUserId?: string }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111827", lineHeight: 1.6 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
          <h1 style={{ marginBottom: 12, fontSize: 28, color: "#111827" }}>Rôle du serveur modifié</h1>
          <p>Bonjour,</p>
          <p>Le rôle du serveur a été modifié.</p>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, margin: "16px 0" }}>
            <p style={{ margin: 0 }}><strong>Serveur :</strong> {props.serverId ?? "-"}</p>
            <p style={{ margin: "8px 0 0" }}><strong>Nouveau rôle :</strong> {props.role ?? "-"}</p>
          </div>
          <p>Cette modification peut avoir un impact sur les accès et permissions associées.</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
