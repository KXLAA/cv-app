import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CompletedCv from "./components/cv/CompletedCv";
import Form from "./components/form/Form";
import { FaGithub } from "react-icons/fa";

function App() {
  //Personal Details
  const [infoInput, setInfoInput] = useState({
    fullName: " ",
    email: " ",
    number: " ",
    location: " ",
    summary: " ",
  });

  const handleInfoChange = ({ target }) => {
    setInfoInput((prevInfoData) => ({
      ...prevInfoData,
      [target.name]: target.value,
    }));
    console.log(infoInput);
  };

  //Education
  const initialEduState = {
    schoolName: " ",
    degree: " ",
    course: " ",
    location: " ",
    startDate: " ",
    endDate: " ",
  };
  const [eduInputList, setEduInputList] = useState([initialEduState]);

  // Handle onChange
  const handleEduChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...eduInputList];
    list[index][name] = value;
    setEduInputList(list);
  };

  // Add Education
  const handleAddEdu = (event) => {
    setEduInputList([...eduInputList, eduInputList]);
  };

  // Remove Education
  const handleRemoveEdu = (index) => {
    const list = [...eduInputList];
    list.splice(index, 1);
    setEduInputList(list);
  };

  //Work Experience
  const initialWorkExpState = {
    company: " ",
    title: " ",
    location: " ",
    startDate: " ",
    endDate: " ",
    details: " ",
  };

  const [workExpInputList, setWorkExpInputList] = useState([
    initialWorkExpState,
  ]);

  // Handle onChange
  const handleWorkExpChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...workExpInputList];
    list[index][name] = value;
    setWorkExpInputList(list);
  };

  // Add Education
  const handleAddWorkExp = (event) => {
    setWorkExpInputList([...workExpInputList, workExpInputList]);
  };

  // Remove Education
  const handleRemoveWorkExp = (index) => {
    const list = [...workExpInputList];
    list.splice(index, 1);
    setWorkExpInputList(list);
  };

  return (
    <>
      <a
        href="https://github.com/KXLAA/cv-app"
        target="_blank"
        rel="noreferrer"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "2rem",
          paddingTop: "1rem",
        }}
      >
        <FaGithub style={{ fontSize: "2.5rem" }} />
      </a>

      <Routes>
        <Route
          path="/"
          element={
            <Form
              infoInput={infoInput}
              setInfoInput={setInfoInput}
              handleInfoChange={handleInfoChange}
              //
              eduInputList={eduInputList}
              setEduInputList={setEduInputList}
              handleEduChange={handleEduChange}
              handleAddEdu={handleAddEdu}
              handleRemoveEdu={handleRemoveEdu}
              //
              workExpInputList={workExpInputList}
              setWorkExpInputList={setWorkExpInputList}
              handleWorkExpChange={handleWorkExpChange}
              handleAddWorkExp={handleAddWorkExp}
              handleRemoveWorkExp={handleRemoveWorkExp}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <CompletedCv
              infoInput={infoInput}
              eduInputList={eduInputList}
              workExpInputList={workExpInputList}
            />
          }
        />
      </Routes>
      <p style={{ fontSize: "1.5rem", fontWeight: "900", textAlign: "center" }}>
        Coded by KXLAA 🤙
      </p>
    </>
  );
}

export default App;
