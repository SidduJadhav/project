"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Profile() {
  const [notifications, setNotifications] = useState(true)
  const [profilePicture, setProfilePicture] = useState("/profile.png?height=128&width=128")

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfilePicture(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 p-8">
      <h1 className="text-3xl font-bold text-center">Your Profile</h1>
      
      <section className="flex flex-col items-center space-y-4">
        <Avatar className="w-32 h-32">
          <AvatarImage src={profilePicture} alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <Input
            id="profile-picture"
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="hidden"
          />
          <Label htmlFor="profile-picture" className="cursor-pointer">
            <Button variant="outline" asChild>
              <span>Change Profile Picture</span>
            </Button>
          </Label>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Siddu P Jadhav" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="sidduvikasjadhav@gmail.com" />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" />
          </div>
          <Button type="submit">Update Profile</Button>
        </form>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Email Notifications</Label>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <div>
            <Label htmlFor="interests">Learning Interests</Label>
            <Input id="interests" placeholder="e.g., Biology, Physics, Engineering" />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">AR Interaction History</h2>
        <ul className="space-y-2">
          {['DNA Structure', 'Solar System Model', 'Bridge Design'].map((item, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded">
              Interacted with {item} AR model
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

