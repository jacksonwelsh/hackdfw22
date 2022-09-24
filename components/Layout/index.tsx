// components/layout.js

import { NextPage } from 'next';
import { ReactNode } from 'react';
import NavBar from '../NavBar'

type LayoutProps = {children: ReactNode};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <main className="mb-20">{children}</main>
      <NavBar />
    </>
  )
};




export default Layout;