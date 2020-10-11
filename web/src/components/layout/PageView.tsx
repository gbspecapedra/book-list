import React from 'react';
import { Footer, Navbar, PageLayout } from '.';
import { Routes } from '../../routes';

export const PageView = () => {
  return (
    <>
      <div style={{ display: 'flex', minHeight: '90vh' }}>
        <Navbar />
        <PageLayout>
          <Routes />
        </PageLayout>
      </div>
      <Footer />
    </>
  );
};
