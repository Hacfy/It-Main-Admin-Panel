'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      // Replace this with real authentication later
      router.push("/dashboard");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">Admin Panel Login</h1>
        <Card className="w-full max-w-sm">
          <CardContent className="p-8 space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-left space-y-1">
                <Label htmlFor="email" className="text-black">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="placeholder-gray-400"
                />
              </div>
              <div className="text-left space-y-1">
                <Label htmlFor="password" className="text-black">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="placeholder-gray-400"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-white text-lg"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
