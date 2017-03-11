$(document).ready(function() {
  // GET /videos for video tokens
  //loop over videos making
  function renderZiggeoVideos(token){
    $("#ziggeo-video-container")
      .append("<ziggeo class='video' width='550' ziggeo-video='" +
                 token +
               "'></ziggeo>");
  }

  $.ajax({
    url: '/api/videos',
    method: "GET",
    success: function(data){
      data.forEach(token => renderZiggeoVideos(token))
    }
  })

});
