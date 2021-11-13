import React from "react";
import { Label, Input, InputContainer, TextArea } from "./styles/Form.styled";

export default function PersonalInfo({ handleInfoChange, infoInput }) {
  const { fullName, email, location, number, summary } = infoInput;
  console.log(infoInput);
  return (
    <InputContainer>
      <h2>PERSONAL INFORMATION</h2>
      <Label>FULL NAME</Label>
      <Input name="fullName" onChange={handleInfoChange} value={fullName} />

      <Label>EMAIL</Label>
      <Input name="email" onChange={handleInfoChange} value={email} />

      <Label>LOCATION</Label>
      <Input name="location" onChange={handleInfoChange} value={location} />

      <Label>PHONE NUMBER</Label>
      <Input name="number" onChange={handleInfoChange} value={number} />

      <Label>SUMMARY</Label>
      <TextArea
        name="summary"
        rows="6"
        onChange={handleInfoChange}
        value={summary}
      />
    </InputContainer>
  );
}
