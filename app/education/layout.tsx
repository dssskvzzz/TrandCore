import EducationSidebar from "@/components/EducationSidebar"; // Import Sidebar component
import { ReactNode } from "react";

// Layout component for the education section
const EducationLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <EducationSidebar />

            {/* Main Content Area */}
            <div className="flex-1 p-6">{children}</div>
        </div>
    );
};

export default EducationLayout;
