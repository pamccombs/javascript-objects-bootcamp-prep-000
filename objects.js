var playlist = {
  Jeezy: 'Go Crazy'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}