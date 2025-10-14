"use client"

import * as React from "react"
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@heroui/react"

export function SecurityForm() {
  const [currentPassword, setCurrentPassword] = React.useState("")
  const [newPassword, setNewPassword] = React.useState("")
  const [confirmNew, setConfirmNew] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (!newPassword || newPassword.length < 8) {
      setError("New password must be at least 8 characters.")
      return
    }
    if (newPassword !== confirmNew) {
      setError("New passwords do not match.")
      return
    }

    setCurrentPassword("")
    setNewPassword("")
    setConfirmNew("")
  }

  return (
    <Card className="p-5">
      <form onSubmit={onSubmit} className="space-y-0">
        <CardHeader>
          <div className="space-y-1">
            <h3 className="text-base font-medium">Password</h3>
            <p className="text-sm md:text-base text-muted-foreground">Change your account password.</p>
          </div>
        </CardHeader>
        <CardBody className="grid gap-4">
          <Input
            id="currentPassword"
            type="password"
            label="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Input
            id="newPassword"
            type="password"
            label="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
          />
          <Input
            id="confirmNew"
            type="password"
            label="Confirm new password"
            value={confirmNew}
            onChange={(e) => setConfirmNew(e.target.value)}
            autoComplete="new-password"
          />

          {error ? (
            <p role="alert" className="text-sm text-destructive-foreground">
              {error}
            </p>
          ) : null}
        </CardBody>
        <CardFooter className="justify-end">
          <Button color="primary" type="submit">
            Update password
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
