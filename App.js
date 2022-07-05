
import React from "react";
import Container from "./Container";
import Counter from "./Counter";

//import './App.css';
import MyHeader from './MyHeader';

function App() {

  const number = 5;

  const counterprops ={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:0
  };

  return (
  <Container>
    <div>
      <MyHeader/>
      <Counter {...counterprops} />
    </div>
    </Container>
  );
}

export default App;
