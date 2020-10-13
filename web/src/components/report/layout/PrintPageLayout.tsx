import ReactPDF, { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';
import { PrintFooter } from '..';
import { usePrinterStyles } from '../usePrinterStyles';

export interface PrintPageLayoutProps {
  documentTitle?: string;
  pageProps?: ReactPDF.PageProps;
  bodyStyles?: ReactPDF.Style;
  children?: React.ReactNode;
}

export const PrintPageLayout = (props: PrintPageLayoutProps) => {
  const { children, documentTitle, pageProps, bodyStyles } = props;
  const { config } = usePrinterStyles();

  return (
    <Document title={documentTitle}>
      <Page style={{ ...config.page }} size="A4" {...pageProps}>
        <View style={bodyStyles}>{children}</View>
        <PrintFooter />
      </Page>
    </Document>
  );
};
