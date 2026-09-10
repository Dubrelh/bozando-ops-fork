import React from "react"

export function Subject(ctx: { event?: string; message?: string; name?: string; ok?: boolean }) {
  const prefix = ctx.event ?? "Event"
  return `${prefix} — notification`
}

export function Component(props: { event?: string; message?: string; name?: string; ok?: boolean }) {
  const event = props.event ?? "event"
  const message = props.message ?? "Une action système a été déclenchée."
  return (
    <html>
      <body>
        <div>
          <h1>Hullbay notification</h1>
          <p><strong>Événement :</strong> {event}</p>
          <p>{message}</p>
          {typeof props.ok === "boolean" && <p>Status : {props.ok ? "Succès" : "Échec"}</p>}
          {props.name && <p>Utilisateur : {props.name}</p>}
        </div>
      </body>
    </html>
  )
}

export function Text(ctx: { event?: string; message?: string; name?: string; ok?: boolean }) {
  const event = ctx.event ?? "event"
  const message = ctx.message ?? "Une action système a été déclenchée."
  return `${event}: ${message}${typeof ctx.ok === "boolean" ? ` | Status: ${ctx.ok ? "Succès" : "Échec"}` : ""}${ctx.name ? ` | Utilisateur: ${ctx.name}` : ""}`
}

export const meta = { requires: [] }
