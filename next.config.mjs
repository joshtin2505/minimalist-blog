/** @type {import('next').NextConfig} */
import dotenv from "dotenv"
dotenv.config()
const nextConfig = {
  env: {
    BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
  },
}

export default nextConfig
