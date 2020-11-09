import React from "react";
import { Layout } from "antd";
import { Kuby_Menu } from "./Kuby_Menu";
import { Kuby_Header } from "./Kuby_Header";

export const { Header, Footer, Sider, Content } = Layout;

export const Kuby_Layout = (props) => {
  return (
    <>
      <Layout>
        <Kuby_Menu />
        <Layout>
          <Kuby_Header />
          <Content
            style={{
              backgroundColor: "#ffffff",
              padding: 24,
              margin: 0,
              minHeight: 200,
              overflowY: "auto",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              ...props.style,
            }}
          >
            {props.children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};

Layout.defaultProps = {
  children: () => <p>Empty Page</p>,
};
