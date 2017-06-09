import React from 'react';

const p_styling = {
    fontFamily: 'sans-serif',
    color: 'red',
    display: 'inline',
};


export default
class Card extends React.Component {
  //deleteHandler(){
  //}
  render () {
    const content = this.props.items.map((elem,idx) => {
      return (
        <div key={idx}>
          <p style={p_styling} > {idx+1}. name: {elem.name},  price: {elem.price} </p>
          <input type="button" value = "Delete"  onClick={this.props.deleteFunc} id={idx}/>
        </div>
      )
    });
  return (
    <div> {content} </div>
    );
  }
}
