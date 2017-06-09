import React from 'react';

const p_st = {
  fontSize: 20,
  color: 'yellow',
}
/*
export default
class Header extends React.Component {
  render() {
    return(
      <p>I have {this.props.number} items </p>
    )
  }
}
*/

///??????????????????
 const  Header = ({number}) => {
    return(
      <p style = {p_st}>I have {number} items </p>
    );
  }

export default Header;
