$(document).ready(function () {

  var Trackster = {};

  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {
      for (var i = 0; i = tracks.length; i++) {
        var track = tracks[i];
        var trackData =
          '<div class="row result">' +
            '<div class="col-xs-2 play-track">' +
              '<a href="' + track.preview_url + '"><i class="fa fa-play-circle-o fa-lg play-btn"></i></a>' +
              '<span>'+ track.track_number +'</span>' +
            '</div>' +
            '<div class="col-xs-4 title">'+ track.name +'</div>' +
            '<div class="col-xs-2 artist">'+ track.artists[0].name +'</div>' +
            '<div class="col-xs-2 album">'+ track.album.name +'</div>' +
            '<div class="col-xs-2 popularity">'+ track.popularity +'</div>' +
          '</div>';
        $('.results').append(trackData);
      }

    }

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
        Trackster.renderTracks(data.tracks.items);
      }
    })

  };

  /*Search Button Click Functionality*/

  $('.search-btn').click(function () {
    Trackster.searchTracksByTitle($('.search-input').val());
  })

})
