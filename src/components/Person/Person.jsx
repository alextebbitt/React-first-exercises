import React from 'react'

export const Person = (props) => {
  console.log(props.persons)
  const persons = props.persons.map((person )=> <li>{person.name}</li>) 

  return (
    <div>
      {persons}
    </div>
  )
}

// class Person2 extends React.Component {
// render() {
// return  <div>
//       <span>{this.props.person.name} </span>
//       <span>{this.props.person.surname} </span>
//       <span>{this.props.person.age}</span>
//     </div>
// }
// }
// export default Person;
// export {Person2};