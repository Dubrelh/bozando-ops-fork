import React from "react"

export function Subject(ctx: { email?: string; role?: string }) {
  return `Hullbay — compte créé (${ctx.role ?? "utilisateur"})`
}

export function Component(props: { email?: string; role?: string; actorUserId?: string; targetUserId?: string }) {
  return (
    <html>
      <body style={{ fontFamily: "Arial, sans-serif", color: "#111827", lineHeight: 1.6 }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: 24 }}>
          <h1 style={{ marginBottom: 12, fontSize: 28, color: "#111827" }}>Bienvenue sur Hullbay</h1>
          <p>Bonjour,</p>
          <p>Votre compte a bien été créé sur Hullbay.</p>
          <div style={{ background: "#f3f4f6", borderRadius: 8, padding: 16, margin: "16px 0" }}>
            <p style={{ margin: 0 }}><strong>Email :</strong> {props.email ?? "-"}</p>
            <p style={{ margin: "8px 0 0" }}><strong>Rôle :</strong> {props.role ?? "-"}</p>
          </div>
          <p>Vous pouvez maintenant vous connecter et accéder à votre espace.</p>
          <p>Si vous n’êtes pas à l’origine de cette création, merci de contacter immédiatement un owner.</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
