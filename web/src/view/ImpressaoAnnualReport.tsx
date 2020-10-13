import { PrintText, PrintTitle, SpaceLine } from '../components/report';
import React from 'react';
import { Book } from '../util/model';

export const ImpressaoAnnualReport = (books: Book[]) => {
  return (
    <>
      <PrintTitle title="Report of Books Read" level={3} />
      <SpaceLine />
      {books.map(book => {
        return book.read && <PrintText>Título: {book.title}</PrintText>;
      })}
    </>
  );
};
