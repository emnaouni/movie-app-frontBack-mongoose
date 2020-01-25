const express = require('express')
const Movie = require('../models/Movie')
const router = express.Router();


//Get all movies
router.get("/", (req, res) => {
    Movie.find({})
        .then(data => {
            if (!data) {
                res.json("not found")
            }
            else {
                res.json(data)
            }
        })

        .catch(err => console.log(err.message))
})


//get one movie
router.get("/:id", (req, res) => {
    Movie.findById(req.params.id)
    .then(data => {
        if (!data) {
            res.json("not found")
        }
        else {
            res.json(data)
        }
    })
        .catch(err => console.log(err.message))
})
//add movie
router.post("/", (req, res) => {
    const { title, img, rating, year } = req.body;
    let newMovie = new Movie({
        title,
        img,
        rating,
        year
    });
    newMovie.save()
        .then(data => res.json(data))
        .catch(err => console.log(err.message))

});
//delete movie
router.delete("/:id", (req, res) => {
Movie.findByIdAndDelete(req.params.id)
.then(()=>Movie.find({})
.then( data=> res.json(data))
)
.catch(err=>console.log(err.message))

})


//Update movie
router.put("/:id", (req, res)=>{
    const movie=req.body
Movie.findByIdAndUpdate(req.params.id ,movie)
.then(() => Movie.findById(req.params.id)
   .then(data=>res.json(data))
)
.catch(err=>console.log(err.message))


})



module.exports = router;