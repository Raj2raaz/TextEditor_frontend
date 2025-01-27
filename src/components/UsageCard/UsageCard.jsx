import React from "react";
import "./usageCard.css";

function UsageCard() {
  const wordsGenerated = 1.25; // in thousands
  const maxWords = 50; // in thousands
  const progress = (wordsGenerated / maxWords) * 100;

  return (
    <div className="usage-card">
      <div className="usage-header">
        <span className="title">Words generated</span>
        <span className="info-icon">ℹ️</span>
        <span className="usage-count">
          {wordsGenerated}k / {maxWords}k
        </span>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="reset-text">Monthly usage resets in 29 days</p>

      <button className="upgrade-btn">⚡ Upgrade Plan</button>
    </div>
  );
}

export default UsageCard;
