"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../Logo";

function DashBoardHeader({ onToggle ,isMenuToggled}) {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [role, setRole] = useState(null);

  const pathname = usePathname(); // Use the usePathname hook to get the current path

  useEffect(() => {
    if (pathname) {
      const currentRole = pathname.split("/")[2]; // Extract 'admin', 'scholar', or 'user'
      setRole(currentRole); // Set the role based on the path
    }
  }, [pathname]);

  const toggleNotificationDropdown = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <div>
      <div className="nav-header">
        <Link href={`/dashboard/${role}`} className="brand-logo">
          {/* <Logo /> */}
          <img src="/dash/icons/icon.png" alt="logo" />
          {!isMenuToggled &&  <h3>ScholarVault</h3>}
        </Link>
        <a onClick={onToggle} className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </a>
        {/* <div className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div> */}
      </div>

      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">Dashboard</div>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown ">
                  <a
                    className="nav-link border border-white"
                    onClick={toggleNotificationDropdown} // Add onClick event
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <g data-name="Layer 2" transform="translate(-2 -2)">
                        <path
                          id="Path_20"
                          data-name="Path 20"
                          d="M22.571,15.8V13.066a8.5,8.5,0,0,0-7.714-8.455V2.857a.857.857,0,0,0-1.714,0V4.611a8.5,8.5,0,0,0-7.714,8.455V15.8A4.293,4.293,0,0,0,2,20a2.574,2.574,0,0,0,2.571,2.571H9.8a4.286,4.286,0,0,0,8.4,0h5.23A2.574,2.574,0,0,0,26,20,4.293,4.293,0,0,0,22.571,15.8ZM7.143,13.066a6.789,6.789,0,0,1,6.78-6.78h.154a6.789,6.789,0,0,1,6.78,6.78v2.649H7.143ZM14,24.286a2.567,2.567,0,0,1-2.413-1.714h4.827A2.567,2.567,0,0,1,14,24.286Zm9.429-3.429H4.571A.858.858,0,0,1,3.714,20a2.574,2.574,0,0,1,2.571-2.571H21.714A2.574,2.574,0,0,1,24.286,20a.858.858,0,0,1-.857.857Z"
                        />
                      </g>
                    </svg>
                  </a>
                  <div
                    className={`dropdown-menu dropdown-menu-end ${
                      isNotificationOpen ? "show" : ""
                    }`}
                  >
                    <div
                      id="DZ_W_Notification1"
                      className="widget-media dlab-scroll p-3"
                      style={{ maxHeight: 380, overflowY: "auto" }}
                    >
                      <ul className="timeline">
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img
                                alt="image"
                                width={50}
                                src="/dash/images/avatar/1.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Dr sultads Commented on your thesis
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-info">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">New Thesis added</h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-info">CH</div>
                            <div className="media-body">
                              <h6 className="mb-1">New Thesis added</h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* <li className="nav-item dropdown header-profile">
                  <button
                    className="nav-link border border-white"
                    onClick={toggleProfileDropdown} // Add onClick event
                    role="button"
                    style={{ zIndex: isProfileOpen ? 5000 : 1 }} // Adjust z-index if needed
                  >
                    <img
                      src="/dash/images/profile/pic1.jpg"
                      width={20}
                      alt="img"
                    />
                  </button>
                  <div
                    className={`dropdown-menu dropdown-menu-end ${
                      isProfileOpen ? "show" : ""
                    }`}
                    style={{ zIndex: 1050 }} // Ensure the dropdown is above other content
                  >
                    <Link
                      href="/"
                      className="dropdown-item ai-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                      <span className="ms-2">Logout</span>
                    </Link>
                  </div>
                </li> */}
                <li className="nav-item dropdown header-profile">
                  <a
                    className="nav-link"
                    onClick={toggleProfileDropdown}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="header-info2 d-flex align-items-center">
                      <img
                        src="/dash/images/profile/pic1.jpg"
                        alt="img"
                        className="profile-image"
                        style={{
                          width: '50px', // Adjust size as needed
                          height: '50px', // Keep it square for a perfect circle
                          borderRadius: '50%', // Makes the image round
                          objectFit: 'cover' // Ensures the image covers the area without distortion
                        }}
                      />
                      <div className="d-flex align-items-center sidebar-info ">
                   
                        <div>
                          <span></span>
                          <span className="font-w400 d-block ">
                            Franklin Jr
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div
                    className={`dropdown-menu dropdown-menu-end ${
                      isProfileOpen ? "show" : ""
                    }`}
                    style={{ marginTop: '190px' }} 
                  >
                    <Link
                      href={`/dashboard/${role}/profile`}
                      className="dropdown-item ai-icon"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      <svg
                        id="icon-user2"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span className="ms-2">Profile </span>
                    </Link>

                    <Link href="/" className="dropdown-item ai-icon"
                    style={{ whiteSpace: 'nowrap' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                      <span className="ms-2">Logout </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
