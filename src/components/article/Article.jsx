import React from 'react';
import './article.css';
import therror from '../../assets/sounds/therror.wav';

const th_error = () => {
  new Audio(therror).play()
};

///////////////////////////////////////////////////////////

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
        <p onClick={th_error}>- คลิกเพื่ออ่าน -</p>
      </div>
    </div>
  )
}

export default Article