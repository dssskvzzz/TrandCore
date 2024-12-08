"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <p className="text-lg text-gray-400 mb-8">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Button variant="outline" onClick={() => router.push("/")}>
                <ArrowLeft className="mr-2" />
                Back to Home
            </Button>
        </div>
    );
}
