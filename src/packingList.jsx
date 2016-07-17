import React from 'react';
import {List} from 'material-ui/List';

import Item from './item.jsx';
import AddItem from './addItem.jsx';

export default class PackingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{name: 'テント'}]
    }
  }

  _handleEvent(eventName, value) {
    switch(eventName) {
      case 'addItem':
        this.setState({items: this.state.items.concat([{name: value.name}])});
        break;
      case 'deleteItem':
        console.log(value);
        break;
    }
  }

  render() {
    let self = this;
    let _items = [];
    this.state.items.forEach(function(item, index){
      _items.push(<Item itemName={item.name} key={`item-${index}`} handleEvent={self._handleEvent.bind(self)} />);
    });

    return (
      <div>
        <h2>持ち物リスト</h2>
        <AddItem handleEvent={this._handleEvent.bind(this)} />
        <List>{_items}</List>
      </div>
    );
  }
}
