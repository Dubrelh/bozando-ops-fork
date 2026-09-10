import React from "react"

export async function Subject(ctx: { name?: string }) {
  return "Async mail"
}

export function Component(props: { name?: string }) {
  return (
    <html>
      <body>
        <div>
          <h1>Async mail</h1>
          <p>Hello {props.name ?? "friend"}</p>
        </div>
      </body>
    </html>
  )
}

export async function Text(ctx: { name?: string }) {
  return `Hello ${ctx.name ?? "friend"}`
}

export const meta = { requires: [] }
