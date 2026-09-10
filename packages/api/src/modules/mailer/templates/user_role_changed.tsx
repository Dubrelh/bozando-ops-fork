import React from "react"

export function Subject(ctx: { role?: string }) {
  return `Hullbay — accès mis à jour (${ctx.role ?? "rôle"})`
}

export function Component(props: { email?: string; role?: string; actorUserId?: string }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111827", lineHeight: 1.6 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
          <h1 style={{ marginBottom: 12, fontSize: 28, color: "#111827" }}>Mise à jour de votre accès</h1>
          <p>Bonjour,</p>
          <p>Votre accès à Hullbay a été mis à jour.</p>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, margin: "16px 0" }}>
            <p style={{ margin: 0 }}><strong>Email :</strong> {props.email ?? "-"}</p>
            <p style={{ margin: "8px 0 0" }}><strong>Nouveau rôle :</strong> {props.role ?? "-"}</p>
          </div>
          <p>Les permissions associées à votre compte ont été ajustées.</p>
          <p>Si cette modification ne vous semble pas correcte, veuillez contacter un owner.</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
