import React from 'react';
import { Container, Icon } from 'semantic-ui-react';
import { Wrapper } from '../styles';

export const Footer = () => {
  return (
    <Container fluid textAlign="center">
      <Wrapper footer>
        <div style={{ flexDirection: 'column' }}>
          <div>
            Made with <Icon name="heart" color="red" size="small" fitted /> by
            Gisele Silva
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/gisabernardess/"
              rel="nofollow"
            >
              <Icon name="linkedin" size="large" color="blue" link />
            </a>
            <a
              href="https://www.linkedin.com/in/gisabernardess/"
              rel="nofollow"
            >
              <Icon name="github square" size="large" color="black" link />
            </a>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
