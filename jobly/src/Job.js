import React from 'react';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Job({jobDetails}) {
  return (
    <div className="form-inline d-flex justify-content-center">
      <div className="col-sm-8 ">
        <Card>
          <CardBody>
            <CardTitle>{jobDetails.title}</CardTitle>
            <CardText>Salary: {jobDetails.salary}</CardText>
            <CardText>Equity: {jobDetails.equity}</CardText>
            <button className="btn btn-secondary">Apply!</button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Job;