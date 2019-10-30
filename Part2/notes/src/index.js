import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import './index.css'

const baseURL = '/notes'

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

ReactDOM.render(
    <App />, document.getElementById('root')
)