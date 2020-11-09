import React from "react";
import { Menu as AntMenu, Layout } from "antd";

export const { Sider } = Layout;
export const { SubMenu } = AntMenu;

export const Kuby_Menu = (props) => {
  return (
    <Sider width={200} style={{ backgroundColor: "#ffffff" }}>
      <AntMenu
        mode="inline"
        style={{ height: "100%" }}
        defaultSelectedKeys={["home"]}
        theme="light"
      >
        <AntMenu.Item key="home">고객리스트</AntMenu.Item>
      </AntMenu>
    </Sider>
  );
};
