$(document).ready(function() {
  // GET /videos for video tokens
  //loop over videos making

  console.log("video doc ready");

  function renderZiggeoVideos({token, hahstag}){
    $("#ziggeo-video-container")
      .append("<ziggeo class='video' width='550' ziggeo-video='" +
                 token +
               "'> # " + hashtag + "</ziggeo>");
  }

  function getZiggeoVideos(){
    $.ajax({
      url: '/api/videos',
      method: "GET",
      success: function(data){
         console.log("Videos API response");
         console.log(data);
        data.forEach(video => {
          token = video.token;
          hashtag = video.hashtag;
          videoData = { token, hashtag }
          renderZiggeoVideos(videoData)
        })
      }
    });
  };

  getZiggeoVideos();

});
