import React, { useState, useEffect } from 'react';
import './formusers.css';
import { 
  remove,
  create,
  getdata,

} from '../../functions/users';
import { Link } from 'react-router-dom';

const FormUsers = () => {

  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  

  useEffect(() => {
    //code
    loadData();
  }, [])

  //ดึงข้อมูล
  const loadData = async () => {
    getdata()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    // event.preventDefault() มีปัญหาเดี๋ยวกลับมาแก้นะ เมดิ
    create(form)
      .then((res) => {
        console.log(res.data)
        loadData()
      })
      .catch((err) => console.log(err));
  }

  const handleRemove = async (id) => {
    remove(id)
      .then((res) => {
        console.log(res);
        loadData()
      })
      .catch((err) => console.log(err));

  }
  return (
    <>
      <div className='formuser'>
        {/* <div>รายชื่อนักศึกษา รุ่น 66</div> */}
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='number'
            placeholder='number'
            onChange={event => handleChange(event)}
          /><br />
          <input 
            type='text'  
            name='name'
            placeholder='name'
            onChange={event => handleChange(event)}
          /><br />
          <input 
            type='text' 
            name='role' 
            placeholder='role'
            onChange={event => handleChange(event)}
          /><br />
          <button>Submit</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data  ? data.map((item, index)=>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.number}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td onClick={()=>handleRemove(item._id)}>
                    Delete
                  </td>
                  <td>
                    <Link to={'/useredit/' + item._id}>
                      Edit
                    </Link>
                  </td>

                </tr>
              )
                    : null
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default FormUsers;