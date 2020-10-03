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
  RobotOutlined,
  ContactsOutlined,
  DollarOutlined,
  AlipayCircleOutlined,
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

  handleClearData = (e) => { 
    localStorage.clear() 
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Button type="primary" onClick={this.handleRouter(RouterName.Home)} id='btn-home'>
            <AccountBookTwoTone id='icon-home'/> Book-Keeper
          </Button>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub0" icon={<RobotOutlined />} title="Employees">
              <Menu.Item key="11" onClick={this.handleRouter(RouterName.EmployeeList)}>List Employees</Menu.Item>
              <Menu.Item key="12" onClick={this.handleRouter(RouterName.EmployeeAdd)}>Add Employee</Menu.Item>
            </SubMenu>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Customers">
              <Menu.Item key="21" onClick={this.handleRouter(RouterName.CustomerList)}>List Customers</Menu.Item>
              <Menu.Item key="22" onClick={this.handleRouter(RouterName.CustomerAdd)}>Add Customer</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<ContactsOutlined />} title="Vendors">
              <Menu.Item key="31" onClick={this.handleRouter(RouterName.VendorList)}>List Vendors</Menu.Item>
              <Menu.Item key="32" onClick={this.handleRouter(RouterName.VendorAdd)}>Add Vendor</Menu.Item>
            </SubMenu>

            <SubMenu key="sub4" icon={<DollarOutlined />} title="Pay">
              <Menu.Item key="41" onClick={this.handleRouter(RouterName.PayEmployee)}>Pay Employee</Menu.Item>
              <Menu.Item key="42" onClick={this.handleRouter(RouterName.Payroll)}>Payroll</Menu.Item>
            </SubMenu>
            <Menu.Item key="1" icon={<DesktopOutlined />} onClick={this.handleRouter(RouterName.Inventory)}>
              Inventory
            </Menu.Item>
            <SubMenu key="sub5" icon={<TeamOutlined />} title="Invoice">
              <Menu.Item key="51" onClick={this.handleRouter(RouterName.Invoice)}>Create Invoice</Menu.Item>
              <Menu.Item key="52" onClick={this.handleRouter(RouterName.InvoiceHistory)}>Invoice History</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" icon={<AlipayCircleOutlined />} title="PO">
              <Menu.Item key="61" onClick={this.handleRouter(RouterName.PO)}>Create PO</Menu.Item>
              <Menu.Item key="62" onClick={this.handleRouter(RouterName.POHistory)}>PO History</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={this.handleRouter(RouterName.IncomeStatement)}>
              Income Statement
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />} onClick={this.handleRouter(RouterName.BalanceSheet)}>
              Balance Sheet
            </Menu.Item>
            <Menu.Item key="9" title="" onClick={this.handleClearData} id="btn-clear" >
              <Button type='primary' danger href='http://localhost:3000/employeelist'>Clear Data</Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {this.props.contents}
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Siderbar)
