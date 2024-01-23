import {Header} from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";

export const UserLayout = ({ title, children }) => {
  return (
    <div className="user-layout">
      <Sidebar />
      <main className="main">
        <Header />
        <Container>
          <div>
            <div className="text-center">
              <h1 className="">{title}</h1>
            </div>
            <hr />
            <div className="page-container">{children}</div>
          </div>
        </Container>
        <Footer />
      </main>
    </div>
  );
};
