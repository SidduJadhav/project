"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function Register() {
  const [progress, setProgress] = useState(0)

  const handleInputChange = () => {
    // Simple progress calculation, you can make this more sophisticated
    const inputs = document.querySelectorAll('input')
    const filledInputs = Array.from(inputs).filter(input => input.value !== '').length
    setProgress((filledInputs / inputs.length) * 100)
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register for AR Learning</h1>
      <form className="space-y-4" onChange={handleInputChange}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Create a password" required />
        </div>
        <div>
          <Label htmlFor="interests">Interests</Label>
          <Input id="interests" placeholder="e.g., Biology, Physics, Engineering" />
        </div>
        <Progress value={progress} className="w-full" />
        <Button type="submit" className="w-full">Register</Button>
      </form>
    </div>
  )
}

