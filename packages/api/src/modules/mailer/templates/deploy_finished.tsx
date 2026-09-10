import React from "react"

export function Subject(ctx: { ok?: boolean; projectName?: string }) {
  return `${ctx.projectName ?? "Projet"} — ${ctx.ok ? "Déploiement réussi" : "Échec du déploiement"}`
}

export function Component(props: { ok?: boolean; projectName?: string }) {
  return (
    <html>
      <body>
        <div>
          <h1>État du déploiement</h1>
          <p>Projet : {props.projectName ?? "-"}</p>
          <p>Status : {props.ok ? "Succès" : "Échec"}</p>
        </div>
      </body>
    </html>
  )
}

export const meta = { requires: ["project.name"] }
