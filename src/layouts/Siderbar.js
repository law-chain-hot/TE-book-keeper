import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './Siderbar.css'

import * as RouterName from '../routers/router'

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
  
  handleRouter = (routerName) => {
    return () => {
      this.props.history.push(`${routerName}`) 
    }
  }

  // handleHome = ''
  // handleEmployeeList = "employeelist"
  // handleEmployeeAdd = "employeeadd"
  // handleCustomerList = "customerlist"
  // handleCustomerAdd = "customeradd"
  // handleVendorList = "vendorlist"
  // handleVendorAdd = "vendoradd"

  handleClearData = (e) => { localStorage.clear() }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Button type="primary" onClick={this.handleRouter(RouterName.Home)} id='btn-home'>
            <AccountBookTwoTone id='icon-home'/> Book-Keeper
          </Button>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub0" icon={<PieChartOutlined />} title="Employees">
              <Menu.Item key="11" onClick={this.handleRouter(RouterName.EmployeeList)}>List Employees</Menu.Item>
              <Menu.Item key="12" onClick={this.handleRouter(RouterName.EmployeeAdd)}>Add Employee</Menu.Item>
            </SubMenu>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Customers">
              <Menu.Item key="21" onClick={this.handleRouter(RouterName.CustomerList)}>List Customers</Menu.Item>
              <Menu.Item key="22" onClick={this.handleRouter(RouterName.CustomerAdd)}>Add Customer</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<UserOutlined />} title="Vendors">
              <Menu.Item key="31" onClick={this.handleRouter(RouterName.VendorList)}>List Vendors</Menu.Item>
              <Menu.Item key="32" onClick={this.handleRouter(RouterName.VendorAdd)}>Add Customer</Menu.Item>
            </SubMenu>

            <SubMenu key="sub4" icon={<UserOutlined />} title="Pay">
              <Menu.Item key="41" onClick={this.handleRouter(RouterName.PayEmployee)}>Pay Employee</Menu.Item>
              <Menu.Item key="42" onClick={this.handleRouter(RouterName.Payroll)}>Payroll</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" icon={<TeamOutlined />} title="Team">
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
            {this.props.contents}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Siderbar)
