$(document).ready(function () {

  var Trackster = {};

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
    var url = 'https://api.spotify.com/v1/search?type=track&q='+title;
    $.ajax({
      url: url,
      datatype: 'jsonp',
      success: function(data) {
        console.log(data);
      }
    })

  };

  /*Search Button Click Functionality*/

  $('.search-btn').click(function () {
    Trackster.searchTracksByTitle($('.search-input').val());
  })

})
