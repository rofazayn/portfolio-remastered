import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';
import ContactFormStyled from './ContactFormStyled';
import Button from '../Button/Button';
import { revealButtons } from '../../helpers/Animations';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  let button = useRef();

  useEffect(() => {
    revealButtons(button.current);
  }, [button]);

  // const templateParams = {
  //   name: 'Bobby',
  //   subject: 'Sorry baws',
  //   message:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo minima fugiat exercitationem temporibus. Recusandae harum molestiae aspernatur tenetur quasi quae! Amet eum officiis in! Totam voluptatum, cum corrupti ab atque molestiae nulla perspiciatis distinctio dignissimos nobis consequatur magni hic voluptates dolore libero autem odio quis corporis itaque. Facilis illo corrupti quam rem, voluptatibus vel voluptate autem perferendis aperiam sapiente, quae ratione error ut possimus commodi libero qui consequuntur laudantium est a, reiciendis vitae modi non quasi? Adipisci, aperiam quidem. Magnam.',
  //   from_email: 'enizarboy@gmail.com',
  //   reply_to: 'enizarboy@gmail.com'
  // };

  const initialValues = {
    email: '',
    name: '',
    subject: '',
    message: ''
  };

  return (
    <ContactFormStyled>
      <Formik
        initialValues={initialValues}
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
        {({ values, handleChange, handleBlur, handleSubmit }) => (
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
