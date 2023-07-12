import Editor from "./Editor";
import React from "react";
function App() {
  const [editorContent, setEditorContent] = React.useState("");
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Editor content={editorContent} setContent={setEditorContent} />
      <button
        className="bg-blue-600 p-3  mt-4 text-white rounded-xl"
        onClick={() => console.log(editorContent)}
      >
        console content
      </button>
    </div>
  );
}

export default App;
