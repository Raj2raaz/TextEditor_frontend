import React, { useState, useRef } from "react";
import {
  Smartphone,
  Tablet,
  Monitor,
  ThumbsUp,
  MessageCircle,
  Share2,
  Send,
} from "lucide-react";
import myImg from "../icons/person.jpg";

// Function to convert Markdown to HTML
const convertMarkdownToHTML = (text) => {
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold (**text** -> <b>text</b>)
    .replace(/__(.*?)__/g, "<u>$1</u>") // Underline (__text__ -> <u>text</u>)
    .replace(/_(.*?)_/g, "<i>$1</i>"); // Italic (_text_ -> <i>text</i>)
  return formattedText;
};

function PostInput({ inputValue }) {
  const [viewMode, setViewMode] = useState("mobile");
  const postRef = useRef(null);

  // Handle text copying (copy only text content inside post-content)
  const copyText = () => {
    const postContent = postRef.current.querySelector(".post-content");
    if (postContent) {
      const textToCopy = postContent.innerText;
      navigator.clipboard.writeText(textToCopy);
      alert("Text copied to clipboard!");
    }
  };

  return (
    <div className="post-preview-container">
      <div className="header">
        <h3>Post Preview</h3>
        <div className="device-toggle">
          <span>Devices:</span>
          <button
            className={viewMode === "mobile" ? "active" : ""}
            onClick={() => setViewMode("mobile")}
          >
            <Smartphone size={20} />
          </button>
          <button
            className={viewMode === "tablet" ? "active" : ""}
            onClick={() => setViewMode("tablet")}
          >
            <Tablet size={20} />
          </button>
          <button
            className={viewMode === "desktop" ? "active" : ""}
            onClick={() => setViewMode("desktop")}
          >
            <Monitor size={20} />
          </button>
        </div>
        <button className="copy-btn" onClick={copyText}>
          Copy Text
        </button>
      </div>

      <div className={`post-container ${viewMode}`} ref={postRef}>
        <div className="post-card">
          <div className="post-header">
            <img src={myImg} alt="profile" className="profile-pic" />
            <div className="user-info">
              <span className="username">Cody Fisher</span>
              <span className="details">
                UI/UX Design | Web & Mobile Design | Front-end
              </span>
              <span className="time">Now • 🌍</span>
            </div>
          </div>
          <p
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: inputValue.trim()
                ? convertMarkdownToHTML(inputValue)
                : "Start typing to see the preview here...",
            }}
          ></p>
          <div className="post-footer">
            <div className="reactions">
              <span role="img" aria-label="like">
                👍
              </span>
              <span role="img" aria-label="clap">
                👏
              </span>
              <span role="img" aria-label="heart">
                ❤️
              </span>
              <span className="reaction-count">88</span>
            </div>
            <div className="stats">4 comments • 1 repost</div>
          </div>
          <div className="actions">
            <button>
              <ThumbsUp size={16} /> Like
            </button>
            <button>
              <MessageCircle size={16} /> Comment
            </button>
            <button>
              <Share2 size={16} /> Share
            </button>
            <button>
              <Send size={16} /> Send
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .post-preview-container {
          width: 100%;
          font-family: Arial, sans-serif;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          border-bottom: 1px solid #d6dde1;
          background: #f9f9f9;
          margin-bottom: 15px;
          flex-wrap: wrap;
          width: 100%;
        }

        .device-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .device-toggle span {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }

        .device-toggle button {
          border: none;
          background: none;
          cursor: pointer;
          font-size: 20px;
          color: #888;
          transition: color 0.3s ease;
        }

        .device-toggle button.active {
          color: #1877f2;
          background: #e5f1ff;
          border-radius: 50%;
          padding: 5px;
        }

        .copy-btn {
          border: 1px solid #1877f2;
          background: transparent;
          color: #1877f2;
          border-radius: 20px;
          padding: 8px 20px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .post-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .profile-pic {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .username {
          font-weight: bold;
          color: #000;
        }

        .details {
          font-size: 12px;
          color: #777;
        }

        .time {
          font-size: 12px;
          color: #888;
        }

        .copy-btn:hover {
          background: #1877f2;
          color: #fff;
        }

        .post-container {
          margin: 0 auto;
          transition: all 0.3s ease;
          overflow: hidden;
          word-wrap: break-word;
        }

        .mobile {
          max-width: 360px;
        }

        .tablet {
          max-width: 400px;
        }

        .desktop {
          max-width: 480px;
        }

        .post-card {
          background: #fff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
          font-size: 14px;
        }

        .post-content {
          font-size: 14px;
          min-height: 100px;
          max-height: 300px;
          color: #333;
          margin-bottom: 10px;
          line-height: 1.6;
          white-space: pre-wrap;
          overflow-y: auto;
        }

        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #ddd;
          padding-top: 10px;
          font-size: 12px;
          color: #777;
        }

        .reactions {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .reaction-count {
          font-weight: bold;
          color: #000;
        }

        .actions {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          gap: 10px;
        }

        .actions button {
          display: flex;
          align-items: center;
          gap: 5px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 14px;
          color: #555;
        }

        .actions button:hover {
          color: #1877f2;
        }
      `}</style>
    </div>
  );
}

export default PostInput;
