import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Item from './item.jsx';
import CRHeader from './header.jsx'

export default class CampRecorder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{name: "テント"}]
    }
  }

  render() {
    let _items = [];
    this.state.items.forEach(function(item, index){
      _items.push(<Item itemName={item.name} key={`item-${index}`} />);
    });

    return (
      <MuiThemeProvider>
        <div>
          <CRHeader />
          <div>
            <h2>持ち物リスト</h2>
            {_items}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}
