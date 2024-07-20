import axios from "axios"
import { API_TIMEOUT, MY_PUBLIC_API } from "../constants/variables"

const serverClient = axios.create({
  baseURL: MY_PUBLIC_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: Number(API_TIMEOUT),
})

export default serverClient
