$(document).ready(function () {

  var Trackster = {};

  /*Search Button Click Functionality*/

  $('.search-btn').click(function () {
    console.log($('.search-input').val());
  })

  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {

  };

  /*
    Given a search term as a string, query the Spotify API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {

  };

})
