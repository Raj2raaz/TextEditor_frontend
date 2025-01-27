import React, { useState, useRef, useEffect } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import myImg from "../../icons/person.jpg";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    // alert("Logged out successfully!");
    navigate('/')
    setIsDropdownOpen(false);
  };

  return (
    <div className="header_container">
      <h2>Write Post</h2>
      <div className="header_right_container">
        <button>
          <SpeedIcon />
          Check Score
        </button>

        <div className="profile-container" ref={dropdownRef}>
          <img
            src={myImg}
            alt="profile"
            className="profile-pic"
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .profile-pic:hover {
          opacity: 0.8;
        }

        .dropdown-menu {
          position: absolute;
          right: 0;
          top: 50px;
          background: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          min-width: 150px;
        }

        .dropdown-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .dropdown-menu li {
          padding: 12px 20px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.2s;
        }

        .dropdown-menu li:hover {
          background: #f3f3f3;
        }
      `}</style>
    </div>
  );
}

export default Header;
