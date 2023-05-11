import React from "react";
import twitterLogo from "../images/twitter.svg";
import { useState } from "react";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/icons";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },

];
const Sidebar = () => {
  const [active,setActive] = useState("Home")
  const handleMenuItemClick=(name)=>{
    setActive(name);
  }

  return (
    <div className="h-screen sticky top-0 w-72 flex flex-col justify-between p-2">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest">
          <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9" />
        </div>

        <nav className="mb-4">
          <ul className="flex flex-col">
            {sideLinks.map(link=>
              <SideLink key={link.name} active={active} onMenuItemClick={handleMenuItemClick} name={link.name} Icon={link.icon}></SideLink>)}
          </ul>
        </nav>
        <button className="items-center text-white shadow-lg bg-primary-base hover:bg-primary-dark duration-200 rounded-full py-3 px-8 w-11/12">
          Tweet
        </button>
      </div>
      <UserBox/>
    </div>
  );
};

export default Sidebar;
