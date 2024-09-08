import React from 'react';

function Greeting(props) {
  return <h1 className={props.class}>Hello, {props.name}!</h1>;
}

export default Greeting;
