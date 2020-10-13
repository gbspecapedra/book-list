import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { format } from 'date-fns';
import React from 'react';

export const PrintFooter = () => {
  return (
    <View style={classes.main} fixed>
      <View style={classes.leftColumn}>
        <Text style={classes.text}>
          Printed on {format(new Date(), 'MMMM dd, yyyy')}.
        </Text>
      </View>
      <View style={classes.rightColumn}>
        <Text
          style={classes.text}
          fixed
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber}/${totalPages}`
          }
        />
      </View>
    </View>
  );
};

const classes = StyleSheet.create({
  main: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    borderTopWidth: 2,
    borderTopColor: '#24252E',
  },
  leftColumn: {
    marginTop: 2,
    flexGrow: 5,
    flexDirection: 'column',
    textAlign: 'left',
  },
  rightColumn: {
    marginTop: 2,
    flexGrow: 1,
    flexDirection: 'column',
    textAlign: 'right',
  },
  text: {
    fontSize: 8,
    fontFamily: 'Times-Roman',
  },
});
