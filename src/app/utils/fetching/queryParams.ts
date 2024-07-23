import { nanoid } from "nanoid"
import md5 from "md5"
import axios from "axios"
import {
  MARVEL_API_PRIVATE_KEY,
  MARVEL_API_PUBLIC_KEY,
} from "../constants/variables"

const TS = nanoid()
const HASH = md5(TS + MARVEL_API_PRIVATE_KEY + MARVEL_API_PUBLIC_KEY)

export const QUERY = `?ts=${TS}&apikey=${MARVEL_API_PUBLIC_KEY}&hash=${HASH}`
