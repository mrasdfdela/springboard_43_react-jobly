import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";

function Home(){
  return (
    <>
      <h3>Jobly</h3>
      <p>All the jobs in one, convenient place.</p>
      <Link className="btn btn-primary" to="./login">Login</Link>
      <Link className="btn btn-primary" to="./signup">Sign Up</Link>
    </>
  );
}

export default Home;