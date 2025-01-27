import React from "react";
import Header from "./Header/Header";
import EditorTools from "./EditorTools/EditorTools";
import InputBox from "./InputBox/InputBox";

function WritePost() {
  return (
    <div>
      <Header />
      <EditorTools />
      <InputBox />
    </div>
  );
}

export default WritePost;
