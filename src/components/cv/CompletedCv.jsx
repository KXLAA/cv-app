import React from "react";
import {
  CvItemHeader,
  CvLayout,
  PersonalInfoContainer,
  Name,
  Contact,
  ContactItem,
  Summary,
  EducationContainer,
  School,
  SchoolDetails,
  WorkExpDetails,
  Detail,
} from "./styles/CompletedCv.styled";

export default function CompletedCv({
  infoInput,
  eduInputList,
  workExpInputList,
}) {
  const { fullName, email, number, location, summary } = infoInput;

  console.log(workExpInputList);
  return (
    <CvLayout>
      <PersonalInfoContainer>
        <Name>{fullName}</Name>
        <Contact>
          <ContactItem as="a" href={`mailto:${email}`} target="_blank">
            {email}
          </ContactItem>
          <ContactItem>{number} </ContactItem>
          <ContactItem>{location} </ContactItem>
        </Contact>
        <Summary>
          <h3>Summary</h3>
          <p>{summary}</p>
        </Summary>
      </PersonalInfoContainer>
      <CvItemHeader>Education</CvItemHeader>
      {eduInputList.map(
        (
          { course, degree, endDate, schoolName, startDate, location },
          index
        ) => (
          <>
            <EducationContainer key={index}>
              <School>
                <p>{schoolName}</p>|<p>{location}</p>
              </School>
              <SchoolDetails>
                <div>
                  <p>{course}, </p>
                  <p style={{ marginLeft: "0.4rem", fontWeight: 700 }}>
                    {degree}
                  </p>
                </div>
                <i>
                  {startDate} - {endDate}
                </i>
              </SchoolDetails>
            </EducationContainer>
          </>
        )
      )}

      <CvItemHeader>Work Experience</CvItemHeader>
      {workExpInputList.map(
        ({ company, details, endDate, location, startDate, title }, index) => (
          <>
            <WorkExpDetails key={index}>
              <p>
                {company} | {location}
              </p>
              <i>
                {startDate} - {endDate}
              </i>
            </WorkExpDetails>
            <i style={{ fontWeight: 700 }}>{title}</i>
            <Detail>{details}</Detail>
          </>
        )
      )}
    </CvLayout>
  );
}
