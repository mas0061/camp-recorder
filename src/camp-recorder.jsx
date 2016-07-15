import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import CRHeader from './header.jsx'
import PackingList from './packingList.jsx'

export default class CampRecorder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <CRHeader />
          <PackingList />
        </div>
      </MuiThemeProvider>
    );
  }

}
