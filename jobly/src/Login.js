import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import "./Login.css";

function Login() {
  const INITIAL_STATE = { username: "", password: "" }
  const [ formData, setFormData ] = useState(INITIAL_STATE);
  const history = useHistory;
  
  const handleSubmit = ()=>{
    console.log("Logging in...")
    history.push("/");
  }

  const handleChange = (e)=> {
    const {name,value} = e.target;
    setFormData({...formData, [name]: value});
    console.log(formData);
  }

  return (
    <div className="Login">
      <h2>Log In</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Label for="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <Label for="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <Button className="btn btn-primary">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
