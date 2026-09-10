import React from "react"

export function Subject(ctx: { serverId?: string }) {
  return `Hullbay — serveur provisionné (${ctx.serverId ?? "N/A"})`
}

export function Component(props: { serverId?: string; actorUserId?: string }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111827", lineHeight: 1.6 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
          <h1 style={{ marginBottom: 12, fontSize: 28, color: "#111827" }}>Serveur provisionné</h1>
          <p>Bonjour,</p>
          <p>Le serveur a bien été provisionné dans Hullbay.</p>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, margin: "16px 0" }}>
            <p style={{ margin: 0 }}><strong>Serveur :</strong> {props.serverId ?? "-"}</p>
          </div>
          <p>Il est maintenant prêt à être géré depuis votre interface.</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
