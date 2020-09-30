import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './Siderbar.css'


import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  AccountBookTwoTone,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Siderbar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleHome = (e) => { this.props.history.push("/") }
  handleEmployeeList = (e) => { this.props.history.push("/employeelist") }
  handleEmployeeAdd = (e) => { this.props.history.push("/employeeadd") }
  handleCustomerList = (e) => { this.props.history.push("/customerlist") }
  handleCustomerAdd = (e) => { this.props.history.push("/customeradd") }
  handleVendorList = (e) => { this.props.history.push("/vendorlist") }
  handleVendorAdd = (e) => { this.props.history.push("/vendoradd") }

  handleClearData = (e) => { localStorage.clear() }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Button type="primary" onClick={this.handleHome} id='btn-home'>
            <AccountBookTwoTone id='icon-home'/> Book-Keeper
          </Button>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub0" icon={<PieChartOutlined />} title="Employees">
              <Menu.Item key="11" onClick={this.handleEmployeeList}>List Employees</Menu.Item>
              <Menu.Item key="12" onClick={this.handleEmployeeAdd}>Add Employee</Menu.Item>
            </SubMenu>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Customers">
              <Menu.Item key="21" onClick={this.handleCustomerList}>List Customers</Menu.Item>
              <Menu.Item key="22" onClick={this.handleCustomerAdd}>Add Customer</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<UserOutlined />} title="Vendors">
              <Menu.Item key="31" onClick={this.handleVendorList}>List Vendors</Menu.Item>
              <Menu.Item key="32" onClick={this.handleVendorAdd}>Add Customer</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="9" title="" onClick={this.handleClearData} id="btn-clear">
              <Button type='primary' danger>Clear Data</Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {this.props.contents}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Siderbar)
