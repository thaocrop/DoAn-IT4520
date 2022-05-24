import { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

import { convertToHTML, convertFromHTML } from "draft-convert";

export default class CEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createWithContent(convertFromHTML(props.initialHTML)),
        };

        this.focus = () => this.editor.focus();
        this.onChange = (editorState) => {
            if (props.setEditorState) {
                props.setEditorState(convertToHTML(editorState.getCurrentContent()));
            }
            this.setState({ editorState });
        };
    }

    onClickEditor = () => {
        this.focus();
    };

    handleKeyCommand = (command) => {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    };

    toggleToolbar = (inlineStyle) => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    };

    render() {
        const { editorState } = this.state;
        const { title } = this.props;
        // Make sure we're not on the ssr
        if (typeof window !== "undefined") {
            // Let's stick the toolbar to the selection
            // when the window is resized
            window.addEventListener("resize", this.checkSelectedText);
        }

        return (
            <div className="shadow p-6 min-h-64 overflow-auto">
                <div className="border-b-2 mb-5">
                    <ToolBar editorState={editorState} onToggle={this.toggleToolbar} />
                </div>
                <div onClick={this.onClickEditor} onBlur={this.checkSelectedText}>
                    <Editor
                        customStyleMap={styleMap}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        editorKey="foobar"
                        spellCheck={false}
                        ref={(element) => {
                            this.editor = element;
                        }}
                    />
                </div>
            </div>
        );
    }
}

// Custom overrides for each style
const styleMap = {
    CODE: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 4,
    },
};

class ToolbarButton extends Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        const buttonStyle = {
            padding: 10,
        };
        return (
            <span onMouseDown={this.onToggle} style={buttonStyle}>
                {this.props.label}
            </span>
        );
    }
}

var toolbarItems = [
    { label: "B", style: "BOLD" },
    { label: "I", style: "ITALIC" },
    { label: "U", style: "UNDERLINE" },
];

const ToolBar = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div>
            {toolbarItems.map((toolbarItem) => (
                <ToolbarButton
                    key={toolbarItem.label}
                    active={currentStyle.has(toolbarItem.style)}
                    label={toolbarItem.label}
                    onToggle={props.onToggle}
                    style={toolbarItem.style}
                />
            ))}
        </div>
    );
};
