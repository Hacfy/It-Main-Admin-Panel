"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreate = () => {
    console.log("User Created:", { name, email });
    alert(`User Created!\nName: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-sm">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-center text-primary">Create Organization</h1>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-black">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
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
