const express = reuqire("express");

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire Yarra",
        description: "One of the yarramın başı",
        location: {
            lat: 40.7484474,
            lng: -73.9871516


        },
        adress: "20 W 34th St, New York, NY Yarrak",
        creator: "u1"

    }



]

router.get("/", (req, res, next) => {




})

module.exports = router;