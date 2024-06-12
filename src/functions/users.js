import axios from 'axios';

export const remove = async (id) => {
  await axios.delete(process.env.REACT_APP_API + '/user/' + id)
}

export const create = async (data) => {
  await axios.post(process.env.REACT_APP_API + '/user', data)
}

export const getdata = async () => {
  return await axios.get(process.env.REACT_APP_API + '/user')
}

export const read = async (id) => {
  return await axios.get(process.env.REACT_APP_API + '/user/' + id)
}

export const update = async (id, data) => {
  return await axios.put(process.env.REACT_APP_API + '/user/' + id, data)
}