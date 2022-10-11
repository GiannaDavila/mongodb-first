import { MongoClient, ObjectId } from "mongodb";

import { uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")


// console.log (await moviesCollection.findOne({}) )
let query = { tittle: { $regex: /avatar/i } }
let movieArray = await moviesCollection
    .find(query)
    // .limit(3)
    .toArray()

for (let i = 0; i < movieArray.length; i++) {
    console.log(movieArray[i].title)
}
// let firstMovie = movieArray[0]
// console.log (firstMovie.tittle)



// console.log(`there are number ${movieArray.length} movies`)

// add a new movie 

const newMovie ={
    tittle: "The Bocacode Story",
    rating: "R",
    genre: ["Comedy"],
    releaseDate:"2022/12/16",
}
const updateQuery = {_id: new ObjectId("6345cbc09154e7773abd9676")};
const update = {$set : {tiitle: "The New BocaCode Story"}}
const results = await moviesCollection.findOneAndUpdate(updateQuery,update);
console.log (results)

// const results = await moviesCollection.insertOne(newMovie)
// console.log("results of insert", results)