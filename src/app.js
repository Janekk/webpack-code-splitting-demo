require('./styles/main.scss');

import TshirtEditor from './TshirtEditor_split';

var editor = new TshirtEditor(document.getElementById('main'),
  document.getElementById('show-editor'));
