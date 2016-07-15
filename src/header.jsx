import React from 'react';
import Item from './item.jsx';
import AppBar from 'material-ui/AppBar';

export default class CRHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <AppBar title="camp recorder" iconClassNameRight="muidocs-icon-navigation-expand-more" />
      </header>
    );
  }

}
