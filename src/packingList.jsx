import React from 'react';

import Item from './item.jsx';
import AddItem from './addItem.jsx';

export default class PackingList extends React.Component {
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
      <div>
        <h2>持ち物リスト</h2>
        <AddItem />
        {_items}
      </div>
    );
  }
}
