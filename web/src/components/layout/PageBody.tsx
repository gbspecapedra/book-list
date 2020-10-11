import React from 'react';
import { Container } from 'semantic-ui-react';

interface PageBodyProps {
  children: React.ReactNode;
}

export const PageBody = (props: PageBodyProps) => {
  return (
    <Container textAlign="center">
      <div
        style={{
          border: '1px solid orange',
          padding: '1rem 0',
          flexGrow: 1,
        }}
      >
        {props.children}
      </div>
    </Container>
  );
};
