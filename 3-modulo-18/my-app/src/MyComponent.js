import React from "react"


const MyText = () => {
  return <b>Functional Component</b>
}
// functional component
const MyComponent = () => {
  return <p>Hola desde <MyText /></p>
}

// class component
class MyClassComponent extends React.Component {
  render() {
    return <p>Hola desde mi class component</p>
  }
}

export {
  MyComponent,
  MyClassComponent
}