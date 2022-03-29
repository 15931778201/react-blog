import React,{useState} from 'react'
import Head from 'next/head'
import Link  from 'next/link'
import {Row, Col , List, Breadcrumb } from 'antd'
import { CalendarFilled, FolderFilled, FireFilled } from '@ant-design/icons';
import axios from 'axios'
import servicePath from '../config/apiUrl'


const Lists = (list) => {
  // 用useState,伪造一些假数据，
  console.log(list);
  const [ mylist , setMylist ] = useState(list.data)
  return (
    <div>
      <Head>
        <title>List</title>
      </Head>   
      <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                      <a>{item.title}</a>
                    </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarFilled />{item.addTime}</span>
                  <span><FolderFilled /> {item.type[0].type_name}</span>
                  <span><FireFilled />  {item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div> 
              </List.Item>
            )}
      />      
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >

        </Col>

      </Row>    
    </div>
  )
}

Lists.getInitialProps = async (context)=>{

  let type_id =context.query.type_id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getListById + type_id).then(
      (res)=>resolve(res.data)
    )
  })
  return await promise
}

export default Lists