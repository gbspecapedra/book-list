import styled from '@emotion/styled';
import { darken } from 'polished';

interface ButtonProps {
  color?: string;
}

export const Button = styled('button')(
  {
    border: 'none',
    borderRadius: '.28571429rem',
    boxShadow: '0 0 0 0 rgba(34,36,38,.15) inset',
    color: '#fff',
    cursor: 'pointer',
    padding: '.78571429em 1.5em .78571429em',
    textDecoration: 'none',
    textTransform: 'none',
    textShadow: 'none',
    userSelect: 'none',
  },
  (props: ButtonProps) => ({
    backgroundColor: `${props.color ?? '#6435c9'}`,
    '&:hover': {
      backgroundColor: darken(0.1, `${props.color ?? '#6435c9'}`),
    },
  }),
);
