import axios from 'axios'
import {apiBaseUrl} from './constants/constants'
const instance = axios.create({
  baseUrl : apiBaseUrl
})

export default instance