import React,{ useEffect, useState }from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { read, update } from '../functions/users';

//css
import '../core-ui/app.css';
import '../fonts.css';

//components
import { Navbar } from '../components';

//เอ่อ... เพื่อใช้ <Fragment> </Fragment> หรือ <> </>
import { Fragment } from 'react';

//containers
import { Footer } from '../containers';
//////////////////////////////////////////////////////////////////////////////////

const UserEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    number:'',
    name:'',
    price:''
  });
  useEffect(() =>{
    loadData();
  }, [])

  const loadData = async (id) => {
    read(id)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  }


  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    update(params.id, data)
      .then((res) => {
        console.log(res)
        navigate('/experiments')
      })
      .catch((err) => console.log(err));
  }

  return (
    <Fragment>
      <div className="UserEdit">
        <div className="navbar_bg">
          <Navbar />
        </div>
        <div className="gradient_bg">
          {/* <Header /> */}
        </div>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='number'
            placeholder='number'
            onChange={event => handleChange(event)}
            value={data.number}
          /><br />
          <input 
            type='text'  
            name='name'
            placeholder='name'
            onChange={event => handleChange(event)}
            value={data.name}
          /><br />
          <input 
            type='text' 
            name='role' 
            placeholder='role'
            onChange={event => handleChange(event)}
            value={data.role}
          /><br />
          <button>Submit</button>
        </form>
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default UserEdit