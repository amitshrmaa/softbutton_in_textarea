import React, { useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Quill } from 'react-quill';
import ButtonBlot from './ButtonBlot';
import "./App.css"

Quill.register({ 'formats/button': ButtonBlot });

const modules = {
  toolbar: [
    ['bold', 'italic'],
    ['link', 'blockquote', 'code-block', 'image'],
    [{ list: 'ordered' }, { list: 'bullet' }]
  ]
};

const formats = [
  'bold', 'italic', 'link', 'blockquote', 'code-block', 'image', 'list', 'button'
];

const QuillEditor = ({ setAppendButton }) => {
  const quillRef = useRef(null);

  useEffect(() => {
    if(quillRef.current) {
      setAppendButton(() => () => {
        const quillInstance = quillRef.current.getEditor();
        let range = quillInstance.getSelection();
        let position = range ? range.index : 0;
        quillInstance.insertEmbed(position, 'button', 'buttton');

        quillInstance.setSelection(position);
      });
    }
  }, [setAppendButton]);

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      modules={modules}
      formats={formats}
    />
  );
};

export default QuillEditor;