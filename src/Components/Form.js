import React from "react";
import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    profession: "",
  });

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  const { firstName, lastName } = inputs;
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <br />
          <label htmlFor="firstName">First Name : </label>
          <input
            onChange={handleInput}
            type="text"
            name="firstName"
            value={firstName}
            id="firstName"
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="lastName">Last Name : </label>
          <input
            onChange={handleInput}
            type="text"
            name="lastName"
            value={lastName}
            id="lastName"
          />
          <br />
        </div>
        <div>
          <select
            name="profession"
            id="profession"
            value="profession"
            onChange={handleInput}
          >
            <option value="" disabled>
              Select options
            </option>
            <option value="developer">Web Developer</option>
            <option value="softwaredeveloper">Software Developer</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
