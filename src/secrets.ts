'use strict';

import * as vscode from 'vscode';
import Window = vscode.window;
import Range = vscode.Range;
import Selection = vscode.Selection;
import TextDocument = vscode.TextDocument;
import TextEditor = vscode.TextEditor;

export function activate(context: vscode.ExtensionContext) {

	let encode = vscode.commands.registerCommand('secrets.base64Encode', () => {    
        let editor = Window.activeTextEditor;
		let doc = editor.document;
		let selection = editor.selections;
        base64Encode(editor, doc, selection);
	});
    
    let decode = vscode.commands.registerCommand('secrets.base64Decode', () => {    
        let editor = Window.activeTextEditor;
		let doc = editor.document;
		let selection = editor.selections;
        base64Decode(editor, doc, selection);
	});

	context.subscriptions.push(encode);
}

// Encode - string to Base64
function base64Encode(editor: TextEditor, doc: TextDocument, sel: Selection[]) {
    for (var i in sel) {
        editor.edit(function(edit) {
			let txt: string = doc.getText(new Range(sel[i].start, sel[i].end));
            let buffer: Buffer = new Buffer(txt);
			edit.replace(sel[i], buffer.toString('base64'));
		});
    }
}

// Decode - Base64 to string
function base64Decode(editor: TextEditor, doc: TextDocument, sel: Selection[]) {
    for (var i in sel) {
		editor.edit(function(edit) {
			let txt: string = doc.getText(new Range(sel[i].start, sel[i].end));
            let buffer: Buffer = new Buffer(txt, 'base64');
			edit.replace(sel[i], buffer.toString());
		});
	}
}

export function deactivate() {
}
