import React, {useState} from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link  from 'next/link'
import {Row, Col, List} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { CalendarFilled, FolderFilled, FireFilled } from '@ant-design/icons';
import {parseTime} from '../utils/index'
import servicePath from '../config/apiUrl'
import {marked} from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const Home = (list) => { 
  const arr =[]
  Object.values(list).forEach((item,index)=>{
    arr.push(item);
  })  
  console.log(arr);
  const [ mylist , setMylist ] = useState(arr)
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }

  });
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>   
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <Link href={{pathname:'/detailed',query:{id:item._id}}}>
                    <a>{item.title}</a>
                  </Link>                  
                  <div className="list-icon">
                    <span><CalendarFilled /> {parseTime(item.addTime, 'y-m-d')}</span>
                    <span><FolderFilled />{item.type[0].type_name} </span> 
                    {/* {item.type_name} */}
                    <span><FireFilled /> {item.view_count}人</span>
                  </div>
                  <div className="list-context" dangerouslySetInnerHTML={{__html:marked(item.introduce)}}></div> 
                </List.Item>
              )}
            />  
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row> 
      <Footer />
  </>
  )
}


Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home