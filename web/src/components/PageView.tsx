import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Footer, Navbar } from '.';
import { Routes } from '../routes';
import { Wrapper } from '../styles';

export const PageView = () => {
  return (
    <>
      <Segment basic style={{ display: 'flex', minHeight: '90vh' }}>
        <Navbar />
        <Wrapper>
          <Routes />
        </Wrapper>
      </Segment>
      <Footer />
    </>
  );
};
