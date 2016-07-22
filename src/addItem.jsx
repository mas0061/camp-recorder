import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: '',
      itemNum: ''
    }
  }

  _clickAddButton(event) {
    if (!this.state.itemName) return;

    this.props.handleEvent('addItem', {name: this.state.itemName});
    this.setState({
      itemName: '',
      itemNum: ''
    });
  }

  _changeName(event) {
    this.setState({itemName: event.target.value});
  }

  _changeNum(event) {
    this.setState({itemNum: event.target.value});
  }

  render() {
    const style = {
      marginRight: 10
    }

    return (
      <div>
        <TextField hintText="持ち物名" style={style}
          value={this.state.itemName}
          onChange={this._changeName.bind(this)} />
        <TextField hintText="数" style={style}
          value={this.state.itemNum}
          onChange={this._changeNum.bind(this)} />
        <RaisedButton label="追加" primary={true} onClick={this._clickAddButton.bind(this)} />
      </div>
    );
  }
}
