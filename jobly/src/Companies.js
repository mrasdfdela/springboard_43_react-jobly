import React from "react";
import JoblyApi from "./api.js";

function Companies() {
  const companies = JoblyApi.getCompanies();
  console.log(companies);
  return (
    <div>
      <h1>Hello Companies!</h1>
    </div>
  );
}

export default Companies;
