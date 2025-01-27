import React from "react";
import {
  Bold,
  Italic,
  Strikethrough,
  Smile,
  Paperclip,
  Image,
  Clipboard,
} from "lucide-react";

import "./editorTools.css";

function EditorsTools() {
  return (
    <div className="editors-tools">
      <button className="tool-button">
        <Bold />
      </button>
      <button className="tool-button">
        <Italic />
      </button>
      <button className="tool-button">
        <Strikethrough />
      </button>
      <button className="tool-button">
        <Smile />
      </button>
      <button className="ai-button">
        <span className="ai-icon">✨</span>
        <span className="ai-text">AI</span>
      </button>
      <button className="tool-button">
        <Clipboard />
      </button>
      <button className="tool-button">
        <Image />
      </button>
      <button className="tool-button">
        <Paperclip />
      </button>
    </div>
  );
}

export default EditorsTools;
