import React, { Component } from 'react';
import AddItem from './components/addItem';
import Header from './components/Header';
import Card from './components/Card';



class App extends Component {
  constructor() {
  super();
  this.state = {
    items: []
  }
}

deleteHandler = e => {
  let {items} = this.state;
  delete items[e.target.id];
  console.log(items);
  items = items.filter( elem => {
    return (undefined !== e.target.id);
  });
  this.setState({items});
}

addHandler = data => {
 const {items} = this.state;
 // const items = this.state.items;
 if(this.state.items !== ''){
  items.push(data);
 }
 this.setState({items});
}

  render() {
    console.log(this.state.items);
    return (
      <div  className="App">
        <Header
          number = {this.state.items.length}
          />
        <Card
          items = {this.state.items}
          deleteFunc = {this.deleteHandler}
          />
        <AddItem
          addItemFunc = {this.addHandler}
        />
      </div>
    );
  }
}


export default App;
