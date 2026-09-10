import React from "react"

export function Subject() {
  return "Hullbay — accès supprimé"
}

export function Component(props: { email?: string; actorUserId?: string }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111827", lineHeight: 1.6 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
          <h1 style={{ marginBottom: 12, fontSize: 28, color: "#111827" }}>Accès supprimé</h1>
          <p>Bonjour,</p>
          <p>Votre accès à Hullbay a été supprimé.</p>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, margin: "16px 0" }}>
            <p style={{ margin: 0 }}><strong>Email concerné :</strong> {props.email ?? "-"}</p>
          </div>
          <p>Cette action a été effectuée par un owner ou un administrateur.</p>
          <p>Si vous pensez qu’il s’agit d’une erreur, veuillez contacter immédiatement l’owner.</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
