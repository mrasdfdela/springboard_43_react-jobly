import React, { useState, useEffect } from "react";
import { Form, Input } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

import CompanyListing from "./CompanyListing";
import JoblyApi from "./api.js";

function Companies() {
  const [displayCompanies, setDisplayCompanies] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  
  // async function getAllCompanies(){
  //   let allCompanies = await JoblyApi.getCompanies();
  //   return allCompanies
  // }
  // const compPromise = getAllCompanies();
  // console.log(companies);
  
  const [companies, setCompanies] = useState([]);
  useEffect( ()=>{
    async function getAllCompanies(){
      let allCompanies = await JoblyApi.getCompanies();
      setCompanies(allCompanies);
      setDisplayCompanies(allCompanies);
    }
    getAllCompanies();
  }, []);

  useEffect( async ()=>{
    
  },[]);

  function handleChange(e){
    const { value } = e.target;
    setSearchStr(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filteredList = companies.filter( (c) => c.handle.includes(searchStr));
    setDisplayCompanies(filteredList);
  };

  return (
    <div>
      <div className="form-inline d-flex justify-content-center">
        <div className="col-sm-4 ">
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
      {displayCompanies.map((c) => {
        return (
          <div className="form-inline d-flex justify-content-center">
            <div className="col-sm-6">
              <CompanyListing company={c} key={uuidv4()} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Companies;
