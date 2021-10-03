import React, { useEffect, useState } from "react";
import { Form, Input } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import Job from "./Job";
import JoblyApi from "./api";

function Jobs() {
  const [searchStr, setSearchStr] = useState("");
  const [jobs, setJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect( () => {
    async function getAllJobs() {
      let allJobs = await JoblyApi.getJobs();
      setJobs(allJobs);
      setDisplayJobs(allJobs);
    }
    getAllJobs();
  }, [])

  function handleChange(e) {
    const { value } = e.target;
    setSearchStr(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const filteredList = jobs.filter( (j) => {
      const jobTitle = j.title.toLowerCase();
      return jobTitle.includes(searchStr);
    });
    setDisplayJobs(filteredList);
  }

  return (
    <div>
      <div className="form-inline d-flex justify-content-center">
        <div className="col-sm-8 ">
          <Form className="input-group" onSubmit={handleSubmit}>
            <Input
              className="form-control"
              name="searchTerm"
              type="text"
              value={searchStr}
              placeholder="Enter search term"
              onChange={handleChange}
            />
            <div className="input-group-btn">
              <button className="btn btn-primary">Search</button>
            </div>
          </Form>
        </div>
      </div>
      { displayJobs.map((j) => {
          return (
            <div className="form-inline d-flex justify-content-center">
              <div className="col-sm-8">
                <Job jobDetails={j} key={uuidv4()} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Jobs;
