import React from "react";
import { Label, Input, InputContainer, Button } from "./styles/Form.styled";

export default function Education({
  handleEduChange,
  eduInputList,
  handleAddEdu,
  handleRemoveEdu,
}) {
  return (
    <>
      {eduInputList.map(
        (
          { schoolName, course, location, startDate, endDate, degree },
          index
        ) => (
          <InputContainer key={index}>
            <h2>EDUCATION</h2>
            <Label>SCHOOL</Label>
            <Input
              name="schoolName"
              value={schoolName}
              onChange={(event) => handleEduChange(event, index)}
            />

            <Label>FIELD OF STUDY</Label>
            <Input
              name="course"
              value={course}
              onChange={(event) => handleEduChange(event, index)}
            />

            <Label>LOCATION</Label>
            <Input
              name="location"
              value={location}
              onChange={(event) => handleEduChange(event, index)}
            />

            <Label>START DATE</Label>
            <Input
              name="startDate"
              value={startDate}
              onChange={(event) => handleEduChange(event, index)}
            />

            <Label>END DATE</Label>
            <Input
              name="endDate"
              value={endDate}
              onChange={(event) => handleEduChange(event, index)}
            />

            <Label>GPA OR DEGREE</Label>
            <Input
              name="degree"
              value={degree}
              onChange={(event) => handleEduChange(event, index)}
            />

            {eduInputList.length !== 1 && (
              <Button
                type="button"
                style={{ backgroundColor: "red" }}
                onClick={() => handleRemoveEdu(index)}
              >
                DELETE
              </Button>
            )}

            {eduInputList.length - 1 === index && (
              <Button type="button" onClick={handleAddEdu}>
                ADD EDUCTION
              </Button>
            )}
          </InputContainer>
        )
      )}
    </>
  );
}
