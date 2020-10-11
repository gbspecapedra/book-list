import React from 'react';
import { Wrapper } from '../Wrapper';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};
