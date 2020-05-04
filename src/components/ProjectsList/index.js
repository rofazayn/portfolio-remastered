import React from 'react';
import { Styled } from './style.js';
import ProjectPreview from '../ProjectPreview/index.js';
import { projects } from './data';

const ProjectsList = () => {
  return (
    <Styled.ProjectsList>
      {projects.map((project) => (
        <ProjectPreview {...project} key={project.id} />
      ))}
    </Styled.ProjectsList>
  );
};

export default ProjectsList;
