"use client"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

function Suscribe() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    console.log(email)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        required
        className="bg-primary-foreground"
        type="email"
        placeholder="Email"
        name="email"
      />
      <Button type="submit">Suscribe</Button>
    </form>
  )
}

export default Suscribe
