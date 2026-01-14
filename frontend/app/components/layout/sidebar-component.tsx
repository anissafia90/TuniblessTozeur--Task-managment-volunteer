import { cn } from "@/lib/utils";
import { useAuth } from "@/provider/auth-context";
import type { Workspace } from "@/types";
import {
  CheckCircle2,
  ChevronsLeft,
  ChevronsRight,
  LayoutDashboard,
  ListCheck,
  LogOut,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SidebarNav } from "./sidebar-nav";

export const SidebarComponent = ({
  currentWorkspace,
}: {
  currentWorkspace: Workspace | null;
}) => {
  const { user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    {
      title: "لوحة التحكم",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "مساحات العمل",
      href: "/workspaces",
      icon: Users,
    },
    {
      title: "مهامي",
      href: "/my-tasks",
      icon: ListCheck,
    },
    {
      title: "الأعضاء",
      href: `/members`,
      icon: Users,
    },
    {
      title: "الإنجازات",
      href: `/achieved`,
      icon: CheckCircle2,
    },
    {
      title: "الإعدادات",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div
      dir="rtl"
      className={cn(
        "flex flex-col border-r bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16 md:w[80px]" : "w-16 md:w-[240px]"
      )}
    >
      <div className="flex h-14 items-center border-b px-4 mb-4">
        <Link to="/dashboard" className="flex items-center">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Wrench className="size-6 text-blue-600" />
              <span className="font-semibold text-lg hidden md:block">
                TuniBless
              </span>
            </div>
          )}

          {isCollapsed && <Wrench className="size-6 text-blue-600" />}
        </Link>

        <Button
          variant={"ghost"}
          size="icon"
          className="mr-auto hidden md:block"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={
            isCollapsed ? "فتح القائمة الجانبية" : "إغلاق القائمة الجانبية"
          }
        >
          {isCollapsed ? (
            <ChevronsLeft className="size-4" />
          ) : (
            <ChevronsRight className="size-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-2">
        <SidebarNav
          items={navItems}
          isCollapsed={isCollapsed}
          className={cn(isCollapsed && "items-center space-y-2")}
          currentWorkspace={currentWorkspace}
        />
      </ScrollArea>

      <div className="border-t pt-4 pb-4 px-2">
        <Button
          variant={"ghost"}
          size={isCollapsed ? "icon" : "default"}
          onClick={logout}
          className="w-full justify-start hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className={cn("size-4", !isCollapsed && "mr-2")} />
          <span className="hidden md:inline-block">تسجيل الخروج</span>
        </Button>
      </div>
    </div>
  );
};
