"use client"

import * as React from "react"
import { Card, CardHeader, CardBody, CardFooter, Button, Switch, Divider } from "@heroui/react"

export function PreferencesForm() {
  const [emailUpdates, setEmailUpdates] = React.useState(true)
  const [redemptionReminders, setRedemptionReminders] = React.useState(true)
  const [productNews, setProductNews] = React.useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <Card className="p-5">
      <form onSubmit={onSubmit} className="space-y-0">
        <CardHeader>
          <div className="space-y-1">
            <h3 className="text-base font-medium">Notifications</h3>
            <p className="text-sm md:text-base text-muted-foreground">Choose what updates you want to receive.</p>
          </div>
        </CardHeader>

        <CardBody className="grid gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="grid gap-1">
              <label htmlFor="email-updates" className="text-sm md:text-base font-medium">
                Email updates
              </label>
              <p className="text-sm md:text-base text-muted-foreground">
                Receive transaction receipts and important account alerts.
              </p>
            </div>
            <Switch
              id="email-updates"
              isSelected={emailUpdates}
              onValueChange={setEmailUpdates}
              aria-label="Toggle email updates"
            />
          </div>

          <Divider />

          <div className="flex items-center justify-between gap-4">
            <div className="grid gap-1">
              <label htmlFor="redemption-reminders" className="text-sm md:text-base font-medium">
                Redemption reminders
              </label>
              <p className="text-sm md:text-base text-muted-foreground">
                Get reminders when your coin balance is eligible for new items.
              </p>
            </div>
            <Switch
              id="redemption-reminders"
              isSelected={redemptionReminders}
              onValueChange={setRedemptionReminders}
              aria-label="Toggle redemption reminders"
            />
          </div>

          <Divider />

          <div className="flex items-center justify-between gap-4">
            <div className="grid gap-1">
              <label htmlFor="product-news" className="text-sm md:text-base font-medium">
                Product news
              </label>
              <p className="text-sm md:text-base text-muted-foreground">Occasional updates about new features and improvements.</p>
            </div>
            <Switch
              id="product-news"
              isSelected={productNews}
              onValueChange={setProductNews}
              aria-label="Toggle product news"
            />
          </div>
        </CardBody>

        <CardFooter className="justify-end">
          <Button color="primary" type="submit">
            Save preferences
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
