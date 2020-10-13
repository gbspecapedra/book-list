import React, { FormEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Form,
  Input,
  Popup,
  Radio,
  Segment,
  Table,
  Image,
  Button,
  Icon,
  Message,
} from 'semantic-ui-react';
import { PageBody, PageTitle } from '../components';
import { server } from '../services/server';
import { Book } from '../util/model';

export const LibraryView = () => {
  const [libraryBooks, setLibraryBooks] = useState<Book[]>([]);
  const [myBooks, setMyBooks] = useState<Book[]>([]);
  const [bookBorrowed, setBookBorrowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const bookStorage = localStorage.getItem('bookStorage');
    if (bookStorage) {
      setMyBooks(JSON.parse(bookStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookStorage', JSON.stringify(myBooks));
  }, [myBooks]);

  const [radioValue, setRadioValue] = useState('isbn');
  const handleRadio = (e: FormEvent, { value }) => {
    e.preventDefault();
    setRadioValue(value);
  };

  const [inputValue, setInputValue] = useState('');
  const handleInput = (e: FormEvent, { value }) => {
    e.preventDefault();
    setError(false);
    setInputValue(value);
  };

  const handleChange = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const bibkey = `${radioValue.toUpperCase()}:${inputValue}`;

    try {
      if (inputValue === '')
        throw new Error('You need to inform an ISBN, LCCN or OCLC number');

      const response = await server.get<Book>(
        `/books?bibkeys=${bibkey}&format=json&jscmd=data`,
      );

      if (response?.data[bibkey] === undefined)
        throw new Error(
          `There is no book with this ${radioValue.toUpperCase()} number`,
        );

      setLibraryBooks([...libraryBooks, response?.data[bibkey]]);
      setError(false);
      setErrorMessage('');
    } catch (Error) {
      setError(true);
      setErrorMessage(Error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (e: FormEvent, book: Book) => {
    e.preventDefault();
    setBookBorrowed(true);
    setMyBooks([...myBooks, { ...book, id: uuidv4(), read: false }]);
  };

  return (
    <>
      <PageTitle title="Library" />
      <PageBody>
        <Segment basic>
          <Segment vertical>
            {error && <Message warning>{errorMessage}</Message>}
            <Form onSubmit={handleChange}>
              <div style={{ display: 'inline-flex', width: '100%' }}>
                <Input
                  type="number"
                  placeholder="Search..."
                  onChange={handleInput}
                  style={{ width: '100%' }}
                />
                <Button type="submit" color="violet" loading={loading}>
                  <Icon fitted name="search" />
                </Button>
              </div>

              <Form.Group
                inline
                style={{ marginTop: '0.5rem', marginBottom: 0 }}
              >
                <Radio
                  label="LCCN"
                  name="radioGroup"
                  value="lccn"
                  checked={radioValue === 'lccn'}
                  style={{ marginRight: '1rem' }}
                  onChange={handleRadio}
                />
                <Radio
                  label="ISBN"
                  name="radioGroup"
                  value="isbn"
                  checked={radioValue === 'isbn'}
                  style={{ marginRight: '1rem' }}
                  onChange={handleRadio}
                />
                <Radio
                  label="OCLC"
                  name="radioGroup"
                  value="oclc"
                  checked={radioValue === 'oclc'}
                  onChange={handleRadio}
                />
              </Form.Group>
            </Form>
          </Segment>

          <Table celled compact>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Authors</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Publish</Table.HeaderCell>
                <Table.HeaderCell>Pages</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {libraryBooks &&
                libraryBooks.map(book => (
                  <Table.Row key={book.key}>
                    <Table.Cell>
                      <Image src={book.cover?.small} />
                    </Table.Cell>
                    <Table.Cell>{book?.title}</Table.Cell>
                    <Table.Cell>
                      {book.authors?.map(author => author.name)}
                    </Table.Cell>
                    <Table.Cell>{book.notes}</Table.Cell>
                    <Table.Cell>{book.publish_date}</Table.Cell>
                    <Table.Cell>{book.number_of_pages}</Table.Cell>
                    <Table.Cell collapsing>
                      <Popup
                        position="bottom right"
                        content="Borrow a book"
                        trigger={
                          <Button
                            color="green"
                            onClick={(e, _) => handleClick(e, book)}
                            disabled={bookBorrowed}
                          >
                            Borrow
                          </Button>
                        }
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </Segment>
      </PageBody>
    </>
  );
};
