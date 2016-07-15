import React from 'react';
import Item from './item.jsx';

export default class CampRecorder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{name: "テント"}]
    }
  }

  render() {
    let _items = [];
    this.state.items.forEach(function(item){
      _items.push(<Item itemName={item.name} />);
    });

    return (
      <div>
        <h1>キャンプ持ち物リスト</h1>
        <ul>
          {_items}
        </ul>
      </div>
    );
  }

}
