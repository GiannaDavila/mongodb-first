import { MongoClient } from "mongodb";

import {uri} from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")


// console.log (await moviesCollection.findOne({}) )
let query = {tittle: { $regex: /terminator/i}}
let movieArray = await moviesCollection.find(query).limit(3).toArray()

for (let i=0; i < movieArray.length; i++){
console.log (movieArray[i].tittle)
}
// let firstMovie = movieArray[0]
// console.log (firstMovie.tittle)



console.log(`there are number ${movieArray.length} movies`)