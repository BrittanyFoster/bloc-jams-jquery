class Helper {
  playPauseAndUpdate(song){
    player.playPause(song);
    setTimeout( () => {
      const duration = player.getDuration();
      $('#time-control .total-time').text( player.prettyTime(duration) );
    }, 400)


  }
}
const helper = new Helper();
