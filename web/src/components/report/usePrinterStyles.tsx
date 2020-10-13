import { StyleSheet } from '@react-pdf/renderer';
import { useMemo } from 'react';

export const usePrinterStyles = () => {
  return useMemo(() => {
    const base = {
      fontFamily: 'Times-Roman',
      fontSize: 10.5,
      color: '#24252E',
    };

    const col = {
      flex: 1,
      borderBottom: 1,
      borderRight: 1,
    };

    const cell = {
      ...base,
      fontSize: 10,
      padding: 5,
      margin: 'auto',
    };

    const config = StyleSheet.create({
      page: {
        paddingTop: 85,
        paddingBottom: 40,
        paddingHorizontal: 35,
      },
      main: { ...base },
      secondary: { ...base, color: '#696979' },
      disabled: { ...base, color: '#AAAAB9' },
      h1: { ...base, fontFamily: 'Times-Bold', fontSize: 18 }, //1.5rem
      h2: { ...base, fontFamily: 'Times-Bold', fontSize: 14.5 }, //1.25rem
      h3: { ...base, fontFamily: 'Times-Bold', fontSize: 12 }, //1rem
      h4: { ...base, fontFamily: 'Times-Bold', fontSize: 10.5 }, //0.875rem
      h5: { ...base, fontFamily: 'Times-Bold', fontSize: 10 }, //0.8125rem
      h6: { ...base, fontFamily: 'Times-Bold', fontSize: 9 }, //0.75rem
      link: {
        ...base,
        color: '#24252E',
        fontWeight: 'bold',
        textDecoration: 'underline',
      },
      table: {
        display: 'flex',
        alignSelf: 'center',
        width: '95%',
      },
      row: {
        flexDirection: 'row',
      },
      column: { ...col },
      cell: { ...cell },
      headerColumn: {
        ...col,
        borderTop: 1,
        backgroundColor: '#F0F0F5',
      },
      headerCell: {
        ...cell,
        fontFamily: 'Times-Bold',
      },
    });

    const getTitleStyle = (level?: number) => {
      switch (level) {
        case 2:
          return config.h2;
        case 3:
          return config.h3;
        case 4:
          return config.h4;
        case 5:
          return config.h5;
        case 6:
          return config.h6;
        default:
          return config.h1;
      }
    };

    return { config, getTitleStyle };
  }, []);
};

/** Valid units
 * pt (default. Based on the standard 72 dpi PDF document)
 * in inches
 * mm millimeters
 * cm centimeters
 * % percentage
 * vw viewport/page width
 * vh viewport/page height
 * refer to https://react-pdf.org/styling
 */
