import styled from 'styled-components';

const ContactFormStyled = styled.div`
  max-width: 400px;
  margin-inline-end: 2rem;
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-inline-end: 0rem;
  }
  form {
    display: grid;
    grid-gap: 1rem;
    .contact-button {
      justify-content: space-between;
      height: 45px;
      /* display: grid; */
    }
  }
  .success-message > div {
    background: green;
    color: white;
  }
  .error-message > div {
    background: red;
    color: white;
  }
`;

export default ContactFormStyled;
