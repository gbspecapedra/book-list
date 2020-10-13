import ReactPDF, { Text } from '@react-pdf/renderer';
import React from 'react';

export interface SpaceLineProps {
  styles?: ReactPDF.Style;
}

export const SpaceLine = (props: SpaceLineProps) => {
  return <Text style={[{ height: 10 }, props.styles]} />;
};
