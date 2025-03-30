const songs = [
  { name: "7 years", file: "7 years.mp3" },
  { name: "A Bar Song", file: "songs/a bar song (tipsy).mp3" },
  { name: "APT", file: "songs/apt.mp3" },
  { name: "Beautiful Things", file: "songs/beautiful things.mp3" },
  { name: "Better Place", file: "songs/better place.mp3" },
  { name: "Blinding Lights", file: "songs/blinding lights.mp3" },
  { name: "Bones", file: "songs/bones.mp3" },
  { name: "Bye Bye Bye", file: "songs/bye bye bye.mp3" },
  { name: "Die With A Smile", file: "songs/die with a smile.mp3" },
  { name: "Gangnam Style", file: "songs/gangnam style.mp3" },
  { name: "Golden Hour", file: "songs/golden hour.mp3" },
  { name: "Heat Waves", file: "songs/heat waves.mp3" },
  { name: "High Hopes", file: "songs/high hopes.mp3" },
  { name: "Last Night", file: "songs/last night.mp3" },
  { name: "Like A Prayer", file: "songs/like a prayer.mp3" },
  { name: "Livin' On Love", file: "songs/livin on love.mp3" },
  { name: "Miles On It", file: "songs/miles on it.mp3" },
  { name: "Mingle", file: "songs/mingle.mp3" },
  { name: "Old Town Road", file: "songs/old town road.mp3" },
  { name: "Riptide", file: "songs/riptide.mp3" },
  { name: "Roar", file: "songs/roar.mp3" },
  { name: "Safe And Sound", file: "songs/safe and sound.mp3" },
  { name: "Save Your Tears", file: "songs/save your tears.mp3" },
  { name: "See You Again", file: "songs/see u again.mp3" },
  { name: "Sleep Well", file: "songs/sleep well.mp3" },
  { name: "The Real Slim Shady", file: "songs/slim shady.mp3" },
  { name: "Someone You Loved", file: "songs/someone you loved.mp3" },
  { name: "Someone's Got A Gun", file: "songs/someones got a gun.mp3" },
  { name: "Stick Season", file: "songs/stick season.mp3" },
  { name: "Sunflower", file: "songs/sunflower.mp3" },
  { name: "The Older I Get", file: "songs/the older i get.mp3" },
  { name: "This Is What Heartbreak Feels Like", file: "songs/tiwhfl.mp3" },
  { name: "There's Nothin' Holdn' Me Back", file: "songs/tnhmb.mp3" },
  { name: "Toxic", file: "songs/toxic.mp3" },
  { name: "Whats Up Danger", file: "songs/whats up danger.mp3" },
];

const songList = document.getElementById("song-list");
const searchInput = document.getElementById("search");
const audioPlayer = document.getElementById("audio-player");

// Load songs into the list
function loadSongs() {
  songList.innerHTML = "";
  songs.forEach((song, index) => {
      const li = document.createElement("li");
      li.textContent = song.name;
      li.setAttribute("data-file", song.file);
      li.addEventListener("click", () => playSong(song.file));
      songList.appendChild(li);
  });
}

// Play the selected song
function playSong(file) {
  audioPlayer.src = file;
  audioPlayer.play();
}

// Filter songs based on search
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(query));
  
  songList.innerHTML = "";
  filteredSongs.forEach(song => {
      const li = document.createElement("li");
      li.textContent = song.name;
      li.setAttribute("data-file", song.file);
      li.addEventListener("click", () => playSong(song.file));
      songList.appendChild(li);
  });
});

// Initialize the song list
loadSongs();
