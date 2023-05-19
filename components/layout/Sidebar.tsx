import { SlNote } from "react-icons/sl";
import { MdSportsHandball } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import useCurrentUser from "@/hooks/userCurrentUser";
import { signOut } from "next-auth/react";
const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    // { label: "Мой дневник", href: "/", icon: SlNote },
    {
      label: "Упражнения",
      href: "/exercises",
      icon: MdSportsHandball,    
    },
    {
      label: "Мой дневник",
      href: "/user/123",
      icon: SlNote ,
      auth: true
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          {currentUser && (
            <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Выход" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
