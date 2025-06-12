"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CreateMainAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = () => {
    const mainAdminData = {
      main_admin_email: email,
      company_password: password,
    };

    console.log("Main Admin Created:", mainAdminData);
    alert(`Main Admin Created!\nEmail: ${email}`);

    // Clear fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-sm">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-center text-primary">
              Create Main Admin
            </h1>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter main admin email"
                className="placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-black">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter company password"
                className="placeholder-gray-400"
              />
            </div>

            <Button
              onClick={handleCreate}
              className="w-full bg-primary text-white text-lg"
            >
              Create
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
