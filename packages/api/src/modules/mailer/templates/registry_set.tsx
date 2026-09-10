import React from "react"

export function Subject() {
  return "Hullbay — registre mis à jour"
}

export function Component(props: { registry?: string; actorUserId?: string }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111827", lineHeight: 1.6 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
          <h1 style={{ marginBottom: 12, fontSize: 28, color: "#111827" }}>Registre mis à jour</h1>
          <p>Bonjour,</p>
          <p>La configuration du registre a été mise à jour.</p>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, margin: "16px 0" }}>
            <p style={{ margin: 0 }}><strong>Registre :</strong> {props.registry ?? "-"}</p>
          </div>
          <p>Cette mise à jour peut affecter les prochains déploiements et accès associés.</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
