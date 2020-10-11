import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = (props: WrapperProps) => {
  return (
    <div
      style={{
        flexGrow: 1,
        marginLeft: '7rem',
        padding: '1rem',
      }}
    >
      {props.children}
    </div>
  );
};
