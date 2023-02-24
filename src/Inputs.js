import React from 'react'
import InputComponent from './InputComponent'

const Inputs = () => {
  return (
    <div className='container'>
      <h1>Inputs</h1>

      <div className="row">
        <div className="content">
          <p>{'<Input />'}</p>
          <InputComponent />
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input error />'}</p>
          <InputComponent error/>
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input disabled/>'}</p>
          <InputComponent disabled/>
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input helperText="Some interesting text" />'}</p>
          <InputComponent helperText="Some interesting text"/>
        </div>
        <div className="content">
          <p>{'<Input helperText="Some interesting text" error />'}</p>
          <InputComponent helperText="Some interesting text" error/>
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input startIcon/>'}</p>
          <InputComponent startIcon/>
        </div>
        <div className="content">
          <p>{'<Input endIcon/>'}</p>
          <InputComponent endIcon/>
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input value="text"/>'}</p>
          <InputComponent value='text'/>
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input size="sm"/>'}</p>
          <InputComponent size='sm'/>
        </div>
        <div className="content">
          <p>{'<Input size="md"/>'}</p>
          <InputComponent size='md'/>
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input fullWidth/>'}</p>
          <InputComponent fullWidth/>
        </div>
      </div>
      <div className="row">
        <div className="content">
          <p>{'<Input multiline row="4"/>'}</p>
          <InputComponent multiLine rows='4'/>
        </div>
      </div>
    </div>
  )
}

export default Inputs