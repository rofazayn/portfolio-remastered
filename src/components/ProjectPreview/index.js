import React from 'react';
import { Styled } from './style.js';
import { Typography, Grid, Button } from '@material-ui/core';
import { ReactComponent as EyeIconSvg } from '../../assets/icons/eye.svg';
import { ReactComponent as CodeIconSvg } from '../../assets/icons/code.svg';

const ProjectPreview = ({
  title,
  subtitle,
  about,
  logo,
  image,
  skills,
  previewUrl,
  repoUrl,
  isCompleted,
}) => {
  return (
    <Styled.ProjectPreview>
      <Grid
        container
        spacing={4}
        alignItems='center'
        justify='center'
        className='project-container'
      >
        <Grid item xs={12} sm={12} md={6} className='project-image'>
          <img src='https://placehold.it/400/400' alt={title} />
          <div className='status'>
            <Typography variant='body2'>
              Status: {isCompleted ? 'Completed' : 'In progress'}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className='project-details'>
          <Typography variant='h6' className='title'>
            {title}
          </Typography>
          <Typography variant='body2' className='subtitle'>
            {subtitle}
          </Typography>
          <div className='skills'>
            {skills.map((skill) => (
              <Styled.Skill key={skill}>
                <Typography variant='body2'>{skill}</Typography>
              </Styled.Skill>
            ))}
          </div>
          <Typography variant='body1' className='about'>
            {about}
          </Typography>

          <div className='links'>
            <a href={previewUrl} target='_blank' rel='noopener noreferrer'>
              <Button
                endIcon={<EyeIconSvg />}
                variant='contained'
                color='primary'
                size='large'
                className='custom-button'
              >
                Live preview
              </Button>
            </a>
            <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
              <Button
                endIcon={<CodeIconSvg />}
                variant='outlined'
                color='primary'
                size='large'
                className='custom-button'
              >
                View code
              </Button>
            </a>
          </div>
        </Grid>
      </Grid>
    </Styled.ProjectPreview>
  );
};

export default ProjectPreview;
