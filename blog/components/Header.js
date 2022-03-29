import React ,{useState,useEffect, Component} from 'react'
// import '../static/style/components/header.css'
import {Row,Col, Menu} from 'antd'
import { HomeOutlined } from '@ant-design/icons';
import Router from 'next/router'
import * as antIcons from '@ant-design/icons';
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
  const [navArray , setNavArray] = useState([])
  useEffect(()=>{

      const fetchData = async ()=>{
         const result= await axios(servicePath.getTypeInfo).then(
              (res)=>{
                  setNavArray(res.data)
                  return res.data
              }
            )
         setNavArray(result)
      }
      fetchData()
  },[])

  //跳转到列表页
  const handleClick = (e)=>{
    if(e.key==0){
        Router.push('/')
    }else{
        Router.push(`/list?type_id=${e.key}`)
    }
  }
  const renderIcon = (iconName) => {
    return React.createElement(antIcons[iconName])
  }  
  return(
    <div>
      <div className="header">
        <Row type="flex" justify="center">
            <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">技术胖</span>
                <span className="header-txt">专注前端开发,每年100集免费视频。</span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal" onClick={handleClick}>
                    <Menu.Item key="0">
                        <HomeOutlined />  博客首页
                    </Menu.Item>
                    {
                      navArray.map((item) => {
                        return (
                          <Menu.Item key={item.type_id} icon={renderIcon(item.icon)}>
                           {item.type_name}
                          </Menu.Item>
                        )
                      })
                    }
                </Menu>
            </Col>
        </Row>
      </div>
      <style>{`
          .header{
            background-color: #fff;
            padding: .4rem;
            overflow: hidden;
            height: 3.2rem;
            border-bottom:1px solid #eee;
          }
          .header-logo{
            color:#1e90ff;
            font-size: 1.4rem;
            text-align: left;
          }
          .header-txt{
            font-size: 0.6rem;
            color: #999;
            display: inline-block;
            padding-left: 0.3rem;
          }
          .ant-meu{
            line-height: 2.8rem;

          }
          .ant-menu-item{
            font-size: 1rem !important;
            padding-left:1rem;
            padding-right:1rem;

          }
      
      `}</style>
    </div>
    
  )
}

export default Header