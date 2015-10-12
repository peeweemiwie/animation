
(function(){
  var d = document;
  var page = d.querySelector(".content");

  function calloutAnimation(){
    page.classList.remove("animate");
    page.classList.add("fadein");
    window.setTimeout(removeCallout, 1000);
    newQuestionNum();
  }

  function removeCallout(){
    page.classList.remove("fadein");
  }

  function newQuestionNum(){
    var questionNum = d.querySelector(".q-num");
    newNum = parseInt(questionNum.textContent) + 1;
    questionNum.textContent = newNum;
  }
  
  function next(){
    page.classList.add("animate");
    window.setTimeout(calloutAnimation, 1000);   
  }
  
  d.querySelector("button").addEventListener("click", next, false);
})();
