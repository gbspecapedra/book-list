import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

interface PageTitleProps {
  title: string;
}

export const PageTitle = (props: PageTitleProps) => {
  return (
    <Container fluid textAlign="right">
      <Segment
        basic
        style={{
          padding: '1rem',
          flexGrow: 1,
        }}
      >
        <Header as="h1">{props.title}</Header>
      </Segment>
    </Container>
  );
};
