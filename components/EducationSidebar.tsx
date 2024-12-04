import { Calendar, Home, Inbox, Search, Settings, ArrowLeft } from "lucide-react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Basics",
    url: "/education/basics",
    icon: Home,
  },
  {
    title: "Settings",
    url: "/education/settings",
    icon: Inbox,
  },
  {
    title: "Table",
    url: "/education/table",
    icon: Calendar,
  },
  {
    title: "Usage",
    url: "/education/usage",
    icon: Search,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="!bg-neutral-950 flex flex-col justify-between h-full">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Education</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarMenuItem className="mt-auto p-2 mb-2">
        <SidebarMenuButton asChild>
          <Link href="/">
            <ArrowLeft />
            <span>Back</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </Sidebar>
  )
}
