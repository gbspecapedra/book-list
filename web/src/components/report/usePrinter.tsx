import ReactPDF, { pdf } from '@react-pdf/renderer';
import React from 'react';

import {
  PrintPageLayout,
  PrintPageLayoutProps,
} from './layout/PrintPageLayout';

interface PrintDocumentBody extends PrintPageLayoutProps {
  docBody: React.ReactElement;
}

export const usePrinter = () => {
  const printPDF = (documentBody: PrintDocumentBody) => {
    const document = renderDocument(documentBody);

    const pdfWindow = window.open(
      '',
      '',
      'width=' +
        window.screen.width * 0.8 +
        ', height=' +
        window.screen.height * 0.8,
    );
    pdf(document)
      .toBlob()
      .then(blob => {
        convertPdf(blob, pdfWindow);
        pdfWindow.focus();
      })
      .catch(error => {
        pdfWindow.close();
      });
  };
  return { printPDF };
};

const renderDocument = (
  documentBody: PrintDocumentBody,
): React.ReactElement<ReactPDF.DocumentProps> => {
  const { docBody, ...rest } = documentBody;
  return <PrintPageLayout {...rest}>{docBody}</PrintPageLayout>;
};

const convertPdf = (blob: Blob, window: Window) => {
  const url = URL.createObjectURL(blob);
  window.document.write(
    "<iframe width='100%' height='100%' frameborder='0' src='" +
      url +
      "'></iframe>",
  );
  URL.revokeObjectURL(url);
};
