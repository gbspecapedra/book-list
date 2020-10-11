import React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface PageTitleProps {
  title: string;
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <Container fluid textAlign="right">
      <div
        style={{
          padding: '1rem',
          flexGrow: 1,
        }}
      >
        <Header as="h1">{props.title}</Header>
      </div>
    </Container>
  );
};
