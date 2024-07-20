import axios from "axios"
import { API_TIMEOUT, MARVEL_API } from "../constants/variables"

const marvelClient = axios.create({
  baseURL: MARVEL_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: Number(API_TIMEOUT),
})

export default marvelClient
