import React from 'react';
import ReactDOM from 'react-dom';
import About from 'About';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!./css/style.css');
$(document).foundation();

ReactDOM.render(
  <About/>,
  document.getElementById('root')
)
