import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='NPRUCS66_blog' id='blog'>
      <div className='NPRUCS66_blog-heading'>
        <h1 className='gradient_text text_center'>
          - ข่าวสาร -
        </h1>
      </div>
      <div className='NPRUCS66_blog-container'>
        <div className='NPRUCS66_blog-container_group'>
          <Article imgUrl={blog01} date='dd/mm/yyyy' title='ยังไม่พร้อมใช้งาน (WIP)' />
          <Article imgUrl={blog02} date='dd/mm/yyyy' title='ยังไม่พร้อมใช้งาน (WIP)' />
          <Article imgUrl={blog03} date='dd/mm/yyyy' title='ยังไม่พร้อมใช้งาน (WIP)' />
          <Article imgUrl={blog04} date='dd/mm/yyyy' title='ยังไม่พร้อมใช้งาน (WIP)' />
        </div>
      </div>
    </div>
  )
}

export default Blog