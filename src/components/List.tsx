import React from 'react'
import {Card} from 'react-bootstrap';
import IState from "./ListParent"

interface IState{
  people: {
  imageUrl: string;
  name: string;
  age: number;
  note?: string;
}[]

}

const List: React.FC<IState> = ({people})=> {
  return (
    <ul>
      {people.map(person =>{
        return (
          <div key={person.name}>
              <Card className="container">
              <img src={person.imageUrl}/>
              <h4>{person.name}</h4>
              <p>{person.age} years old</p>
              <p>{person.note}</p>
              </Card>
          </div>
        )
      })}
   </ul>
  )
}

export default List