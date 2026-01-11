import { fetchUsersCurrentSessions } from "@/actions/user-actions";
import ListSessions from "@/components/client/settings/list-sessions";
import ThemeSelector from "@/components/theme-selector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function SettingsPage() {

  const sessions = await fetchUsersCurrentSessions()

  if (!sessions) return null

  return (
    <div className="space-y-12">
      <Card className="flex flex-col lg:flex-row gap-10">
        <CardHeader className="flex-auto">
          <div>
            <CardTitle>Theme Selector</CardTitle>
            <CardDescription>Change between Light & Dark mode</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ThemeSelector />
        </CardContent>
      </Card>
      <Card className="flex flex-col lg:flex-row gap-10">
        <CardHeader className="flex-auto">
          <div>
            <CardTitle>Two Factor</CardTitle>
            <CardDescription>Secure your account with Two factor authentication</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>Coming soon</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Active Sessions</CardTitle>
          <CardDescription>Remove access to any devices your are signed in on</CardDescription>
        </CardHeader>
        <CardContent>
          <ListSessions sessions={sessions} />
        </CardContent>
      </Card>
      <Card className="flex flex-col lg:flex-row gap-10">
        <CardHeader className="flex-auto">
          <div>
            <CardTitle>Delete Account</CardTitle>
            <CardDescription>Delete your Account</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>Coming soon</p>
        </CardContent>
      </Card>
    </div>
  )
}
