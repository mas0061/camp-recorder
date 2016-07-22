import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import {ListItem} from 'material-ui/List';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  _clickDelete(event) {
    this.props.handleEvent('deleteItem', this.props.itemId);
  }

  render() {
    let rightButton =
      <IconButton
        iconClassName="material-icons"
        tooltip="delete?"
        onClick={this._clickDelete.bind(this)}>delete_forever</IconButton>;

    return (
      <ListItem
        leftCheckbox={<Checkbox />}
        rightIcon={rightButton}
        primaryText={this.props.itemName}
      />
    );
  }

}
