// Speech Recognition API で音声認識を行う 
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
// 言語を指定する（日本語）
recognition.lang = 'ja';
// 音声認識を続ける
recognition.continuous = true;
// 途中の認識結果の表示
recognition.interimResults = true;

recognition.onresult = function(event){
  var results = event.results;
  for (var i = event.resultIndex; i<results.length; i++){
    //認識の最終結果
    if(results[i].isFinal){
      $("#result-text").text(results[i][0].transcript);
    }
    //認識の中間結果
    else{
      $("#result-text").text(results[i][0].transcript);
    }
  }
};

//話し声の認識中
recognition.onsoundstart = function(){$("#state").text("認識中...");};
//マッチする認識が無い
recognition.onnomatch = function(){$("#result-text").text("もう一度試してください");};
//エラー
recognition.onerror= function(){$("#result-text").text("エラー");};
//話し声の認識終了
recognition.onsoundend = function(){$("#state").text("停止中...");};


////////////////////////////////////////////////////////////////////

$(function () {
  setTimeout('rect()'); //アニメーションを実行
});

function rect() {
  $('#attention').css(
    'color', 'turquoise'
  );
  $('#attention').animate({
      opacity: '.3'
  }, 800).animate({
      opacity: '1'
  }, 800);
  setTimeout('rect()', 1600); //アニメーションを繰り返す間隔
}

////////////////////////////////////////////////////////////////////
$(document).ready(function(){

  $("#upload-area").on("dragenter", function(e){
    console.log("dragenter");
    e.preventDefault();
  });
  
    $("#upload-area").on("dragover", function(e){
      console.log("dragover");
      e.preventDefault();
  });

  $("#upload-area").on("drop", function(e){
      console.log("drop");
      e.preventDefault();
      var f = e.originalEvent.dataTransfer.files;
      console.log(f);
      document.getElementById("upload-form-fileselect").files = e.originalEvent.dataTransfer.files;
  });

  return false;

});