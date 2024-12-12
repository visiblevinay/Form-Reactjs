import "./App.css";
import { useState } from "react";

function App() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleReset = () => {
    setValues(initialState);
  };

  return (
    <div className="container">
      <h1>Form In React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={values.firstname}
          onChange={handleChanges}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          value={values.lastname}
          onChange={handleChanges}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={values.email}
          onChange={handleChanges}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="contact"
          value={values.contact}
          onChange={handleChanges}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={values.gender === "Male"}
          onChange={handleChanges}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={values.gender === "Female"}
          onChange={handleChanges}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={values.gender === "Other"}
          onChange={handleChanges}
        />{" "}
        Other
        <br />
        <label htmlFor="subject">Subject</label>
        <select
          name="subject"
          id="subject"
          value={values.subject}
          onChange={handleChanges}
        >
          <option value="">Select a subject</option>
          <option value="math">Math</option>
          <option value="english">English</option>
          <option value="physics">Physics</option>
        </select>
        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          placeholder="Upload File"
          name="resume"
          onChange={handleChanges}
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          placeholder="Enter Image URL"
          value={values.url}
          onChange={handleChanges}
        />
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="50"
          rows="10"
          placeholder="Enter Description"
          value={values.about}
          onChange={handleChanges}
        ></textarea>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
