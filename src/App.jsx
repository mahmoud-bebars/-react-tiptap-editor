import Editor from "./Editor";
import React from "react";
function App() {
  const [editorContent, setEditorContent] = React.useState(
    "<p><strong>Hello World,</strong></p><p>This Is a Demo Use of The Editor</p><p></p><p>Try Your Self like<u> UnderLine</u></p><p>or <s>Strike</s></p><p><strong>Bold is Gold</strong></p><p><em>Italic Is Elite</em></p><p><em><mark>Or You Want To Highlight</mark></em></p><p>Did I told You About Justify</p><p style='text-align: right'>Left</p><p>right</p><p style='text-align: center'>or even center</p><p>try The Link &amp; visit <a target='_blank' rel='noopener noreferrer nofollow' class='link link' href='https://github.com/mahmoud-bebars'>My GitHub</a></p><p style='text-align: center'></p>"
  );
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-2">
      <p className="text-xl text-center font-bold">TipTap Rich Text Editor</p>
      <Editor content={editorContent} setContent={setEditorContent} />

      {editorContent !== "" && (
        <>
          <p className="text-xl text-center font-bold">Preview</p>
          <div
            onClick={() => console.log(editorContent)}
            className="bg-white w-full max-w-lg p-3 rounded-lg shadow-lg cursor-pointer"
            dangerouslySetInnerHTML={{ __html: editorContent }}
          />
          <p className="text-sm text-center text-gray-400 underline font-normal">
            Click onthe Container to console The output HTML
          </p>
        </>
      )}

      <a
        href="https://github.com/mahmoud-bebars/Tiptap_Editor_Component"
        target="blank"
        className="text-sm text-gray-200 underline"
      >
        Visit The Repo For More Infornmation
      </a>
    </div>
  );
}

export default App;
