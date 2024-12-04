import Link from "next/link";
import React from "react";
import { Home, Settings, Table, FileText } from "lucide-react"; // Import icons from lucide-react

const EducationSidebar = () => {
  return (
    <div className="w-64 text-white p-6 border-r min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul>
        <li>
          <Link href="/education/basics" className="flex items-center py-2 px-4 rounded hover:bg-neutral-900">
            <span className="mr-3">
              <Home className="h-6 w-6" />
            </span>
            <span>Basics</span>
          </Link>
        </li>
        <li>
          <Link href="/education/settings" className="flex items-center py-2 px-4 rounded hover:bg-neutral-900">
            <span className="mr-3">
              <Settings className="h-6 w-6" />
            </span>
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link href="/education/table" className="flex items-center py-2 px-4 rounded hover:bg-neutral-900">
            <span className="mr-3">
              <Table className="h-6 w-6" />
            </span>
            <span>Table</span>
          </Link>
        </li>
        <li>
          <Link href="/education/usage" className="flex items-center py-2 px-4 rounded hover:bg-neutral-900">
            <span className="mr-3">
              <FileText className="h-6 w-6" />
            </span>
            <span>Usage</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EducationSidebar;
