import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Button, Container, Heading, Input, Label, Text, Select } from "@medusajs/ui"
import { api } from "../lib/api"
import { useMutationToast } from "../lib/useMutationToast"
import { PageHeader, PageContainer } from "../components/PageHeader"
import { useTranslation } from "react-i18next"

export function MailIntegrationPage() {
  const { t } = useTranslation()
  const { data: list } = useQuery({ queryKey: ["mailSettings"], queryFn: api.getMailSettings })

  const [provider, setProvider] = useState("resend")
  const [apiKey, setApiKey] = useState("")
  const [smtpHost, setSmtpHost] = useState("")
  const [smtpUser, setSmtpUser] = useState("")
  const [smtpPass, setSmtpPass] = useState("")
  const [defaultFrom, setDefaultFrom] = useState("")

  const save = useMutationToast({
    mutationFn: () => {
      if (provider === "resend") return api.setMailSettings({ provider: "resend", config: { apiKey }, enabled: true, defaultFrom })
      return api.setMailSettings({ provider: "smtp", config: { host: smtpHost, user: smtpUser, pass: smtpPass }, enabled: true, defaultFrom })
    },
    success: t('integrations.toast.saveSuccess'),
    invalidate: [["mailSettings"]],
  })

  const test = useMutationToast({
    mutationFn: () => api.testMail({ to: defaultFrom || "owner@example.com", from: defaultFrom || undefined, name: "Admin" }),
    success: t('integrations.toast.saveSuccess'),
  })

  return (
    <PageContainer size="2xl">
      <PageHeader title={t('integrations.mail.pageTitle') || 'Mail Integration'} />
      <div className="mb-6">
        <Heading level="h3">Configured providers</Heading>
        {list?.map((l) => (
          <div key={l.id} className="p-3 border rounded mb-2">
            <div className="flex items-center justify-between">
              <div>
                <strong>{l.provider}</strong>
                <div className="text-sm text-ui-fg-muted">{l.enabled ? 'Enabled' : 'Disabled'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Container className="p-6">
        <Heading level="h3" className="mb-3">Configure provider</Heading>
        <div className="flex flex-col gap-3">
          <div>
            <Label size="small">Provider</Label>
            <Select value={provider} onValueChange={(v: string) => setProvider(v)}>
              <Select.Trigger className="w-full">
                <Select.Value placeholder="Provider" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="resend">Resend (API)</Select.Item>
                <Select.Item value="smtp">SMTP</Select.Item>
              </Select.Content>
            </Select>
          </div>

          {provider === "resend" && (
            <div>
              <Label size="small">API Key</Label>
              <Input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
            </div>
          )}

          {provider === "smtp" && (
            <>
              <div>
                <Label size="small">SMTP Host</Label>
                <Input placeholder="smtp.example.com" value={smtpHost} onChange={(e) => setSmtpHost(e.target.value)} />
              </div>
              <div>
                <Label size="small">User</Label>
                <Input placeholder="username" value={smtpUser} onChange={(e) => setSmtpUser(e.target.value)} />
              </div>
              <div>
                <Label size="small">Password</Label>
                <Input type="password" placeholder="(never shown again)" value={smtpPass} onChange={(e) => setSmtpPass(e.target.value)} />
              </div>
            </>
          )}

          <div>
            <Label size="small">Default From</Label>
            <Input value={defaultFrom} onChange={(e) => setDefaultFrom(e.target.value)} placeholder="no-reply@example.com" />
            <Text size="xsmall" className="mt-1 text-ui-fg-muted">Used as From for test emails.</Text>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => save.mutate()} isLoading={save.isPending}>Save</Button>
            <Button onClick={() => test.mutate()} variant="secondary">Send test</Button>
          </div>
        </div>
      </Container>
    </PageContainer>
  )
}
