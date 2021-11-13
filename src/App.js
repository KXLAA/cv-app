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
  const [eduInputList, setEduInputList] = useState([
    {
      schoolName: " ",
      degree: " ",
      course: " ",
      location: " ",
      startDate: " ",
      endDate: " ",
    },
  ]);

  const handleEduChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...eduInputList];
    list[index][name] = value;
    setEduInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...eduInputList];
    list.splice(index, 1);
    setEduInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = (event) => {
    event.preventDefault();
    setEduInputList([
      ...eduInputList,
      {
        schoolName: " ",
        degree: " ",
        course: " ",
        location: " ",
        startDate: " ",
        endDate: " ",
      },
    ]);
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
              //
              handleEduChange={handleEduChange}
              eduInputList={eduInputList}
              handleAddClick={handleAddClick}
              handleRemoveClick={handleRemoveClick}
            />
          }
        />
        <Route path="/completed" element={<CompletedCv />} />
      </Routes>
    </>
  );
}

export default App;
