import React from 'react';
import ReactDOM from 'react-dom';
import CampRecorder from './camp-recorder.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <CampRecorder />,
  document.getElementById('cr-component')
);
