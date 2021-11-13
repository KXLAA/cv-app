import React from "react";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import WorkExp from "./WorkExp";
import { useNavigate } from "react-router-dom";

import {
  FormLayout,
  FormHeading,
  Button,
  ButtonContainer,
} from "./styles/Form.styled";

export default function Form({
  handleInfoChange,
  infoInput,
  handleEduChange,
  eduInputList,
  handleAddEdu,
  handleRemoveEdu,
  handleWorkExpChange,
  workExpInputList,
  handleAddWorkExp,
  handleRemoveWorkExp,
  setWorkExpInputList,
  setEduInputList,
  setInfoInput,
}) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/completed");
  };

  const handleReset = (event) => {
    event.preventDefault();
    setInfoInput({
      fullName: " ",
      email: " ",
      number: " ",
      location: " ",
      summary: " ",
    });
    setEduInputList([
      {
        schoolName: " ",
        degree: " ",
        course: " ",
        location: " ",
        startDate: " ",
        endDate: " ",
      },
    ]);

    setWorkExpInputList([
      {
        company: " ",
        title: " ",
        location: " ",
        startDate: " ",
        endDate: " ",
        details: " ",
      },
    ]);
  };

  return (
    <FormLayout>
      <FormHeading>CV GENERATOR</FormHeading>
      <PersonalInfo infoInput={infoInput} handleInfoChange={handleInfoChange} />
      <Education
        handleEduChange={handleEduChange}
        eduInputList={eduInputList}
        handleAddEdu={handleAddEdu}
        handleRemoveEdu={handleRemoveEdu}
      />
      <WorkExp
        handleWorkExpChange={handleWorkExpChange}
        workExpInputList={workExpInputList}
        handleAddWorkExp={handleAddWorkExp}
        handleRemoveWorkExp={handleRemoveWorkExp}
      />

      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>
          SUBMIT
        </Button>
        <Button style={{ backgroundColor: "red" }} onClick={handleReset}>
          RESET FROM
        </Button>
      </ButtonContainer>
    </FormLayout>
  );
}
