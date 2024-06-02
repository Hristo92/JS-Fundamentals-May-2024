function Gramophone(band, album, song) {
  let songDuration = (album.length * band.length * song.length) / 2;
  let time = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${time} times.`);
}
Gramophone("Rammstein", "Sehnsucht", "Engel");
