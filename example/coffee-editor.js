var ace = require('brace');
require('brace/mode/coffee');
require('brace/theme/vibrant_ink');

var editor = ace.edit('coffee-editor');
editor.setTheme('ace/theme/vibrant_ink');
editor.getSession().setMode('ace/mode/coffee');
