import React from "react";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <Sidebar>Sidebar</Sidebar>
        <Container>
          <Header>Header</Header>
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Container>
      </Container>
    </div>
  );
};

export default AdminLayout;
