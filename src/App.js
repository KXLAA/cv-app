import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CompletedCv from "./components/cv/CompletedCv";
import Form from "./components/form/Form";

function App() {
  //Personal History
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
      <Routes>
        <Route
          path="/"
          element={
            <Form
              handleInfoChange={handleInfoChange}
              infoInput={infoInput}
              setInfoInput={setInfoInput}
              //
              handleEduChange={handleEduChange}
              eduInputList={eduInputList}
              setEduInputList={setEduInputList}
              handleAddEdu={handleAddEdu}
              handleRemoveEdu={handleRemoveEdu}
              //
              handleWorkExpChange={handleWorkExpChange}
              workExpInputList={workExpInputList}
              setWorkExpInputList={setWorkExpInputList}
              handleAddWorkExp={handleAddWorkExp}
              handleRemoveWorkExp={handleRemoveWorkExp}
            />
          }
        />
        <Route path="/completed" element={<CompletedCv />} />
      </Routes>
    </>
  );
}

export default App;
