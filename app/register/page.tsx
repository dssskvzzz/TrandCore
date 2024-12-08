"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner"

import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        agreeToTerms: false,
    });
    const [formErrors, setFormErrors] = useState({
        username: "",
        email: "",
        password: "",
        agreeToTerms: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [id]: type === "checkbox" ? checked : value,
        });
        setFormErrors({ ...formErrors, [id]: "" });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.values(errors).some((error) => error)) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formValues),
            });

            const data = await response.json();

            if (response.ok) {
                router.push("/login");
                toast.success("Registration successful.");
            } else {
                toast(data.error || "Registration failed.");
            }
        } catch (err) {
            console.error("Error during registration:", err);
            toast.error("Registration failed.");
        }
    };


    const validateForm = () => {
        const errors = {
            username: "",
            email: "",
            password: "",
            agreeToTerms: "",
        };

        if (!formValues.username.trim()) {
            errors.username = "Please enter a username";
        }

        if (!formValues.email.trim()) {
            errors.email = "Please enter an email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            errors.email = "Invalid email format";
        }

        if (!formValues.password) {
            errors.password = "Please enter a password";
        } else if (formValues.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        if (!formValues.agreeToTerms) {
            errors.agreeToTerms = "You must agree to the terms and conditions";
        }

        return errors;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 rounded-lg shadow-md border">
                <div className="flex justify-between">
                    <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>
                    <Button variant={"outline"} className="w-6" onClick={() => router.push("/")}>
                        <ArrowLeft />
                    </Button>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="text"
                            value={formValues.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                        {formErrors.username && (
                            <p className="text-red-500 text-sm">{formErrors.username}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="john.doe@example.com"
                        />
                        {formErrors.email && (
                            <p className="text-red-500 text-sm">{formErrors.email}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={formValues.password}
                            onChange={handleChange}
                            placeholder="●●●●●●●●●●"
                        />
                        {formErrors.password && (
                            <p className="text-red-500 text-sm">{formErrors.password}</p>
                        )}
                    </div>
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            checked={formValues.agreeToTerms}
                            onChange={handleChange}
                        />
                        <Label htmlFor="agreeToTerms" className="ml-2">
                            I agree to the{" "}
                            <Link href="/terms" className="text-blue-500 hover:underline">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    {formErrors.agreeToTerms && (
                        <p className="text-red-500 text-sm">{formErrors.agreeToTerms}</p>
                    )}
                    <Button type="submit" className="w-full">
                        Register
                    </Button>
                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
