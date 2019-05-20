import React, { Component } from "react";
import "./Navbar.css";
import "antd/dist/antd.css";
import Logo from "../assets/tglogo.png";

import { Drawer, Layout, Menu, Icon, Input } from "antd";
const { Header } = Layout;
const Search = Input.Search;

export class Navbar extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          <div style={{ textAlign: "center" }}>
            <Icon
              className="mobile-menu-toggle"
              type="menu"
              style={{ fontSize: "2.5em" }}
              onClick={this.showDrawer}
            />

            <img
              alt="mobile techtonic logo"
              className="mobile-logo"
              src={Logo}
            />
            <img alt="techtonic logo" className="logo" src={Logo} />
          </div>
          <Menu
            theme="dark"
            className="nav-items"
            mode="horizontal"
            style={{ lineHeight: "64px", float: "right" }}
          >
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Admin</Menu.Item>
            <Menu.Item>My Account</Menu.Item>
            <Menu.Item>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </Menu.Item>
            <Menu.Item key="3">Sign Out</Menu.Item>
          </Menu>
        </Header>

        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>
            <span>
              <Icon type="home" />
              <span>
                  <a href="#">Home</a>
                </span>
            </span>
          </p>
          <p>
            <span>
              <Icon type="setting" />
              <span> 
                  <a href="#">
                  Admin
                  </a>
                  </span>
            </span>
          </p>
          <p>
            <span>
              <Icon type="user" />
              <span> 
                  <a href="#">
                  My Account
                  </a>
                  </span>
            </span>
          </p>
          <p>
            <span>
              <Icon type="mail" />
              <span> 
                  <a href="#">
                   Sign Out
                  </a>
                  </span>
            </span>
          </p>
        </Drawer>
      </Layout>
    );
  }
}

export default Navbar;
