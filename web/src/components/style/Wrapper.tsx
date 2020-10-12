import styled from '@emotion/styled';

interface WrapperProps {
  footer?: boolean;
}

export const Wrapper = styled('div')(
  {
    flexGrow: 1,
    marginLeft: '7rem',
    padding: '1rem',
  },
  (props: WrapperProps) => ({
    backgroundColor: `${props.footer ? '#FAFAFA' : '#FFF'}`,
  }),
);
