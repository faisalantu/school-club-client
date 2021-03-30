import { Component } from 'react'
import {BsTypeBold,BsTypeItalic,BsTypeUnderline,BsCode,BsLink45Deg} from 'react-icons/bs'
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialData)),
      showToolbar: false,
      windowWidth: 0,
      toolbarMeasures: {
        w: 0,
        h: 0,
      },
      selectionMeasures: {
        w: 0,
        h: 0,
      },
      selectionCoordinates: {
        x: 0,
        y: 0,
      },
      toolbarCoordinates: {
        x: 0,
        y: 0,
      },
      showRawData: false,
    }

    this.focus = () => this.editor.focus()
    this.onChange = (editorState) => this.setState({ editorState })
  }
  // bold button
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  // Italic button
  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  // Underline button
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
  // Code button
  _onCodeClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
  }
  // Link button
  _onLinkClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITEM'));
  }

  onClickEditor = () => {
    this.focus()
    this.checkSelectedText()
  }

  // 1- Check if some text is selected
  checkSelectedText = () => {
    if (typeof window !== 'undefined') {
      const text = window.getSelection().toString()
      if (text !== '') {
        // 1-a Define the selection coordinates
        this.setSelectionXY()
      } else {
        // Hide the toolbar if nothing is selected
        this.setState({
          showToolbar: false,
        })
      }
    }
  }

  // 2- Identify the selection coordinates
  setSelectionXY = () => {
    var r = window.getSelection().getRangeAt(0).getBoundingClientRect()
    var relative = document.body.parentNode.getBoundingClientRect()
    // 2-a Set the selection coordinates in the state
    this.setState(
      {
        selectionCoordinates: r,
        windowWidth: relative.width,
        selectionMeasures: {
          w: r.width,
          h: r.height,
        },
      }
      
    )
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  render() {
    const { editorState } = this.state
    // Make sure we're not on the ssr
    if (typeof window !== 'undefined') {
      // Let's stick the toolbar to the selection
      // when the window is resized
      window.addEventListener('resize', this.checkSelectedText)
    }

    return (
      <div>
        <div className='mb-3 border-b-2 pb-2'>
        <button className="p-2 hover:bg-gray-400 rounded mr-2" onClick={this._onBoldClick.bind(this)}><BsTypeBold/></button>
        <button className="p-2 hover:bg-gray-400 rounded mr-2" onClick={this._onItalicClick.bind(this)}><BsTypeItalic/></button>
        <button className="p-2 hover:bg-gray-400 rounded mr-2" onClick={this._onUnderlineClick.bind(this)}><BsTypeUnderline/></button>
        <button className="p-2 hover:bg-gray-400 rounded mr-2" onClick={this._onCodeClick.bind(this)}><BsCode/></button>
        <button className="p-2 hover:bg-gray-400 rounded mr-2" onClick={this._onLinkClick.bind(this)}><BsLink45Deg/></button>
        </div>
        <div onClick={this.onClickEditor} onBlur={this.checkSelectedText}>
          <Editor
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder="Tell a story..."
            editorKey="foobar"
            spellCheck={false}
            ref={(element) => {
              this.editor = element
            }}
          />
        </div>
        <div style={{ marginTop: 40 }}>
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
          
        </div>
      </div>
    )
  }
}

// Custom overrides for each style
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 4,
  },
  BOLD: {
    color: 'black',
    fontWeight: 'bold',
  },
  ANYCUSTOMSTYLE: {
    color: '#00e400',
  },
}

const initialData = {
  blocks: [
    {
      key: '16d0k',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: 'BOLD' }],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
}