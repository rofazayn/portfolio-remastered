import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { __RouterContext } from 'react-router-dom';

const SWrapper = styled.div`
  /* position: relative; */
  background: ${({ theme }) => theme.colors.background};
  /* overflow: hidden; */
`;

const Wrapper = ({ children, ...otherProps }) => {
  // const { location } = useContext(__RouterContext);

  // const pageHeight = useSelector(state => state.ui.pageHeight);
  // Set wrapper height based on page height prop
  // const [wrapperHeightUnits, setWrapperHeihtUnits] = useState(null);

  // useEffect(() => {
  //   setWrapperHeihtUnits(pageHeight + 100);
  // }, [pageHeight, location]);

  return (
    <SWrapper
      {...otherProps}
      // style={{ height: wrapperHeightUnits, minHeight: '100vh' }}
    >
      {children}
    </SWrapper>
  );
};

export default Wrapper;
