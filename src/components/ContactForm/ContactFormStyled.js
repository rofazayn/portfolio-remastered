import styled from 'styled-components';

const ContactFormStyled = styled.div`
  max-width: 400px;
  margin-inline-end: 2rem;
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-inline-end: 0rem;
  }
  form {
    display: grid;
    grid-gap: 1rem;
  }
`;

export default ContactFormStyled;
