"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js Router for navigation
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import Cookies from "js-cookie"; // Import js-cookie

export default function LoginPage() {
    const router = useRouter();
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [formErrors, setFormErrors] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
        setFormErrors({ ...formErrors, [id]: "" });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.values(errors).some((error) => error)) {
            setFormErrors(errors);
            Object.entries(errors).forEach(([field, error]) => {
                if (error) {
                    toast.error(`${field.charAt(0).toUpperCase() + field.slice(1)}: ${error}`);
                }
            });
            return;
        }

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formValues),
            });

            const data = await response.json();

            if (response.ok) {
                if (rememberMe) {
                    // Set cookie for indefinite duration if "Remember me" is checked
                    Cookies.set("user", JSON.stringify(data.user), { expires: 365 * 10, sameSite: 'lax', secure: true });
                } else {
                    // Set cookie with 1-minute expiration if "Remember me" is not checked
                    Cookies.set("user", JSON.stringify(data.user), { expires: 1 / 1440, sameSite: 'lax', secure: true });
                }
                console.log("Login Successful:", formValues);
                router.push("/");
                toast.success("Login successful.");
            } else {
                toast.error(data.error || "Login failed");
            }
        } catch (err) {
            console.error(err);
            toast.error("Login failed.");
        }
    };

    const validateForm = () => {
        const errors = { email: "", password: "" };

        if (!formValues.email.trim()) {
            errors.email = "Please enter an email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            errors.email = "Invalid email format";
        }

        if (!formValues.password) {
            errors.password = "Please enter a password";
        }

        return errors;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 rounded-lg shadow-md border">
                <div className="flex justify-between">
                    <h1 className="mb-6 text-2xl font-bold text-center">Log In</h1>
                    <Button variant={"outline"} className="w-6" onClick={() => router.push("/")}>
                        <ArrowLeft />
                    </Button>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="jhon.doe@ex.com"
                        />
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
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm">
                                Remember me
                            </label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <Button type="submit" className="w-full">
                        Log In
                    </Button>
                    <p className="text-center text-sm">
                        No account?{" "}
                        <Link href="/register" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
