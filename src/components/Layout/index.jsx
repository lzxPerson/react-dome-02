import React,{Component} from "react";
import { Layout, Flex ,Menu,Breadcrumb,Space, Table, Tag} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import MyTable from '../MyTable'
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#000000',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  borderBottom:'2px solid #E6E6E6',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  justifyContent: 'space-between',

};
const boxStyle ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const logoStyle={
    fontSize: '20px',
    color: '#4CBCAE'
}
const contentStyle = {
  textAlign: 'center',
  minHeight: '100%',
  lineHeight: '120px',
  color: '#000',
  backgroundColor: '#F2F2F2',
  padding:'20px'
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '100%',
  color: '#fff',
  backgroundColor: '#00000F',
};

const layoutStyle = {
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  height:'100%',
  maxWidth: 'calc(100% - 8px)',
};
let item=[ {
  key: 1,
  label: `Design W/O`,
},{
  key: 2,
  label: `Task Mgt.`,
},{
  key: 3,
  label: `My Team`,
},{
  key: 4,
  label: `Data Report`,
},{
  key: 5,
  label: `Statistics`,
},]
export default class Layouts extends Component{

  state={
    crumbs3: 'Design W/O',
    items2 : [ NotificationOutlined].map((icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        color:'#87898c;',
        itemHoverBg:"rgba(0, 0, 0, 0.06)",
        label: `subnav ${key}`,
        children: item
      };
    }),
  }
  
   Design=(e)=>{
   this.setState({
    crumbs3:item[(e.key*1)-1].label
   })
  }
  
  
  render(){
    return (
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <div style={boxStyle}>
              <span style={logoStyle}><img style={{width:'20px',height:'20px',marginTop:'28px'}} src="https://upload.jianshu.io/users/upload_avatars/3794267/f7481d8c-c7cb-4cfd-ae3f-f547fe7e736a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt="" /></span>
              <span>HELPDESK</span>
          </div>
          <div style={boxStyle}>
              <span><img style={{width:'20px',height:'20px',marginTop:'28px',borderRadius:'50%'}} src="https://upload.jianshu.io/users/upload_avatars/3794267/f7481d8c-c7cb-4cfd-ae3f-f547fe7e736a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp" alt="" /></span>
              <span>MOMOMO</span>
          </div>
      
          </Header>
        <Layout>
          <Sider width="200px" style={siderStyle}>
          <Menu
              mode="inline"
              onClick={this.Design}
              theme="dark"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                background:'#000000',
                color:"#ffff",
                borderRight: 0,
              }}
              items={this.state.items2}
            />
          </Sider>
          <Content style={contentStyle}>
          <Breadcrumb style={{ margin: '8px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>subnav1</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.crumbs3}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: '#fff',
              borderRadius: 5,
              border:'2px solid #E6E6E6'
            }}
          >
            <MyTable/>
          </div>
          </Content>
        </Layout>
      </Layout>
  );
  
  }
}
