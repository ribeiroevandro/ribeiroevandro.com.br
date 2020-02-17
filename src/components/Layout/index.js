import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
