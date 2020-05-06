import styled from 'styled-components';

const ProjectPreview = styled.div`
  width: 100%;
  .project-image {
    position: relative;
    img {
      width: 100%;
      height: auto;
      border-radius: 16px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    }
    .status {
      padding: 8px 16px;
      text-transform: uppercase;
      border-radius: 8px;
      color: black;
      /* background-color: ${({ theme }) => theme.colors.artery}; */
      position: absolute;
      top: 32px;
      left: 32px;
      color: white;
      p {
        color: ${({ theme }) => theme.colors.primary} !important;
        font-weight: black;
      }
    }
  }

  .project-details {
    .title {
      font-family: 'Alegreya';
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
    .subtitle {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.colors.secondary};
    }
    .about {
      margin-bottom: 32px;
      color: ${({ theme }) => theme.colors.primary};
    }
    .skills {
      margin-bottom: 8px;
    }
    .links {
      a {
        margin-inline-end: 8px;
        margin-bottom: 8px;
        &:last-of-type {
          margin-inline-end: 0;
        }
      }
    }
  }

  padding-bottom: 128px;
`;

const Skill = styled.span`
  display: inline-flex;
  padding: 8px;
  border-radius: 8px;
  margin-inline-end: 8px;
  margin-block-end: 8px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: black;
`;

export const Styled = {
  ProjectPreview,
  Skill,
};
