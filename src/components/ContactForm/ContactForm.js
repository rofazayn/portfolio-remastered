import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  TextField,
  Button,
  CircularProgress,
  Snackbar
} from '@material-ui/core';
import ContactFormStyled from './ContactFormStyled';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';
import { ReactComponent as AlertIcon } from '../../assets/icons/alert-triangle.svg';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';

const ContactForm = () => {
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

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenError(false);
  };

  return (
    <ContactFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
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
                setSubmitting(false);
                resetForm();
                setOpen(true);
              },
              error => {
                setOpenError(true);
                setSubmitting(false);
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
          errors,
          isSubmitting
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
              size='small'
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
              size='small'
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
              size='small'
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
              size='small'
              helperText={
                touched.message && errors.message ? errors.message : ''
              }
            />
            <Button
              variant='outlined'
              color='primary'
              className='contact-button custom-button'
              size='large'
              type='submit'
              disabled={isSubmitting}
              endIcon={
                isSubmitting ? (
                  <CircularProgress size={20} />
                ) : (
                  <SendIcon width='20px' />
                )
              }
            >
              Send
            </Button>
          </form>
        )}
      </Formik>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={4000}
        message='Email sent successfuly!'
        action={<CheckIcon width='20px' />}
        onClose={handleClose}
        className='success-message'
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={openError}
        autoHideDuration={4000}
        message='Failed to send email!'
        action={<AlertIcon width='20px' />}
        onClose={handleClose}
        className='error-message'
      />
    </ContactFormStyled>
  );
};

export default ContactForm;
