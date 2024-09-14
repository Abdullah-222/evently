"use client"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "@/schemas/signUpSchema"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SignUp() {
  const {
    register,
    //handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  })

  // const onSubmit = (data: z.infer<typeof signUpSchema>) => console.log(data)

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md md:max-w-lg space-y-8 bg-red-300 rounded-xl p-3">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">Sign up</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link href="#" className="font-medium text-primary hover:text-primary-foreground" prefetch={false}>
              sign in
            </Link>
          </p>
        </div>
        <form className="space-y-6" >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className={`${errors.name ? "border-red-500" : ""}`}
              {...register("name")}
            />
            {/* {errors.name && <div className="mt-2 text-sm text-red-500">{errors.name.message}</div>} */}
          </div>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`${errors.email ? "border-red-500" : ""}`}
              {...register("email")}
            />
            {/* {errors.email && <div className="mt-2 text-sm text-red-500">{errors.email.message}</div>} */}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className={`${errors.password ? "border-red-500" : ""}`}
              {...register("password")}
            />
            {/* {errors.password && <div className="mt-2 text-sm text-red-500">{errors.password.message}</div>} */}
          </div>
          <div>
            <Button type="submit" className="w-full bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] text-white">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
