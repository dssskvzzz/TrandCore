"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js Router for navigation
import SideBar from "@/components/TraderSideBar";
import sectionContent from "@/data/sectionData"; // Импортируем данные
import Cookies from "js-cookie"; // Импортируем js-cookie

const TraderHome = () => {
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const router = useRouter();
  const user = Cookies.get("user");

  useEffect(() => {
    if (!user) {
      // Redirect to login page if user is not logged in
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <SideBar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <div className="col-span-5 mt-3 mr-3 border rounded-xl">
        {sectionContent[activeSection] || sectionContent.dashboard}
      </div>
    </div>
  );
};

export default TraderHome;
