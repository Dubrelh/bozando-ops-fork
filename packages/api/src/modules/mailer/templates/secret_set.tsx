import React from "react"

export function Subject(ctx: { name?: string }) {
  return `Hullbay — secret mis à jour (${ctx.name ?? "secret"})`
}

export function Component(props: { name?: string; clusterId?: string; actorUserId?: string }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111827", lineHeight: 1.6 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
          <h1 style={{ marginBottom: 12, fontSize: 28, color: "#111827" }}>Secret mis à jour</h1>
          <p>Bonjour,</p>
          <p>Un secret a été ajouté ou modifié.</p>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, margin: "16px 0" }}>
            <p style={{ margin: 0 }}><strong>Nom :</strong> {props.name ?? "-"}</p>
            <p style={{ margin: "8px 0 0" }}><strong>Cluster :</strong> {props.clusterId ?? "-"}</p>
          </div>
          <p>Cette modification peut affecter les accès ou intégrations associées.</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
