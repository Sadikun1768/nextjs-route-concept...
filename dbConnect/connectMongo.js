// import mongoose from "mongoose"

// // const MONGODB_URI = process.env.MONGODB_URI
// const MONGODB_URI = process.env.MONGODB_URI

// if (!MONGODB_URI) throw new Error("Define MONGODB_URI")

// let cached = global.mongoose || { conn: null, promise: null }
// global.mongoose = cached

// async function dbConnect() {
//   if (cached.conn)
  
//     return cached.conn
//   if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI)
//   cached.conn = await cached.promise
//   return cached.conn
// }
// export default dbConnect  



import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) throw new Error("Define MONGODB_URI")

let cached = global.mongoose || { conn: null, promise: null }
global.mongoose = cached

async function dbConnect() {
  if (cached.conn) {
    console.log("Already connected")
    return cached.conn
  }

  if (!cached.promise) {
    console.log("Connecting DB...")
    cached.promise = mongoose.connect(MONGODB_URI)
  }

  cached.conn = await cached.promise
  console.log("MongoDB Connected ")

  return cached.conn
}

export default dbConnect
