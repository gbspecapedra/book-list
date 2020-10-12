import React from 'react';
import { Checkbox, Icon, Popup, Segment, Table } from 'semantic-ui-react';
import { PageBody, PageTitle } from '../components/layout';
import { Button } from '../components/style';

export const UserView = () => {
  return (
    <>
      <PageTitle title="My books" />
      <PageBody>
        <Segment basic>
          <Table celled compact definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Registration Date</Table.HeaderCell>
                <Table.HeaderCell>E-mail address</Table.HeaderCell>
                <Table.HeaderCell>Premium Plan</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer fullWidth>
              <Table.Row textAlign="right">
                <Table.HeaderCell />
                <Table.HeaderCell colSpan="4">
                  <Popup
                    position="bottom right"
                    content="Add a book"
                    trigger={
                      <Button color="green">
                        <Icon name="plus" fitted />
                      </Button>
                    }
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
