import React from "react";
import {
  Label,
  Input,
  InputContainer,
  Button,
  TextArea,
} from "./styles/Form.styled";

export default function WorkExp({
  handleWorkExpChange,
  workExpInputList,
  handleAddWorkExp,
  handleRemoveWorkExp,
}) {
  return (
    <>
      {workExpInputList.map(
        ({ company, title, location, startDate, details, endDate }, index) => (
          <InputContainer style={{ paddingBottom: "5rem" }} key={index}>
            <h2>WORK EXPERIENCE</h2>
            <Label>COMPANY NAME</Label>
            <Input
              name="company"
              value={company}
              onChange={(event) => handleWorkExpChange(event, index)}
            />

            <Label>JOB TITLE</Label>
            <Input
              name="title"
              value={title}
              onChange={(event) => handleWorkExpChange(event, index)}
            />

            <Label>LOCATION</Label>
            <Input
              name="location"
              value={location}
              onChange={(event) => handleWorkExpChange(event, index)}
            />

            <Label>START DATE</Label>
            <Input
              name="startDate"
              value={startDate}
              onChange={(event) => handleWorkExpChange(event, index)}
            />

            <Label>END DATE</Label>
            <Input
              name="endDate"
              value={endDate}
              onChange={(event) => handleWorkExpChange(event, index)}
            />

            <Label>DETAILS</Label>
            <TextArea
              rows="6"
              name="details"
              value={details}
              onChange={(event) => handleWorkExpChange(event, index)}
            />

            {workExpInputList.length !== 1 && (
              <Button
                type="button"
                style={{ backgroundColor: "red" }}
                onClick={() => handleRemoveWorkExp(index)}
              >
                DELETE
              </Button>
            )}

            {workExpInputList.length - 1 === index && (
              <Button type="button" onClick={handleAddWorkExp}>
                ADD WORK EXPERIENCE
              </Button>
            )}
          </InputContainer>
        )
      )}
    </>
  );
}
