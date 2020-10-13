import React, { FormEvent, useEffect, useState } from 'react';
import { Checkbox, Popup, Segment, Table, Image } from 'semantic-ui-react';
import { ModalButton, PageBody, PageTitle } from '../components';
import { Book } from '../util/model';

export const UserView = () => {
  const [myBooks, setMyBooks] = useState<Book[]>([]);

  useEffect(() => {
    const bookStorage = localStorage.getItem('bookStorage');
    if (bookStorage) {
      setMyBooks(JSON.parse(bookStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookStorage', JSON.stringify(myBooks));
  }, [myBooks]);

  const handleCheckbox = (e: FormEvent, { checked }, id: string) => {
    e.preventDefault();
    const changed = myBooks.map(book => {
      if (book.id === id) {
        book.read = checked;
        book.read_date = new Date();
      }
      return book;
    });
    setMyBooks(changed);
  };

  return (
    <>
      <PageTitle title="My books" />
      <PageBody>
        <Segment basic>
          <Table celled compact definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Authors</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Publish</Table.HeaderCell>
                <Table.HeaderCell>Pages</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {myBooks?.map(book => (
                <Table.Row key={book.id}>
                  <Table.Cell collapsing>
                    <Checkbox
                      checked={book?.read}
                      onClick={(event, { checked }) =>
                        handleCheckbox(event, { checked }, book.id)
                      }
                    />
                  </Table.Cell>
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
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer fullWidth>
              <Table.Row textAlign="right">
                <Table.HeaderCell />
                <Table.HeaderCell colSpan="6">
                  <Popup
                    position="bottom right"
                    content="Add a book"
                    trigger={<ModalButton books={myBooks} />}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Segment>
      </PageBody>
    </>
  );
};
