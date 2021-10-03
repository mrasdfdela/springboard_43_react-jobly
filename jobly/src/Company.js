import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'

import Job from './Job';
import JoblyApi from "./api";

function Company() {
  const {handle} = useParams();
  const [company, setCompany] = useState();

  useEffect( ()=> {
    async function getCompanyDetails(){
      let companyDetails = await JoblyApi.getCompany(handle);
      setCompany(companyDetails);
    }
    getCompanyDetails();
  },[handle])

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
       { company.jobs.map( j=>{
          return <Job jobDetails={j} />;
        })
      }
    </div>
  );
}

export default Company;
