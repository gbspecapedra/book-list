import React from 'react';
import { Popup, Segment, Table } from 'semantic-ui-react';
import { PageBody, PageTitle } from '../components/layout';
import { Button } from '../components/style';

export const LibraryView = () => {
  return (
    <>
      <PageTitle title="Library" />
      <PageBody>
        <Segment basic>
          <Table celled compact>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Registration Date</Table.HeaderCell>
                <Table.HeaderCell>E-mail address</Table.HeaderCell>
                <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
                <Table.Cell collapsing>
                  <Popup
                    position="bottom right"
                    content="Borrow a book"
                    trigger={<Button color="green">Borrow</Button>}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
                <Table.Cell collapsing>
                  <Popup
                    position="bottom right"
                    content="Borrow a book"
                    trigger={<Button color="green">Borrow</Button>}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
                <Table.Cell collapsing>
                  <Popup
                    position="bottom right"
                    content="Borrow a book"
                    trigger={<Button color="green">Borrow</Button>}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </PageBody>
    </>
  );
};
