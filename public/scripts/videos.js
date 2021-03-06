$(document).ready(function() {
  // GET /videos for video tokens
  //loop over videos making

  console.log("video doc ready");


  $(".like").on("click", function(e){

    console.log("asfa");
    console.log(e.target);

    $.ajax({
      url: "/videos/like",
      method: "POST",
      data: { id: e.target.attributes.id },
      success: function(){
        console.log("you have like the video");
      }
    });

  })

  function renderZiggeoVideos(video){
    $("#ziggeo-video-container")
      .append("<div class='video'></div>")
      .append("<ziggeo class='video' id='" + video.id +
              "' width='550' ziggeo-video='" +
                 video.token +
               "'> # " + video.title + "</ziggeo>")
      .append("<button class='like'> ^^Love^^      " + video.upvotes +"</button>");
  }



  function getZiggeoVideos(){
    $.ajax({
      url: '/api/videos',
      method: "GET",
      success: function(data){
         console.log("Videos API response");
         console.log(data);
        data.forEach(video => {
          renderZiggeoVideos(video)
        })
      }
    });
  };

  getZiggeoVideos();

});
