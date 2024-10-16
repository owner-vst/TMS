"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NavBar() {
  const [role, setRole] = useState(null);
  const pathname = usePathname(); // Use the usePathname hook to get the current path

  useEffect(() => {
    if (pathname) {
      const currentRole = pathname.split("/")[2]; // Extract 'admin', 'scholar', or 'user'
      setRole(currentRole); // Set the role based on the path
    }
  }, [pathname]);
  const menuItems = {
    admin: [
      { label: "View Thesis", link: "/dashboard/admin/view_thesis" },
      {
        label: "Moderate Guidelines",
        link: "/dashboard/admin/manage_guidelines",
      },
      { label: "Manage Peer Review", link: "/dashboard/admin/manage_peer" },
      { label: "Manage Users", link: "/dashboard/admin/manage_users" },
      { label: "Manage Thesis", link: "/dashboard/admin/manage_thesis" },

      { label: "Profile", link: "/dashboard/admin/profile" },
    ],
    scholar: [
      { label: "View Thesis", link: "/dashboard/scholar/view_thesis" },
      {
        label: "Moderate Guidelines",
        link: "/dashboard/scholar/manage_guidelines",
      },
      { label: "Manage Peer Review", link: "/dashboard/scholar/manage_peer" },
      { label: "Manage Thesis", link: "/dashboard/scholar/manage_thesis" },
      { label: "Submit Thesis", link: "/dashboard/scholar/submit_thesis" },
      { label: "Profile", link: "/dashboard/scholar/profile" },
    ],
    user: [
      { label: "View Thesis", link: "/dashboard/user/view_thesis" },
      { label: "Submit Thesis", link: "/dashboard/user/submit_thesis" },
      { label: "My Thesis", link: "/dashboard/user/my_thesis" },
      { label: "Profile", link: "/dashboard/user/profile" },
    ],
  };

  // Get the menu items for the current role
  const currentMenuItems = menuItems[role] || [];

  return (
    <div className="dlabnav">
      <div className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a aria-expanded="false">
              <i className="fas fa-bars"></i>
              <span className="nav-text">Dashboard</span>
            </a>
            <ul aria-expanded="false">
              {currentMenuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li></li>
        </ul>
        <div className="copyright fixed-bottom ">
          <p>
            <strong>ScholarVault</strong> © 2024 All Rights Reserved
          </p>
          <p className="fs-12">
            Made with <span className="heart" /> by ScholarVault
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
