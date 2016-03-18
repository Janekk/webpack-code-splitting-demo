import designUrl from "./assets/ladybug.png";
import {fabric} from "../bower_components/fabric.js";
import tshirtUrl from "./assets/blank_tshirt.jpg";

export default class TshirtEditor {
  
  constructor(container, toggleLink) {
    this.toggleLink = toggleLink;
    this.container = container;
    this.isVisible = false;

    toggleLink.addEventListener('click', function(e) {
      e.preventDefault();
      this.toggleEditor();
    }.bind(this));
  }

  toggleEditor() {
    if (this.isVisible) {
      this.isVisible = false;

      this.toggleLink.textContent = 'Go and design your T-shirt!';
      this.container.removeChild(document.getElementById('editor'));
    }
    else {
      this.isVisible = true;
      this.toggleLink.textContent = 'Hide the editor!';

      var editor = document.createElement('div');
      editor.setAttribute('id', 'editor');
      editor.style.background = `url('${tshirtUrl}') no-repeat`;
      this.container.appendChild(editor);

      var c = document.createElement('canvas');
      c.setAttribute('id', 'tshirt-canvas');
      c.setAttribute('width', '180');
      c.setAttribute('height', '300');
      editor.appendChild(c);

      this.renderCanvas();
    }
  }

  renderCanvas() {
    var canvas = this.__canvas = new fabric.Canvas('tshirt-canvas', {
      hoverCursor: 'pointer',
      selection: false
    });

    fabric.Image.fromURL(designUrl, function (img) {
      img.hasControls = true;
      canvas.add(img);
    });
  }
};