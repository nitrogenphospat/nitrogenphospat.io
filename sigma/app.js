document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

CountDownTimer('7/1/2024 0:0 AM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        // if (distance < 0) {

        //     clearInterval(timer);
        //     document.getElementById(id).innerHTML = 'EXPIRED!';

        //     return;
        // }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = Math.abs(days).toString().padStart(2,'0') + ' : ';
        document.getElementById(id).innerHTML += Math.abs(hours).toString().padStart(2,'0') + ' : ';
        document.getElementById(id).innerHTML += Math.abs(minutes).toString().padStart(2,'0') + ' : ';
        document.getElementById(id).innerHTML += Math.abs(seconds).toString().padStart(2,'0') + ' ';
    }

    timer = setInterval(showRemaining, 1);
}
