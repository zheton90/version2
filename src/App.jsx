
import { Form } from './components/form/Form';
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass } from './class-components/Count';
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';
import './index.css'

export const App = () => {

  const arr = ['ivanov', 'petrov', 'sidorov']

  const [name, setName] = useState('geek')

  const [count, setCount] = useState(0)

  const handelName = (ev) => {
    setName(ev.target.value)
  }


  return (   


    <div className="App">

      {arr.map((item, idx) => <div key={idx}>{item}</div>)}

      <h1 style={{background: "gray"}}>Class Component</h1>

      <CountClass count={10}/>
      <hr />
      <FormClass />

      <hr />
      <h1>func Component</h1>

      <Form namez="NNN"/>

      <hr />

      <Count />

      

      <h1>Parent</h1>
      <input type="text" onChange={handelName}/>
      <p>{count}</p>
      <h1>Child</h1>
      <Child name={name} handelCange={setCount}/>
            
    </div>
  );
}

