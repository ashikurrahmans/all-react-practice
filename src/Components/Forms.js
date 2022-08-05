import React, { useState } from "react";

const Forms = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    profession: "",
  });

  const handleInput = (e) => {
    console.log(e.target.name, e.target.value);
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const { firstName, lastName, profession } = inputData;
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleInput}
            type="text"
            id="firstName"
            value={firstName}
            name="firstName"
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleInput}
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
          />
          <br />
          <br />
        </div>
        <div>
          <div>
            <label htmlFor="gender">Gender : </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleInput}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleInput}
            />
            <label htmlFor="male">Male</label>
          </div>
          <label htmlFor="profession">Profession</label>
          <select
            name="profession"
            id="profession"
            value={profession}
            onChange={handleInput}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="webdeveloper">Web Developer</option>
            <option value="softwaredev">Software Developer</option>
            <option value="Graphics">Graphics Designer</option>
          </select>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Forms;
