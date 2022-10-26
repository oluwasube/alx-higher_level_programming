'use strict';

$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', (data)=> {
  $('DIV#character').html(data.name);
});
