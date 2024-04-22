import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout as AntdLayout, Menu, theme } from "antd";
import styles from "./index.module.css";
import Image from "next/image";
import handler from "@/pages/api/hello";
import { useRouter } from "next/router";
const { Header, Content, Footer, Sider } = AntdLayout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items = [
  {
    key: `book`,
    // icon: React.createElement(icon),
    label: `图书管理`,

    children: [
      { label: "图书列表", key: "/book/bookList" },
      { label: "图书添加", key: "/book/bookAdd" },
    ],
  },
  {
    key: `borrow`,
    // icon: React.createElement(icon),
    label: `借阅管理`,

    children: [
      { label: "借阅列表", key: "/borrow/list" },
      { label: "借阅添加", key: "/borrow/add" },
    ],
  },
  {
    key: `user`,
    // icon: React.createElement(icon),
    label: `用户管理`,

    children: [
      { label: "用户列表", key: "/user/list" },
      { label: "用户添加", key: "/user/add" },
    ],
  },
];

export function Layout({ children }) {
  const router = useRouter();
  const handleMenuClick = ({ key }) => {

    router.push(key);
  };
  return (
    <AntdLayout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.logo}>
          <Image src={"/logo.jpg"} width={36} height={22} alt="logo" /> 管理系统
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <AntdLayout
          style={{
            padding: "24px 0",
          }}
        >
          <Sider style={{}} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["/book"]}
              defaultOpenKeys={["book"]}
              style={{ height: "100%" }}
              items={items}
              onClick={handleMenuClick}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </AntdLayout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </AntdLayout>
  );
}
