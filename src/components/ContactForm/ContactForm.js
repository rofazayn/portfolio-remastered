import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';
import ContactFormStyled from './ContactFormStyled';
import Button from '../Button/Button';
import { revealButtons } from '../../helpers/Animations';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';

const ContactForm = () => {
  let button = useRef();

  useEffect(() => {
    revealButtons(button.current);
  }, [button]);

  const initialValues = {
    email: '',
    name: '',
    subject: '',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please make sure you entered a valid email!')
      .required('I need your email so I can reply to you!'),
    name: Yup.string()
      .min(2, 'Please enter a correct full name.')
      .max(50, 'This name is too long!')
      .required('Please enter your name!'),
    subject: Yup.string()
      .min(2, 'The email subject is too short!')
      .max(100, 'The email subject is too long!')
      .required('The subject is a required field!'),
    message: Yup.string()
      .min(20, 'Your message should be at least 20 characters long!')
      .max(2000, 'Your message must be less than 2000 characters long!')
      .required('The message field is required!')
  });

  return (
    <ContactFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('submitting');
          emailjs
            .send(
              'gmail',
              'portfolio',
              {
                name: values.name,
                subject: values.subject,
                message: values.message,
                from_email: values.email,
                reply_to: values.email
              },
              'user_EGLvt2rbHCmiZaCYFbVsr'
            )
            .then(
              result => {
                console.log(result.text);
              },
              error => {
                console.log(error.text);
              }
            );
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant='filled'
              name='name'
              type='text'
              label='Your name'
              autoComplete='off'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name ? true : false}
              helperText={touched.name && errors.name ? errors.name : ''}
            />
            <TextField
              variant='filled'
              name='email'
              type='email'
              label='Your email'
              autoComplete='off'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email ? true : false}
              helperText={touched.email && errors.email ? errors.email : ''}
            />
            <TextField
              variant='filled'
              name='subject'
              type='text'
              label='Subject'
              autoComplete='off'
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subject && errors.subject ? true : false}
              helperText={
                touched.subject && errors.subject ? errors.subject : ''
              }
            />
            <TextField
              variant='filled'
              name='message'
              multiline
              rows='7'
              label='Message'
              autoComplete='off'
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.message && errors.message ? true : false}
              helperText={
                touched.message && errors.message ? errors.message : ''
              }
            />
            <Button ref={button} type='submit'>
              Send
            </Button>
          </form>
        )}
      </Formik>
    </ContactFormStyled>
  );
};

export default ContactForm;
