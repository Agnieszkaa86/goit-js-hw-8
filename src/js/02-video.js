import Player from '@vimeo/player';

var throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
   throttle(function (time) {
    console.log(time.seconds);
    localStorage.setItem('videoplayer-current-time', `${time.seconds}`);
  }, 1000),
);



player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
    



