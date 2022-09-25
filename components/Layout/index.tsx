import { ReactNode } from "react";
import NavBar from "../NavBar";

type LayoutProps = { children: ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="mb-20 px-4">{children}</main>
      <NavBar />
    </>
  );
};

export default Layout;
