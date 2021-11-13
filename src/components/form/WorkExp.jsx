import React from "react";
import {
  Label,
  Input,
  InputContainer,
  Button,
  TextArea,
} from "./styles/Form.styled";

export default function WorkExp() {
  return (
    <InputContainer style={{ paddingBottom: "5rem" }}>
      <h2>WORK EXPERIENCE</h2>
      <Label>COMPANY NAME</Label>
      <Input />

      <Label>JOB TITLE</Label>
      <Input />

      <Label>LOCATION</Label>
      <Input />

      <Label>START DATE</Label>
      <Input />

      <Label>END DATE</Label>
      <Input />

      <Label>DETAILS</Label>
      <TextArea rows="6" />

      <Button>ADD WORK EXPERIENCE</Button>
    </InputContainer>
  );
}
