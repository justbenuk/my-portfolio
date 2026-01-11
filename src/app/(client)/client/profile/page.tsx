import { fetchCurrentUser } from "@/actions/user-actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ChangePasswordForm from "@/forms/users/change=password-form"
import Image from "next/image"

export default async function ProfilePage() {

  const user = await fetchCurrentUser()

  if (!user) {
    return null
  }

  return (
    <div className="mt-12 grid gap-10">
      <div className="bg-gray-700 h-46 rounded-2xl">
        <div className="flex flex-row items-center justify-center">
          <Image src={user.image || '/profile.png'} alt="profile image" height={200} width={200} className="rounded-full border-4 border-white bg-gray-100 relative -top-20" />
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>This is all the data we hold on you</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="grid gap-3">
            <Label>Name</Label>
            <Input disabled value={user.name} />
          </div>
          <div className="grid gap-3">
            <Label>Email</Label>
            <Input disabled value={user.email} />
          </div>
          <div className="grid gap-3">
            <Label>Image</Label>
            <Input disabled value={user.image || '/assets/profile.png'} />
          </div>
          <div className="grid gap-3">
            <Label>Role</Label>
            <Input disabled value={user.role as string} />
          </div>
          <div className="grid gap-3">
            <Label>Member Since</Label>
            <Input disabled value={user.createdAt.toLocaleDateString()} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Change your password</CardDescription>
        </CardHeader>
        <CardContent>
          <ChangePasswordForm />
        </CardContent>
      </Card>
    </div>
  )
}

