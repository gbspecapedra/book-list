import React, { useEffect, useMemo, useState } from 'react';
import { Image, Header, Segment, Button, Label } from 'semantic-ui-react';
import logo from '../assets/images/reading.svg';
import { PageBody, PageTitle } from '../components';
import { usePrinter } from '../components/report/usePrinter';
import { Book } from '../util/model';
import { ImpressaoAnnualReport } from './ImpressaoAnnualReport';

export const DashboardView = () => {
  const [myBooks, setMyBooks] = useState<Book[]>([]);
  const { printPDF } = usePrinter();

  useEffect(() => {
    const bookStorage = localStorage.getItem('bookStorage');
    if (bookStorage) {
      setMyBooks(JSON.parse(bookStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookStorage', JSON.stringify(myBooks));
  }, [myBooks]);

  const { totalRead, totalToRead } = useMemo(() => {
    const totalRead = myBooks.reduce(
      (counter, book) => (book.read ? counter + 1 : 0),
      0,
    );
    const totalToRead = myBooks.reduce(
      (counter, book) => (!book.read ? counter + 1 : 0),
      0,
    );
    return {
      totalRead,
      totalToRead,
    };
  }, [myBooks]);

  const handlePrinter = () => {
    const docBody = ImpressaoAnnualReport(myBooks);
    printPDF({ docBody });
  };

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
            <Segment>
              Total books read: <Label color="violet">{totalRead}</Label>
            </Segment>
            <Segment>
              Total books to read: <Label color="violet">{totalToRead}</Label>
            </Segment>
          </Segment.Group>

          <Segment basic>
            <Button color="violet" onClick={handlePrinter}>
              Get your report
            </Button>
          </Segment>
        </Segment>
      </PageBody>
    </>
  );
};
