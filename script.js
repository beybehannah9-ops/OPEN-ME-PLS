
const welcomeScreen = document.getElementById("welcomeScreen");
const choiceScreen = document.getElementById("choiceScreen");
const lyricsScreen = document.getElementById("lyricsScreen");

const openButton = document.getElementById("openButton");
const homeButton = document.getElementById("homeButton");
const backButton = document.getElementById("backButton");

const lyricsText = document.getElementById("lyricsText");
const audioPlayer = document.getElementById("audioPlayer");
const progressFill = document.getElementById("progressFill");

const scenes = {
  christmas: document.getElementById("christmasScene"),
  storm: document.getElementById("stormScene"),
  autumn: document.getElementById("autumnScene"),
  muli: document.getElementById("muliScene"),
  window: document.getElementById("windowScene"),
  road: document.getElementById("roadScene")
};

const songs = [
  {
    scene: "christmas",
    file: "music/Alex Crichton - Merry Christmas, i miss you (Lyrics).mp3",
    start: 130,
    end: 203,
    lyrics: [
      { time: 0, text: "So, what if I call" },
      { time: 6, text: "And you pick up the phone?" },
      { time: 11, text: "And I use this holiday to make my way to your ghost" },
      { time: 20, text: "Oh, what if you're lonely" },
      { time: 24, text: "And you know I am too?" },
      { time: 29, text: "And I get the chance to say" },
      { time: 32, text: "Merry Christmas, I miss you ♡" },
      { time: 38, text: "I miss you..." },
      { time: 43, text: "You know it's true" },
      { time: 47, text: "Yeah, I miss you" },
      { time: 52, text: "You know it's true" },
      { time: 56, text: "So, what if I call" },
      { time: 61, text: "And you pick up the phone?" },
      { time: 66, text: "And I use this holiday to make my way to your ghost" }
    ]
  },
  {
    scene: "storm",
    file: "music/SHEAN - Ako Ang Bagyo (Lyrics).mp3",
    start: 50,
    end: 120,
    lyrics: [
      { time: 0, text: "Matakot na kayo" },
      { time: 6, text: "Ako, ako ang bagyo" },
      { time: 10, text: "Kulimlim ng langit sa inyong dalawa" },
      { time: 16, text: "Bulong ko sa hangin, sana 'di kayo masaya" },
      { time: 21, text: "Sa tibay ng bahay na titirhan niyo" },
      { time: 27, text: "Tatangayin ko bawat yero" },
      { time: 32, text: "Dahil ako, ako ang bagyo" },
      { time: 42, text: "Itinago na litrato, kunwari hindi ko nakita?" },
      { time: 48, text: "Takot ka sigurong masalanta ko siya" },
      { time: 53, text: "Tingin mo ba 'di ko kaya? Gusto mo na gusto kita" },
      { time: 59, text: "Tinatali mo'ko sa pag-asa" },
      { time: 66, text: "Matakot na kayo" }
    ]
  },
  {
    scene: "autumn",
    file: "music/All Too Well (10 Minute Version) (Taylor's Version) (From The Vault) (Lyric Video).mp3",
    start: 494,
    end: 570,
    lyrics: [
      { time: 0, text: "Just between us, did the love affair maim you all too well?" },
      { time: 12, text: "Just between us, do you remember it all too well?" },
      { time: 22, text: "Just between us, I remember it (Just between us), all too well" },
      { time: 28, text: "Wind in my hair, I was there, I was there" },
      { time: 33, text: "Down the stairs, I was there, I was there" },
      { time: 39, text: "Sacred prayer, I was there, I was there" },
      { time: 44, text: "It was rare, you remember it all too well" },
      { time: 49, text: "Wind in my hair, I was there, I was there" },
      { time: 54, text: "Down the stairs, I was there, I was there" },
      { time: 59, text: "Sacred prayer, I was there, I was there" },
      { time: 64, text: "It was rare, you remember it" },
      { time: 69, text: "Wind in my hair, I was there, I was there" }
    ]
  },
  {
    scene: "muli",
    file: "music/Ace Banzuelo - Muli (Secret Verse) (Lyrics).mp3",
    start: 96,
    end: 190,
    lyrics: [
      { time: 0, text: "'Di maintindihan nadarama" },
      { time: 4, text: "Sarili ang kausap 'lang iba" },
      { time: 8, text: "Kailangan mo raw lumayo sa akin" },
      { time: 11, text: "'La ba tayong magagawa?" },
      { time: 14, text: "Kinalakihan nati'y iiba" },
      { time: 18, text: "Ako sa takot, ikaw sa awa" },
      { time: 21, text: "Taimtim ang pag-ibig" },
      { time: 23, text: "'di sang-ayon ang paligid" },
      { time: 25, text: "Tinanggap ko nang wala ka na" },
      { time: 28, text: "Ginawa ko 'yon ng ilang taon" },
      { time: 31, text: "Nasasanay na 'kong mag-isa" },
      { time: 34, text: "May mga bagay na ang nakakaintindi" },
      { time: 38, text: "Tayo lang dalawa" },
      { time: 39, text: "Walang-iba" },
      { time: 41, text: "Hindi (Hindi)" },
      { time: 44, text: "Hindi ko kayang umibig muli" },
      { time: 48, text: "Habang-buhay na lang kitang hihintayin (Hihintayin)" },
      { time: 54, text: "Hindi, hindi" },
      { time: 58, text: "Hindi ko kayang umibig muli" },
      { time: 61, text: "Habang-buhay na lang kitang hihintayin (Hihintayin)" },
      { time: 67, text: "Hihintayin, hihintayin, hihintayin" },
      { time: 81, text: "Ang magtiwala muli" },
      { time: 85, text: "Bakit ang hirap gawin?" },
      { time: 88, text: "Kahit pilitin ko" },
      { time: 90, text: "Kayanin ko" },
      { time: 92, text: "Harapin ang totoo" }
    
    ]
  },
  {
    scene: "window",
    file: "music/Missing Me - Rj Helton (Lyrics).mp3",
    start: 47,
    end: 120,
    lyrics: [
      { time: 0, text: "Ohh" },
      { time: 2, text: "And even if I cried a thousand tears tonight" },
      { time: 7, text: "Would you come back to me" },
      { time: 11, text: "And even if I walked on the water" },
      { time: 15, text: "Would you come out to sea" },
      { time: 20, text: "Now I can't spend my life standing by" },
      { time: 27, text: "Cause even when I miss you" },
      { time: 30, text: "You're still not missing me" },
      { time: 42, text: "It's funny how my heart just won't let it go" },
      { time: 46, text: "I just don't understand" },
      { time: 50, text: "It's crazy how the pain seems to overflow" },
      { time: 55, text: "The memories of you here with me by my side" },
      { time: 63, text: "I can't deny that you are the love of my life" }
    ]
  },
  {
    scene: "road",
    file: "music/Boyz II Men - End Of The Road.mp3",
    start: 99,
    end: 175,
    lyrics: [
      { time: 0, text: "Maybe I'll forgive you" },
      { time: 6, text: "Maybe you'll try" },
      { time: 11, text: "We should be happy together" },
      { time: 14, text: "Forever, you and I" },
      { time: 19, text: "Will you love me again like you loved me before" },
      { time: 24, text: "This time I want you to love me much more" },
      { time: 29, text: "This time instead just come to my bed" },
      { time: 34, text: "And, baby, just don't let me down" },
      { time: 38, text: "Although we've come to the end of the road (End of the road)" },
      { time: 45, text: "Still I can't let go (The end of the road and I know I can't let go, baby)" },
      { time: 50, text: "It's unnatural, you belong to me, I belong to you" },
      { time: 59, text: "Girl, I'm here for you" },
      { time: 63, text: "All those times at night when you just hurt me" },
      { time: 65, text: "And just ran out with that other fella" },
      { time: 68, text: "Baby, I knew about it, I just didn't care" },
      { time: 72, text: "You just don't understand how much I love you, do you?" },
      { time: 77, text: "I'm here for you" }
    ]
  }
];

let activeSong = null;
let lyricTimers = [];
let stopTimer = null;
let loadToken = 0;

function showScreen(targetScreen) {
  [welcomeScreen, choiceScreen, lyricsScreen].forEach(screen => {
    screen.classList.remove("active");
  });

  targetScreen.classList.add("active");
}

function clearTimers() {
  lyricTimers.forEach(timer => clearTimeout(timer));
  lyricTimers = [];

  if (stopTimer !== null) {
    clearTimeout(stopTimer);
    stopTimer = null;
  }
}

function stopAudio() {
  loadToken++;
  clearTimers();

  audioPlayer.pause();
  audioPlayer.removeAttribute("src");
  audioPlayer.load();

  activeSong = null;
  progressFill.style.width = "0%";
  lyricsText.textContent = "";
}

function setScene(song) {
  Object.entries(scenes).forEach(([name, element]) => {
    if (element) {
      element.style.display = name === song.scene ? "block" : "none";
    }
  });
}

function startLyrics(song) {
  clearTimers();
  lyricsText.textContent = "";

  song.lyrics.forEach(line => {
    const timer = setTimeout(() => {
      if (activeSong !== song) return;

      lyricsText.textContent = line.text;

      // Restart the lyric fade animation for every line.
      lyricsText.style.animation = "none";
      void lyricsText.offsetWidth;
      lyricsText.style.animation = "";
    }, line.time * 1000);

    lyricTimers.push(timer);
  });
}

function waitForMetadata(token) {
  return new Promise((resolve, reject) => {
    if (audioPlayer.readyState >= 1) {
      resolve();
      return;
    }

    const onLoaded = () => {
      cleanup();
      resolve();
    };

    const onError = () => {
      cleanup();
      reject(new Error("Audio file could not be loaded."));
    };

    function cleanup() {
      audioPlayer.removeEventListener("loadedmetadata", onLoaded);
      audioPlayer.removeEventListener("error", onError);
    }

    audioPlayer.addEventListener("loadedmetadata", onLoaded);
    audioPlayer.addEventListener("error", onError);

    if (token !== loadToken) {
      cleanup();
      reject(new Error("Song selection changed."));
    }
  });
}

async function playSong(song) {
  stopAudio();

  const token = loadToken;
  activeSong = song;

  setScene(song);
  lyricsText.textContent = "";
  progressFill.style.width = "0%";
  showScreen(lyricsScreen);

  audioPlayer.src = song.file;
  audioPlayer.load();

  try {
    await waitForMetadata(token);

    if (token !== loadToken || activeSong !== song) return;

    if (audioPlayer.duration && song.start >= audioPlayer.duration) {
      throw new Error("Starting time is longer than the audio.");
    }

    audioPlayer.currentTime = song.start;
    await audioPlayer.play();

    if (token !== loadToken || activeSong !== song) {
      audioPlayer.pause();
      return;
    }

    startLyrics(song);

    stopTimer = setTimeout(() => {
      if (activeSong !== song) return;

      audioPlayer.pause();
      clearTimers();
      progressFill.style.width = "100%";
    }, Math.max(0, song.end - song.start) * 1000);

  } catch (error) {
    if (token !== loadToken) return;

    console.error("Audio playback error:", error);
    lyricsText.textContent = "";
  }
}

openButton.addEventListener("click", () => {
  showScreen(choiceScreen);
});

homeButton.addEventListener("click", () => {
  stopAudio();
  showScreen(welcomeScreen);
});

backButton.addEventListener("click", () => {
  stopAudio();
  showScreen(choiceScreen);
});

document.querySelectorAll(".choice-card").forEach(button => {
  button.addEventListener("click", () => {
    const song = songs[Number(button.dataset.song)];

    if (song) {
      playSong(song);
    }
  });
});

audioPlayer.addEventListener("timeupdate", () => {
  if (!activeSong) return;

  const duration = activeSong.end - activeSong.start;
  const elapsed = audioPlayer.currentTime - activeSong.start;
  const percentage = duration > 0 ? (elapsed / duration) * 100 : 0;

  progressFill.style.width =
    `${Math.max(0, Math.min(percentage, 100))}%`;

  if (audioPlayer.currentTime >= activeSong.end) {
    audioPlayer.pause();
  }
});

audioPlayer.addEventListener("ended", () => {
  clearTimers();
  progressFill.style.width = "100%";
});

// Hide every scene when the website first opens.
// The selected song's background appears when its card is clicked.
Object.values(scenes).forEach(scene => {
  if (scene) {
    scene.style.display = "none";
  }
});
