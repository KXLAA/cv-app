import styled from "styled-components";

export const FormLayout = styled.form`
  margin: 2rem auto;
  padding: 2.5rem;
  max-width: 40rem;
  border: solid 0.15rem black;
  border-radius: 0.5rem;
`;

export const FormHeading = styled.h1`
  font-weight: 700;
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: solid 0.15rem black; ;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 1.2rem;
  margin-bottom: 1rem;
  border: solid 0.15rem black;
  border-radius: 3px;
  font-family: "Inter", sans-serif;
`;

export const TextArea = styled.textarea`
  padding: 1.2rem;
  margin-bottom: 1rem;
  border: solid 0.15rem black;
  border-radius: 3px;
  font-family: "Inter", sans-serif;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 0.2rem;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: bold;
  color: white;
  background: black;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(0rem) translateY(-0.3125rem);
    background: #242423;
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
    background: #242423;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  border-top: solid 0.15rem black;
  gap: 3rem;
  padding-top: 2rem;
`;
