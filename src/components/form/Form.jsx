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
  handleAddClick,
  handleRemoveClick,
}) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/completed");
  };

  return (
    <FormLayout>
      <FormHeading>CV GENERATOR</FormHeading>
      <PersonalInfo infoInput={infoInput} handleInfoChange={handleInfoChange} />
      <Education
        handleEduChange={handleEduChange}
        eduInputList={eduInputList}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
      <WorkExp />

      <ButtonContainer>
        <Button type="submit" onClick={handleSubmit}>
          SUBMIT
        </Button>
        <Button style={{ backgroundColor: "red" }}>RESET FROM</Button>
      </ButtonContainer>
    </FormLayout>
  );
}
