import React, { useEffect, useRef } from 'react';
import { withFormik } from 'formik';
import { TextField } from '@material-ui/core';
import ContactFormStyled from './ContactFormStyled';
import Button from '../Button/Button';
import { revealButtons } from '../../helpers/Animations';
import emailjs from 'emailjs-com';

const ContactForm = props => {
  let button = useRef();

  useEffect(() => {
    revealButtons(button.current);
  }, [button]);

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: 'Bobby',
      subject: 'Sorry baws',
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo minima fugiat exercitationem temporibus. Recusandae harum molestiae aspernatur tenetur quasi quae! Amet eum officiis in! Totam voluptatum, cum corrupti ab atque molestiae nulla perspiciatis distinctio dignissimos nobis consequatur magni hic voluptates dolore libero autem odio quis corporis itaque. Facilis illo corrupti quam rem, voluptatibus vel voluptate autem perferendis aperiam sapiente, quae ratione error ut possimus commodi libero qui consequuntur laudantium est a, reiciendis vitae modi non quasi? Adipisci, aperiam quidem. Magnam.',
      from_email: 'enizarboy@gmail.com',
      reply_to: 'enizarboy@gmail.com'
    };

    emailjs
      .send('gmail', 'portfolio', templateParams, 'user_EGLvt2rbHCmiZaCYFbVsr')
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

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
        <Button ref={button} onClick={e => sendEmail(e)}>
          Send
        </Button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;
