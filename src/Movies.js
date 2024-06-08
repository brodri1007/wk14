import React from 'react';

export default function Movies() {
    let movies = [
        {
          "rank": 32,
          "title": "Oppenheimer",
          "description": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
          "image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          "big_image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
          "genre": [
            "Biography",
            "Drama",
            "History"
          ],
          "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
          "rating": "0",
          "id": "1",
          "year": 2023,
          "imdbid": "tt15398776",
          "imdb_link": "https://www.imdb.com/title/tt15398776"
        },
        {
          "rank": 33,
          "title": "Harakiri",
          "description": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
          "image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
          "big_image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
          "genre": [
            "Action",
            "Drama",
            "Mystery"
          ],
          "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
          "rating": "0",
          "id": "2",
          "year": 1962,
          "imdbid": "tt0056058",
          "imdb_link": "https://www.imdb.com/title/tt0056058"
        },
        {
          "rank": 34,
          "title": "Back to the Future",
          "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
          "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
          "big_image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
          "genre": [
            "Adventure",
            "Comedy",
            "Sci-Fi"
          ],
          "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
          "rating": "0",
          "id": "3",
          "year": 1985,
          "imdbid": "tt0088763",
          "imdb_link": "https://www.imdb.com/title/tt0088763"
        },
        {
          "rank": 35,
          "title": "The Pianist",
          "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
          "image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
          "big_image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
          "genre": [
            "Biography",
            "Drama",
            "Music"
          ],
          "thumbnail": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
          "rating": "0",
          "id": "4",
          "year": 2002,
          "imdbid": "tt0253474",
          "imdb_link": "https://www.imdb.com/title/tt0253474"
        }
      
      ]
                return (       
                   <div><h2>Movies Review</h2>         
                <div class="container p-3 my-3 border">
                    <div class="row">
                        <div class="col-2 card">
                            <div><h4>{movies[0].title}</h4></div>
                            <div><img src={movies[0].image} alt="img" width="150px"/></div>
                           <div>{movies[0].year} / {movies[0].genre}</div>
                           <div class="card-footer text-body-secondary">
                                    
                                    </div>
                        </div>    
                        <div class="col-2 card">
                            <div><h4>{movies[1].title}</h4></div>
                            <div><img src={movies[1].image} alt="img" width="150px"/></div>
                            <div>{movies[1].year} / {movies[1].genre}</div>
                          <div class="card-footer text-body-secondary">
                                    
                        </div>
                        </div>     
   
                        <div class="col-2 card">
                            <div><h4>{movies[3].title}</h4></div>
                            <div><img src={movies[3].image} alt="img" width="150px"/></div>
                            <div>{movies[3].year} / {movies[3].genre}</div>
                            <div class="card-footer text-body-secondary">
                                    
                            </div>
                        </div>             
                    </div>
                </div>
                </div> 
      
            
        )   
 }