import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/EducationSidebar";
import { ReactNode } from "react";

const EducationLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex h-screen">
            <SidebarProvider>
                <AppSidebar />
                <main className="flex flex-1 justify-center">
                    <div className="w-full max-w-7xl px-4">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </div>
    );
};

export default EducationLayout;
