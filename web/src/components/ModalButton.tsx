import React, { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Button,
  Checkbox,
  Form,
  Icon,
  Modal,
  Segment,
} from 'semantic-ui-react';
import { Book } from '../util/model';

interface ModalButtonProps {
  books: Book[];
}

export const ModalButton = (props: ModalButtonProps) => {
  const { books } = props;
  const [newBook, setNewBook] = useState<Book>({});
  const [read, setRead] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChangeForm = (e: FormEvent, data: any, key: string) => {
    e.preventDefault();

    switch (key) {
      case 'title':
        setNewBook({ ...newBook, title: data.value });
        break;
      case 'authors':
        setNewBook({ ...newBook, authors: [{ name: data.value }] });
        break;
      case 'notes':
        setNewBook({ ...newBook, notes: data.value });
        break;
      case 'pages':
        setNewBook({ ...newBook, number_of_pages: data.value });
        break;
      case 'date':
        setNewBook({ ...newBook, publish_date: data.value });
        break;
    }
  };

  const handleSaveForm = (e: FormEvent) => {
    e.preventDefault();
    if (newBook === '') throw new Error('No data');
    localStorage.setItem(
      'bookStorage',
      JSON.stringify([...books, { ...newBook, id: uuidv4(), read: read }]),
    );
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="green">
          <Icon name="plus" fitted />
        </Button>
      }
    >
      <Modal.Header>Add a book</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              placeholder="Title"
              onChange={(e, { value }) =>
                handleChangeForm(e, { value }, 'title')
              }
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              placeholder="Author"
              onChange={(e, { value }) =>
                handleChangeForm(e, { value }, 'author')
              }
            />
            <Form.Input
              fluid
              type="number"
              placeholder="Number of pages"
              onChange={(e, { value }) =>
                handleChangeForm(e, { value }, 'pages')
              }
            />
            <Form.Input
              fluid
              type="number"
              placeholder="Publish year"
              onChange={(e, { value }) =>
                handleChangeForm(e, { value }, 'date')
              }
            />
          </Form.Group>
          <Form.TextArea
            placeholder="Notes"
            onChange={(e, { value }) => handleChangeForm(e, { value }, 'notes')}
          />
          <Segment compact>
            <Checkbox
              label="Read"
              onClick={(_, { checked }) => setRead(checked)}
            />
          </Segment>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          type="submit"
          content="Save"
          labelPosition="right"
          icon="plus"
          onClick={e => handleSaveForm(e)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
