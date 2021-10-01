import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, Form, Input, Label } from "reactstrap";
import "./Profile.css";

function Profile({user}){
  function handleSubmit(e){
    console.log(e);
  }

  return (
    <div>
      <h2>Profile</h2>
      <div class="d-flex justify-content-center">
        <Card className="col-sm-4">
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Label>Username</Label>
              <p>{user.username}</p>
              <Label for="firstName">First Name</Label>
              <Input 
                id="firstName"
                name="firstName"
                type="text"
                value={user.firstName}
              />
              <Label for="lastName">Last Name</Label>
              <Input 
                id="lastName"
                name="lastName"
                type="text"
                value={user.lastName}
              />
              <Label for="email">email</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={user.email}
              />
              <Label for="password">Confirm password to make changes:</Label>
              <Input 
                id="password"
                name="password"
                type="password"
                value={user.password}
              />
              <Button className="btn-primary">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Profile;