import styled from 'styled-components';

const ProjectPreview = styled.div`
  width: 100%;
  .project-image {
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .status {
      position: absolute;
      top: 32px;
      left: 32px;
      color: white;
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
      margin-bottom: 32px;
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
  background: ${({ theme }) => theme.colors.artery};
  color: ${({ theme }) => theme.colors.background};
`;

export const Styled = {
  ProjectPreview,
  Skill,
};
