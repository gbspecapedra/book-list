import ReactPDF, { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';

import { usePrinterStyles } from '../usePrinterStyles';

interface PrintTitleProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  newPage?: boolean;
  underline?: boolean;
  align?: 'center' | 'left' | 'right' | 'justify';
  transform?: 'uppercase' | 'capitalize' | 'lowercase';
  styles?: ReactPDF.Style;
}

export const PrintTitle = (props: PrintTitleProps) => {
  const { title, level, newPage, align, transform, underline, styles } = props;
  const { getTitleStyle } = usePrinterStyles();
  const heading = getTitleStyle(level);

  const classes = StyleSheet.create({
    title: {
      ...heading,
      textAlign: align ?? 'center',
      textTransform: transform ?? 'uppercase',
      margin: 5,
      paddingHorizontal: 10,
    },
    line: {
      borderBottomWidth: 1,
      borderBottomColor: '#D3D4DD',
    },
  });

  return (
    <Text
      style={[classes.title, underline && classes.line, styles]}
      break={newPage ?? false}
    >
      {title}
    </Text>
  );
};
