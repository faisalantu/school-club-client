import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";

function postBody({ body }) {
  if (body) {
    const contentState = convertFromRaw(JSON.parse(body));
    const editorState = EditorState.createWithContent(contentState);
    const styleMap = {
      CODE: {
        backgroundColor: "#d3d6db",
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 4,
      },
      CODEBLOCK: {
        backgroundColor: "#424642",
        color: "#f7f3e9",
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 4,
        display: "block",
      },
      BOLD: {
        color: "black",
        fontWeight: "bold",
      },
      HIGHLIGHT1: {
        backgroundColor: "#f8a488",
      },
    };
    return (
      <div className=''>
        <Editor
          editorKey='postRenderEditor'
          customStyleMap={styleMap}
          editorState={editorState}
          readOnly={true}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default postBody;
