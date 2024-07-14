"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { loginSchema, LoginSchema } from "@/schemas/users"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form"
import { loginUser } from "@/lib/actions"
import { USER_STATUS } from "@/types.d"
import useStore from "@/store/useStore"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const form = useForm<LoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  })
  const { login } = useStore()
  const { push } = useRouter()
  const { handleSubmit, control } = form
  async function onSubmit(values: LoginSchema) {
    const loginRes = await loginUser(values)
    if (loginRes.status === USER_STATUS.LOGGED) {
      login(loginRes.user)
      push("/dashboard")
      console.log("User logged in")
    } else if (loginRes.status === USER_STATUS.PASSWORD_NOT_MATCH) {
      console.log("Password does not match")
    } else if (loginRes.status === USER_STATUS.MAIL_NOT_FOUND) {
      console.log("Email not found")
    }
  }
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </FormControl>
                    <FormDescription>
                      This is the email you used to sign up
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Link
                        href="#"
                        className="ml-auto inline-block text-sm underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input {...field} type="password" required />
                    </FormControl>
                    <FormDescription>
                      This is the password you used to sign up
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
