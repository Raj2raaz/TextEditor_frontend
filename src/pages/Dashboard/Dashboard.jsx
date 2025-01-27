import React, { useState } from "react";
import WritePost from "../../components/WritePost";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.css";
import Header from "../../components/Header/Header";
import InputBox from "../../components/InputBox/InputBox";
import EditorsTools from "../../components/EditorTools/EditorTools";
import PostInput from "../../components/PostInput";
import PostFooter from "../../components/PostFooter";

function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [characters, setCharacters] = useState("");
  return (
    <div className="dashboard_container">
      <Sidebar />
      <div className="write_post_container">
        <Header />
        <EditorsTools />
        <InputBox
          setCharacters={setCharacters}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <PostFooter characters={characters} />
      </div>
      <div className="display_container">
        <PostInput inputValue={inputValue} />
      </div>
    </div>
  );
}

export default Dashboard;
