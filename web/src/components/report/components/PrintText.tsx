import ReactPDF, { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

import { usePrinterStyles } from '../usePrinterStyles';

interface PrintTextProps {
  children: React.ReactNode;
  align?: 'center' | 'left' | 'right' | 'justify';
  wrapperStyles?: ReactPDF.Style;
  textStyles?: ReactPDF.Style;
}

export const PrintText = (props: PrintTextProps) => {
  const { children, align, wrapperStyles, textStyles } = props;
  const { config } = usePrinterStyles();

  const classes = StyleSheet.create({
    wrapper: { marginHorizontal: 15 },
    text: {
      ...config.main,
      lineHeight: 1.25,
      textAlign: align ?? 'justify',
    },
  });

  return (
    <View style={[classes.wrapper, wrapperStyles]}>
      <Text style={[classes.text, textStyles]}>{children}</Text>
    </View>
  );
};
