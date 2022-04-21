import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {IState as Props} from './ListParent'

interface Iprops {
people: Props['people']
setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const FormComponent:React.FC<Iprops> = ({people, setPeople}) =>{

  const [input, setInput] = useState({
    url: '',
    name: '',
    age: '',
    note: ''
  });


  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input.url || !input.name || !input.age){
      return 
    }
      setPeople([ 
        ...people,
        {
        imageUrl: input.url,
        name: input.name,
        age: parseInt(input.age),
        note: input.note,
      }
      
    ])
    setInput({
      url: '',
      name: '',
      age: '',
      note: ''
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input, [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="form-container">
      <Form onSubmit={(e) => handleSumit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Image URL"
            value={input.url}
            onChange={(e) => handleChange(e)}
            name="url" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
            name="name" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Age"
            value={input.age}
            onChange={handleChange}
            name="age" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Note"
            value={input.note}
            onChange={handleChange}
            name="note" />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent