import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { logUser } from '../redux/actionTypes';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const loggin = (e) => {
        e.preventDefault()
        dispatch (logUser({email,password}))
    }
    return (
        <div lassName="col-md-5 m-auto">
            <h1>SignIn</h1>
             <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
          placeholder="Enter email" 
          onChange={(e) =>setEmail(e.target.value)}
          value={email}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" 
          placeholder="Enter password" 
          onChange={(e) =>setPassword(e.target.value)}
          value={password}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loggin}>
          Submit
        </Button>
      </Form>
        </div>
    )
}

export default Login
