import React, { useEffect, useRef } from 'react';
import { withFormik } from 'formik';
import { TextField } from '@material-ui/core';
import ContactFormStyled from './ContactFormStyled';
import Button from '../Button/Button';
import { revealButtons } from '../../helpers/Animations';

const ContactForm = props => {
  let button = useRef();
  useEffect(() => {
    revealButtons(button.current);
  }, []);
  return (
    <ContactFormStyled>
      <form>
        <TextField
          variant='filled'
          name='name'
          type='text'
          label='Your name'
          autoComplete='off'
        />
        <TextField
          variant='filled'
          name='email'
          type='email'
          label='Your email'
          autoComplete='off'
        />
        <TextField
          variant='filled'
          name='title'
          type='text'
          label='Title'
          autoComplete='off'
        />
        <TextField
          variant='filled'
          name='body'
          multiline
          rows='7'
          label='Message'
          autoComplete='off'
        />
        <Button ref={button}>Send</Button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;
