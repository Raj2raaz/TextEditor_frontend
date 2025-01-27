import React, { useState, useRef, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";

import "./inputBox.css";

function InputBox({ inputValue, setInputValue, setCharacters }) {
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });
  const editableDivRef = useRef(null);

  useEffect(() => {
    if (
      editableDivRef.current &&
      inputValue !== editableDivRef.current.innerHTML
    ) {
      editableDivRef.current.innerHTML = inputValue;
    }
  }, [inputValue]);

  // Handle text selection and open toolbar at center of screen
  const handleSelection = () => {
    const selection = window.getSelection();
    if (
      selection &&
      selection.rangeCount > 0 &&
      selection.toString().trim() !== ""
    ) {
      setToolbarPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
    }
  };

  // Function to toggle text formatting
  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
    setShowToolbar(false);
    setInputValue(editableDivRef.current.innerHTML);
  };

  const handleInput = () => {
    setInputValue(editableDivRef.current.innerHTML);
    const textContent = editableDivRef.current.innerText; // Get text without HTML
    console.log(textContent.length);
    setCharacters(textContent.length);
  };

  return (
    <div className="input-container">
      <div
        ref={editableDivRef}
        className="editable-div"
        contentEditable="true"
        onChange={(e) => setCharacters(e.target)}
        onInput={handleInput}
        onMouseUp={handleSelection}
        onDoubleClick={handleSelection}
      ></div>

      {showToolbar && (
        <div
          className="toolbar"
          style={{
            top: `${toolbarPosition.y}px`,
            left: `${toolbarPosition.x}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <button onClick={() => applyFormatting("bold")}>
            <b>B</b>
          </button>
          <button onClick={() => applyFormatting("italic")}>
            <i>I</i>
          </button>
          <button onClick={() => applyFormatting("underline")}>
            <u>U</u>
          </button>
          <button onClick={() => setShowToolbar(false)}>❌</button>
        </div>
      )}

      <div className="headline-insert">
        <button
          className="add-headline"
          onClick={() =>
            setInputValue(inputValue + "<h1><b>New Headline</b></h1>")
          }
        >
          <AddIcon />
        </button>
      </div>

      <style jsx>{`
        .toolbar {
          position: fixed;
          background: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          padding: 10px;
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .toolbar button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          padding: 5px;
          color: #333;
          transition: all 0.3s ease;
        }

        .toolbar button:hover {
          color: #1877f2;
        }

        .headline-insert {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .add-headline {
          background: #1877f2;
          border: none;
          border-radius: 50%;
          color: #fff;
          font-size: 20px;
          width: 40px;
          height: 40px;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .add-headline:hover {
          background: #145dbf;
        }
      `}</style>
    </div>
  );
}

export default InputBox;
