import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
  }

  _clickAddButton(event) {
    
  }

  render() {
    const style = {
      marginRight: 10
    }

    return (
      <div>
        <TextField hintText="持ち物名" style={style} />
        <TextField hintText="数" style={style} />
        <RaisedButton label="追加" primary={true} onChange={this._clickAddButton.bind(this)} />
      </div>
    );
  }
}
