import styled from "styled-components";

export const CvLayout = styled.div`
  margin: 2rem auto;
  max-width: 50rem;
  border: solid 0.15rem black;
  padding: 3rem;
  border-radius: 0.5rem;
`;

//PERSONAL INFO
export const PersonalInfoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Name = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export const ContactItem = styled.p`
  font-weight: 600;
  padding: 0rem;
`;

export const Summary = styled.div`
  text-align: left;
  p {
    padding-top: 0.5rem;
  }

  h3 {
    font-weight: 700;
    padding-bottom: 0.5rem;
    border-bottom: solid 0.15rem black;
  }
`;

//PERSONAL INFO
export const EducationContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const School = styled.div`
  padding-top: 0.5rem;
  display: flex;
  text-align: left;
  gap: 0.5rem;
  font-weight: 700;
`;

export const SchoolDetails = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

//Work Exp
export const WorkExpContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CvItemHeader = styled.h3`
  text-align: left;
  font-weight: 700;
  padding-bottom: 0.5rem;
  border-bottom: solid 0.15rem black;
`;

export const WorkExpDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;

  p {
    font-weight: 700;
  }

  div {
    display: flex;
  }
`;

export const Detail = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
`;
