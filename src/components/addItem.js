import React from 'react';

const b_Style = {
  color: 'green',
  fontSize: 16,
  borderRadius: 8,
};

export default
class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  changeHandler = (event) => {
    this.setState({text: event.target.value});
  }

  clickHandler = () => {
    console.log(this.state.text);
    const {text} = this.state;
    if(text !== ''){
      const name = text.split(',')[0];
      const price = text.split(',')[1];
      const data = {
        name,
        price
      }
      this.props.addItemFunc(data);
    }
    this.setState({text: ""});
  }

  render() {
    return (
      <form>
        <input
          style = {b_Style}
          type='text'
          value={this.state.text}
          onChange={this.changeHandler}
        />
        <input
          style = {b_Style}
          type="button"
          value="Add"
          onClick={this.clickHandler}
        />
    </form>
    )
  }
}
