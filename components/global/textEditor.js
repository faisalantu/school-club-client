import { Component } from "react";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsCode,
} from "react-icons/bs";
import { BiHighlight, BiCodeBlock } from "react-icons/bi";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialData)),
      showRawData: false,
    };

    this.focus = () => this.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });
  }

  checkActiveButton(buttonType) {
    const currentStyle = this.state.editorState.getCurrentInlineStyle();
    const isActive = currentStyle.has(buttonType);
    return isActive;
  }

  // bold button
  _onBoldClick(e) {
    e.preventDefault();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }
  // Italic button
  _onItalicClick(e) {
    e.preventDefault();
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }
  // Underline button
  _onUnderlineClick(e) {
    e.preventDefault();
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  }
  // Code button
  _onCodeClick(e) {
    e.preventDefault();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "CODE"));
  }
  // CodeBlock button
  _onCodeBlockClick(e) {
    e.preventDefault();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "CODEBLOCK"));
  }
  // HIGHLIGHT1 button
  _onLinkClick(e) {
    e.preventDefault();
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "HIGHLIGHT1")
    );
  }

  /*   onClickEditor = () => {
    this.focus();
    this.checkSelectedText();
  };

  // 1- Check if some text is selected
  checkSelectedText = () => {
    if (typeof window !== "undefined") {
      const text = window.getSelection().toString();
      if (text !== "") {
        // 1-a Define the selection coordinates
        this.setSelectionXY();
      } else {
        // Hide the toolbar if nothing is selected
        this.setState({
          showToolbar: false,
        });
      }
    }
  };

  // 2- Identify the selection coordinates
  setSelectionXY = () => {
    var r = window.getSelection().getRangeAt(0).getBoundingClientRect();
    var relative = document.body.parentNode.getBoundingClientRect();
    // 2-a Set the selection coordinates in the state
    this.setState({
      selectionCoordinates: r,
      windowWidth: relative.width,
      selectionMeasures: {
        w: r.width,
        h: r.height,
      },
    });
  }; */

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  render() {
    const { editorState } = this.state;
    // Make sure we're not on the ssr
    if (typeof window !== "undefined") {
      // Let's stick the toolbar to the selection
      // when the window is resized
      window.addEventListener("resize", this.checkSelectedText);
    }

    return (
      <div>
        <div className='mb-3 border-b-2 pb-2'>
          <button
            className={`hover:shadow-md p-2 hover:bg-gray-300 rounded mr-2 ${
              this.checkActiveButton("BOLD") ? "bg-gray-300" : ""
            }`}
            onMouseDown={this._onBoldClick.bind(this)}
          >
            <BsTypeBold />
          </button>
          <button
            className={`hover:shadow-md p-2 hover:bg-gray-300 rounded mr-2 ${
              this.checkActiveButton("ITALIC") ? "bg-gray-300" : ""
            }`}
            onMouseDown={this._onItalicClick.bind(this)}
          >
            <BsTypeItalic />
          </button>
          <button
            className={`hover:shadow-md p-2 hover:bg-gray-300 rounded mr-2 ${
              this.checkActiveButton("UNDERLINE") ? "bg-gray-300" : ""
            }`}
            onMouseDown={this._onUnderlineClick.bind(this)}
          >
            <BsTypeUnderline />
          </button>
          <button
            className={`hover:shadow-md p-2 hover:bg-gray-300 rounded mr-2 ${
              this.checkActiveButton("CODE") ? "bg-gray-300" : ""
            }`}
            onMouseDown={this._onCodeClick.bind(this)}
          >
            <BsCode />
          </button>
          <button
            className={`hover:shadow-md p-2 hover:bg-gray-300 rounded mr-2 ${
              this.checkActiveButton("CODEBLOCK") ? "bg-gray-300" : ""
            }`}
            onMouseDown={this._onCodeBlockClick.bind(this)}
          >
            <BiCodeBlock />
          </button>
          <button
            className={`hover:shadow-md p-2 hover:bg-gray-300 rounded mr-2 ${
              this.checkActiveButton("HIGHLIGHT1") ? "bg-gray-300" : ""
            }`}
            onMouseDown={this._onLinkClick.bind(this)}
          >
            <BiHighlight style={{ color: "#f8a488" }} />
          </button>
        </div>
        <div className="border h-32 cursor-text" onClick={this.focus}>
          <Editor
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder=''
            editorKey='foobar'
            spellCheck={false}
            ref={(element) => {
              this.editor = element;
            }}
          />
        </div>

        {/* this section shouldnt be in producion */}
        {/* <div style={{ marginTop: 40 }}>
          <button
            onClick={() =>
              this.setState({ showRawData: !this.state.showRawData })
            }
          >
            {!this.state.showRawData ? 'Show' : 'Hide'} Raw Data
          </button>
          <br />
          {this.state.showRawData &&
            JSON.stringify(convertToRaw(editorState.getCurrentContent()))}
          
        </div> */}
      </div>
    );
  }
}

// Custom overrides for each style
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

const initialData = {
  blocks: [
    {
      key: "16d0k",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};
