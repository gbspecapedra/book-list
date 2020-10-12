import React from 'react';
import { Image, Header, Segment } from 'semantic-ui-react';
import logo from '../assets/img/reading.svg';
import { PageBody, PageTitle } from '../components/layout';
import { Button } from '../components/style';

export const DashboardView = () => {
  return (
    <>
      <PageTitle title="Home" />
      <PageBody>
        <Segment
          basic
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Header
            content="Welcome back"
            as="h1"
            style={{
              fontFamily: `'Rock Salt', cursive`,
              position: 'relative',
              marginTop: '15rem',
            }}
          />
          <Image src={logo} size="large" />
        </Segment>
        <Segment basic style={{ marginTop: '4rem' }}>
          <Segment.Group horizontal style={{ border: 0, boxShadow: 'none' }}>
            <Segment>Total books read: 0</Segment>
            <Segment>Total books to read: 0</Segment>
          </Segment.Group>

          <Segment basic>
            <Button>Get your annual report</Button>
          </Segment>
        </Segment>
      </PageBody>
    </>
  );
};
