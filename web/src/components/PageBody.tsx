import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

interface PageBodyProps {
  children: React.ReactNode;
}

export const PageBody = (props: PageBodyProps) => {
  return (
    <Container textAlign="center">
      <Segment
        basic
        style={{
          padding: '1rem 0',
          margin: 'auto',
          flexGrow: 1,
        }}
      >
        {props.children}
      </Segment>
    </Container>
  );
};
