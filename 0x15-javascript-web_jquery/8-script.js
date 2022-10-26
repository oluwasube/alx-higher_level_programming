'use strict';

$.get('https://swapi-api.hbtn.io/api/films/?format=json', (data)=> {
  const movies = data.results;
  movies.forEach(movie => {
    $('UL#list_movies').append(`<li>${movie.title}</li>`)
  });
});


