window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 20) || (document.documentElement.scrollTop > 500)) {
    document.getElementById("nav").style.top = '0';
  } else {
    document.getElementById("nav").style.top = "-90px";
  }
}

