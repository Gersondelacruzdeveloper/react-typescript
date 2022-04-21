import React, {useState} from 'react'
import List from './List'
import FormComponent from './FormComponent'

export interface IState{
  people: {
  imageUrl: string;
  name: string;
  age: number;
  note?: string;
}[]
}

const ListParent = () => {

  const [people, setPeople] = useState<IState['people']>([

    {
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSheZXnf27LhoKkcVFu_IbieY6fXIRG4U1Dvj8EMoH_qyWZyHtv',
      name: 'LeBron James',
      age: 35,
      note: 'LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association.',
  },
  {
    imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSheZXnf27LhoKkcVFu_IbieY6fXIRG4U1Dvj8EMoH_qyWZyHtv',
    name: 'LeBron',
    age: 35,
    note: 'LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association.',
}
])

  return (
    <div>
        <h1>People invited to my party</h1>
        <List people={people}/>
        <FormComponent people={people} setPeople={setPeople} />
    </div>
  )
}

export default ListParent
