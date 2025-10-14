import { PreferencesForm } from "@/components/custom/sections/settings/preferences-form";
import { ProfileForm } from "@/components/custom/sections/settings/profile-form";
import { SecurityForm } from "@/components/custom/sections/settings/security-form";
import { Divider } from "@heroui/react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 md:py-10">
      <header className="mb-6">
        <div className="w-fit p-1 bg-primary rounded-full mb-6">
          <Link href={"/user/profile"}>
            <ChevronLeft />
          </Link>
        </div>
        <h1 className="text-pretty text-2xl font-semibold tracking-tight">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your profile, security, and notification preferences for your
          Campus Coin account.
        </p>
      </header>

      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Profile</h2>
          <Divider />
          <ProfileForm />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Security</h2>
          <Divider />
          <SecurityForm />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Preferences</h2>
          <Divider />
          <PreferencesForm />
        </div>
      </section>
    </main>
  );
}
