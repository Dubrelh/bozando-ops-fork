import React from "react"

export function Subject(ctx: { siteName?: string }) {
  return `${ctx.siteName ?? "Hullbay"} — Test d'email`
}

export function Component(props: { name?: string; message?: string }) {
  return (
    <html>
      <body>
        <div>
          <h1>Test d'envoi</h1>
          <p>Bonjour {props.name ?? "utilisateur"},</p>
          <p>{props.message ?? "Ceci est un email de test envoyé depuis Hullbay."}</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: [] }
