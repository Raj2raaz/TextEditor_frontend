import React, { useState, useRef } from "react";
import { Check, Scissors, ArrowRight, Text, Smile, SpellCheck, Translate } from "lucide-react";

function RightClickMenu() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const menuItems = [
    { icon: <Check size={18} />, text: "Complete" },
    { icon: <Scissors size={18} />, text: "Shorten" },
    { icon: <ArrowRight size={18} />, text: "Extend" },
    { icon: <Text size={18} />, text: "Rephrase", highlighted: true },
    { icon: <ArrowRight size={18} />, text: "Summarize" },
    { icon: <Text size={18} />, text: "tl;dr" },
    { icon: <Smile size={18} />, text: "Simplify" },
    { icon: <SpellCheck size={18} />, text: "Spelling & Grammar" },
    { divider: true },
    { icon: <Smile size={18} />, text: "Emojify" },
    { icon: <ArrowRight size={18} />, text: "Tone of Voice" },
    { icon: <Translate size={18} />, text: "Translate" },
  ];

  const handleContextMenu = (e) => {
    e.preventDefault();
    setVisible(true);
    setPosition({ x: e.pageX, y: e.pageY });
  };

  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick} style={{ height: "100vh", cursor: "context-menu" }}>
      {visible && (
        <ul
          ref={menuRef}
          className="context-menu"
          style={{ top: position.y, left: position.x }}
        >
          {menuItems.map((item, index) =>
            item.divider ? (
              <hr key={index} className="divider" />
            ) : (
              <li key={index} className={item.highlighted ? "highlighted" : ""}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            )
          )}
        </ul>
      )}
      <p style={{ textAlign: "center", marginTop: "20px" }}>Right-click anywhere to open the menu</p>

      <style jsx>{`
        .context-menu {
          position: absolute;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 8px 0;
          list-style: none;
          width: 200px;
          font-family: Arial, sans-serif;
          z-index: 1000;
        }

        .context-menu li {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 14px;
          color: #333;
          transition: background 0.3s ease;
        }

        .context-menu li:hover {
          background: #f0f0f0;
        }

        .context-menu .highlighted {
          background: #f5f3ff;
          color: #6b4eff;
          font-weight: bold;
          border-left: 4px solid #6b4eff;
        }

        .context-menu li span {
          margin-left: 10px;
        }

        .divider {
          border: 0;
          height: 1px;
          background: #ddd;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}

export default RightClickMenu;
