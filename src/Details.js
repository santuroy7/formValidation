import React from "react";

const Details = () => {
  return (
    <div>
      <label htmlFor="fname">Name</label>
      <input type="text" placeholder="First Name" id="fname" />
      <br />
      <label htmlFor="lname">Last Name</label>
      <input type="text" placeholder="Last Name" />
      <br />
      <label htmlFor="Address">Address</label>
      <input type="text" placeholder="Address" />
      <br />
    </div>
  );
};

export default Details;
