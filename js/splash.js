
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.opacity = '0';
  
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementsByClassName('container')[0].style.display = 'block';
        }, 1000);
    }, 3000);
  });