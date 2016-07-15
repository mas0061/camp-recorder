import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }
  }

  _changeCheck(event) {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <li><input type="checkbox" checked={this.state.checked} onChange={this._changeCheck.bind(this)} />{this.props.itemName}</li>
    );
  }

}
