"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../schemas/signUpSchema";
import { signInSchema } from "../../schemas/signInSchema";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const onSignUp = async (data: z.infer<typeof signUpSchema>) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Sign Up Data:", data);
      setLoading(false);
    }, 2000); // Simulate a network request delay
  };

  const onSignIn = async (data: z.infer<typeof signInSchema>) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Sign In Data:", data);
      setLoading(false);
    }, 2000); // Simulate a network request delay
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-sm md:max-w-xl rounded-xl border bg-card p-6 shadow-lg sm:p-8">
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-md bg-muted p-1">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <form className="space-y-4" onSubmit={handleSubmitSignUp(onSignUp)}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className={`border-gray-200 rounded-xl ${errorsSignUp.name ? "border-red-500" : ""}`}
                  {...registerSignUp("name")}
                />
                {errorsSignUp.name && <div className="mt-2 text-sm text-red-500">{errorsSignUp.name.message}</div>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className={`border-gray-200 rounded-xl ${errorsSignUp.email ? "border-red-500" : ""}`}
                  {...registerSignUp("email")}
                />
                {errorsSignUp.email && <div className="mt-2 text-sm text-red-500">{errorsSignUp.email.message}</div>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={`border-gray-200 rounded-xl ${errorsSignUp.password ? "border-red-500" : ""}`}
                  {...registerSignUp("password")}
                />
                {errorsSignUp.password && <div className="mt-2 text-sm text-red-500">{errorsSignUp.password.message}</div>}
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] text-white hover:bg-[#333] hover:text-white">
                {loading ? "Loading..." : "Sign Up"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signin">
            <form className="space-y-4" onSubmit={handleSubmitSignIn(onSignIn)}>
              <div className="space-y-2">
                <Label htmlFor="email-signin">Email</Label>
                <Input
                  id="email-signin"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className={`border-gray-200 rounded-xl ${errorsSignIn.email ? "border-red-500" : ""}`}
                  {...registerSignIn("email")}
                />
                {errorsSignIn.email && <div className="mt-2 text-sm text-red-500">{errorsSignIn.email.message}</div>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signin">Password</Label>
                <Input
                  id="password-signin"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className={`border-gray-200 rounded-xl ${errorsSignIn.password ? "border-red-500" : ""}`}
                  {...registerSignIn("password")}
                />
                {errorsSignIn.password && <div className="mt-2 text-sm text-red-500">{errorsSignIn.password.message}</div>}
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] text-white hover:bg-[#333] hover:text-white">
                {loading ? "Loading..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
