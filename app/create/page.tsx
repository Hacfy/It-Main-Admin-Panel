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
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = () => {
    const organisationData = {
      organisation_name: name,
      organisation_email: email,
      organisation_phone_number: phone,
      create_organisation_password: password,
    };

    console.log("Organization Created:", organisationData);
    alert(`Organization Created!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    
    // Clear fields
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
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
                placeholder="Enter organization name"
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
                placeholder="Enter email"
                className="placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-black">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
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
                placeholder="Create a password"
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
