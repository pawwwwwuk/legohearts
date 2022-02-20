$(".register-btn").mouseover(function(){
    $(".register-btn").css("background-color","#f8d7da");
})


$(document).ready(function(){
    $(".register-btn").mouseover(function(){
      $(".register-btn").animate({height: '50px',width: '200px'});
    });
});


$(document).ready(function(){
    $(".fadeBtn").click(function(){
      $(".fade1").fadeIn();
      $(".fade2").fadeIn("slow");
      $(".fade3").fadeIn(3000);
    });
});

$(".register-btn").mouseout(function(){
    $(".register-btn").css("background-color","");
});

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
    $('#play').click(function() {
        audioElement.play();
    });
    
    $('#pause').click(function() {
        audioElement.pause();
    });
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});

$(".password").keypress(function(){
    $(".password").css("background-color","#f8d7da");
});

$(".passwordRep").keypress(function(){
    $(".passwordRep").css("background-color","#f8d7da");
});