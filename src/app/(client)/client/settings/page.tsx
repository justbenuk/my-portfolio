import { fetchUsersCurrentSessions } from "@/actions/user-actions";
import ListSessions from "@/components/client/settings/list-sessions";
import ThemeSelector from "@/components/theme-selector";
import { Separator } from "@/components/ui/separator";

export default async function SettingsPage() {

  const sessions = await fetchUsersCurrentSessions()

  if(!sessions) return null
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-semibold text-xl md:text-3xl text-orange-400">Settings</h1>
        <span>Customisation & Settings</span>
      </div>
      <Separator />
      <div className="py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="col-span-1">
          <h1 className="font-semibold">Theme Selector</h1>
          <span className="text-xs">Select which theme suits you day or night available</span>
        </div>
        <div className="col-span-1 md:col-span-3">
          <ThemeSelector />
        </div>
      </div>
      <Separator />
      <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1">
          <h1 className="font-semibold">Two Factor</h1>
          <span className="text-xs">Protect your account by enabling two factor authentication</span>
        </div>
        <div className="col-span-1 md:col-span-3">
          <p>Coming soon</p>
        </div>
      </div>
      <Separator />
      <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1">
          <h1 className="font-semibold">Session</h1>
          <span className="text-xs">All active sessions. You can revoke any sessions you have active on other devices</span>
        </div>
        <div className="col-span-1 md:col-span-3">
          <ListSessions sessions={ sessions} />
        </div>
      </div>
      <Separator />
      <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1">
          <h1 className="font-semibold">Delete Account</h1>
          <span className="text-xs">Delete your account and all associated information</span>
        </div>
        <div className="col-span-1 md:col-span-3">
          <p>Coming soon</p>
        </div>
      </div>
    </div>
  )
}