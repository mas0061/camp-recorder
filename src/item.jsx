import React from 'react';
import Checkbox from 'material-ui/Checkbox';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li><Checkbox label={this.props.itemName} /></li>
    );
  }

}
