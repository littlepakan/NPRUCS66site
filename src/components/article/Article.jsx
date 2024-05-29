import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='NPRUCS66_blog-container_article'>
      <div className='NPRUCS66_blog-container_article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>
      <div className='NPRUCS66_blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <p>- คลิกเพื่ออ่าน -</p>
      </div>
    </div>
  )
}

export default Article