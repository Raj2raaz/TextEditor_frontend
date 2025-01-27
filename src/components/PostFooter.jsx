import React from "react";
import { Calendar, Send } from "lucide-react";

function PostFooter({ characters }) {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <span>Last saved at Oct 4, 2023, 10:34 AM</span>
        <span>{characters} characters</span>
      </div>

      <div className="divider"></div>

      <div className="footer-buttons">
        <button className="btn btn-outline">Save as Draft</button>
        <button className="btn btn-outline">
          <Calendar size={16} />
          Schedule
        </button>
        <button className="btn btn-primary">
          Publish <Send size={16} />
        </button>
      </div>

      <style jsx>{`
        .footer-container {
          width: 100%;
          padding: 20px;
          background: #fff;
          font-family: Arial, sans-serif;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 15px;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: #e5e7eb;
          margin-bottom: 20px;
        }

        .footer-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline {
          border: 1px solid #d1d5db;
          background: #fff;
          color: #374151;
        }

        .btn-outline:hover {
          background: #f3f4f6;
        }

        .btn-primary {
          background: #007bff;
          color: #fff;
          border: none;
        }

        .btn-primary:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default PostFooter;
