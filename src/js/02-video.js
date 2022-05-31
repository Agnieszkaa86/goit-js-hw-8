import Player from '@vimeo/player';

import throttle from 'lodash.throttle'
const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);


iframePlayer.on(
  'timeupdate',
   throttle(function (time) {
    console.log(time.seconds);
    localStorage.setItem('videoplayer-current-time', `${time.seconds}`);
  }, 1000),
);



iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
    



