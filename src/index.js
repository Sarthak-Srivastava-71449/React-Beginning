import React from 'react';
import ReactDOM from "react-dom";

const container = document.getElementById('root');
const Arr = []

const h1 = React.createElement("h1",null,"Hello! Welcome to React.")
Arr.push(h1)

const Fillup = () => {
  return React.createElement('h1',null,"Hey Kalvian! Welcome to React Learning.", React.createElement('h3',null,"Let's rock and roll"));
}
  const NewElement = Fillup();
Arr.push(NewElement);

class ReactContainer extends React.Component{
    render(){
        return React.createElement(`div`,null,`Hey Kalvians`,
        React.createElement(`div`,null,`Let's rock and roll with classes`)
        );
    }
}
var NEW = React.createElement(ReactContainer);
Arr.push(NEW);

ReactDOM.render(Arr,
  container);