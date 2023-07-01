import Quill from 'quill';
let BlockEmbed = Quill.import('blots/block/embed');

class ButtonBlot extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.setAttribute('contenteditable', false);
    node.innerHTML = `<button style="color: white; background-color: red; padding: 10px; border: none; border-radius: 10px;cursor: pointer;">${value}</button>`;
    return node;
  }

  static value(node) {
    return node.querySelector('button').innerText;
  }
}

ButtonBlot.blotName = 'button';
ButtonBlot.tagName = 'div';

export default ButtonBlot;