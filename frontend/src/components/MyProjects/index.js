import React, { useContext } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import { ProjectContext } from "../../contexts/ProjectContext";
import { UserContext } from "../../contexts/UserContext";

import UserProjects from "./UserProjects";
import UserProposals from "./UserProposals";

const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const PanelWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const MyProjects = () => {
  const [user] = useContext(UserContext);
  const [projects, setProject] = useContext(ProjectContext);
  const project = [];
  const myprojects = [];
  const proposal = [];
  projects.forEach((proj) => {
    if (
      proj.status !== "Waiting for Approval" &&
      proj.status !== "Changes Required"
    ) {
      project.push(proj);
    } else {
      proposal.push(proj);
    }
  });

  //Temporary code to retrieve client's projects from all projects.
  //After frontend is connected to backed, we can have an API call to GET all projects for particular user.

  project.forEach((p) => {
    if (p.client === user.userName) {
      //console.log(p);
      myprojects.push(p);
    }
  });
  //console.log(myprojects);

  const myproposals = [];
  proposal.forEach((p) => {
    if (p.client === user.userName) {
      //console.log(p);
      myproposals.push(p);
    }
  });
  //console.log(myproposals);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Projects</PageTitle>
          {myprojects.map((proj) => (
            <UserProjects key={proj.projId} proj={proj} />
          ))}
        </PanelWrapper>
      </Col>
      <Col span={12}>
        <PanelWrapper>
          <PageTitle>My Proposals</PageTitle>
          {myproposals.map((pro) => (
            <UserProposals key={pro.projId} proposal={pro} />
          ))}
        </PanelWrapper>
      </Col>
    </Row>
  );
};

export default MyProjects;
