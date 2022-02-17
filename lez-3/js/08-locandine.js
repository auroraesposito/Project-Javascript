var films = [
    {
        titolo: "El Camino",
        durata: 122,
        anno: 2019,
        locandina: 'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg',
        genere: 'Drammatico',
        attori: ["Aaron Paul", "Jonathan Banks", "Matt Jones"]
    },
    
    {
        titolo: "Avatar",
        durata: 162,
        anno: 2009,
        locandina: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
        genere: 'Fantascienza',
        attori: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
    },

    {
        titolo: "The Avengers",
        durata: 143,
        anno: 2012,
        locandina: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        genere: 'Fantascienza',
        attori: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]
    },

    {
        titolo: "The Wolf of Wall Street",
        durata: 180,
        anno: 2013,
        locandina: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
        genere: 'Biografia',
        attori: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey"]
    }, 

    {
        titolo: "2001: Odissea nello spazio",
        durata: 149,
        anno: 1968,
        locandina: 'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        genere: 'Avventura',
        attori: ["Keir Dullea", "Gary Lockwood", "William Sylvester"]
    }, 
]

//prendere oggetto e trasformare in json
var mioJSON = JSON.stringify(films[0]);
console.log(mioJSON);