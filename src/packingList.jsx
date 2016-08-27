import React from 'react';
import {List} from 'material-ui/List';

import Item from './item.jsx';
import AddItem from './addItem.jsx';
import {generateId} from './generateID.jsx';

export default class PackingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  _handleEvent(eventName, value) {
    switch(eventName) {
      case 'addItem':
        this.setState({items: this.state.items.concat([{id: generateId(), name: value.name}])});
        break;
      case 'deleteItem':
        this.setState({items: this.state.items.filter(function(x){ return x.id !== value })});
        break;
    }
  }

  render() {
    let _items = this.state.items.map(function(item){
      return <Item
              itemId={item.id}
              itemName={item.name}
              key={item.id}
              handleEvent={this._handleEvent.bind(this)} />
          }, this);

    return (
      <div>
        <h2>持ち物リスト</h2>
        <AddItem handleEvent={this._handleEvent.bind(this)} />
        <List>{_items}</List>
      </div>
    );
  }
}
