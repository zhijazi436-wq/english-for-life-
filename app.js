const videos = [
  {
    id: "abc-song", videoId: "75p-N9YKqNo", category: "english", title: "The ABC Song", creator: "KidsTV123",
    age: "Ages 3–6", icon: "🔤", label: "LET'S SING", colors: "thumb-lilac",
    objective: "Sing along and become familiar with the order and names of the alphabet.",
    description: "Sing the alphabet from A to Z. Grown-ups can pause the video and ask learners to spot the letters they know."
  },
  {
    id: "phonics-song", videoId: "BELlZKpi1Zs", category: "english", title: "Phonics Song 2", creator: "KidsTV123",
    age: "Ages 4–8", icon: "🗣️", label: "SOUND IT OUT", colors: "thumb-blue",
    objective: "Listen for letter sounds and practice connecting sounds with written letters.",
    description: "A phonics song for practicing letter sounds. A grown-up can help children repeat the sounds and find matching letters."
  },
  {
    id: "counting-song", videoId: "D0Ajq682yrA", category: "math", title: "Number Song 1–20", creator: "The Singing Walrus",
    age: "Ages 3–7", icon: "🔢", label: "COUNT ALONG", colors: "thumb-yellow",
    objective: "Practice number order and counting from one to twenty.",
    description: "Count from one to twenty with a number song. Try counting fingers, toys, or snacks together after the video."
  },
  {
    id: "big-numbers", videoId: "bGetqbqDVaA", category: "math", title: "Big Numbers: Count to 100", creator: "The Singing Walrus",
    age: "Ages 6–10", icon: "💯", label: "BIG NUMBER FUN", colors: "thumb-yellow",
    objective: "Practice counting in order all the way from one to one hundred.",
    description: "A counting song for practicing numbers up to one hundred. Pause whenever you need a little counting break."
  },
  {
    id: "shape-song", videoId: "WTeqUejf3D0", category: "math", title: "Shapes Song 2", creator: "KidsTV123",
    age: "Ages 3–7", icon: "🔺", label: "SHAPE SPOTTER", colors: "thumb-blue",
    objective: "Recognize common shapes and notice them in the world around us.",
    description: "Meet shapes in a cheerful song. Afterwards, go on a grown-up-supervised hunt for circles, squares, and triangles."
  },
  {
    id: "animal-sounds", videoId: "t99ULJjCsaM", category: "science", title: "The Animal Sounds Song", creator: "KidsTV123",
    age: "Ages 3–7", icon: "🐵", label: "SOUND SAFARI", colors: "thumb-coral",
    objective: "Listen closely and connect familiar animal sounds with animals.",
    description: "Listen to animal sounds and sing along. Can you name an animal before it appears? Try the animal challenge afterwards."
  },
  {
    id: "blue-song", videoId: "jYAWf8Y91hA", category: "creativity", title: "I See Something Blue", creator: "Super Simple Songs",
    age: "Ages 3–6", icon: "🎨", label: "COLOR & SING", colors: "thumb-pink",
    objective: "Identify the color blue in objects and pictures.",
    description: "Join a color-spotting song, then look around with a grown-up and find something blue."
  },
  {
    id: "twinkle-star", videoId: "yCjJyiqpAuU", category: "stories", title: "Twinkle Twinkle Little Star", creator: "Super Simple Songs",
    age: "Ages 3–6", icon: "🌙", label: "COZY SING-ALONG", colors: "thumb-peach",
    objective: "Practice listening, rhythm, and familiar words with a gentle nursery rhyme.",
    description: "A gentle nursery rhyme for a quiet moment. Sing together, listen for rhyming words, or spot stars in the night sky."
  },
  {
    id: "five-ducks", videoId: "pZw9veQ76fo", category: "stories", title: "Five Little Ducks", creator: "Super Simple Songs",
    age: "Ages 3–6", icon: "🦆", label: "COUNTING STORY", colors: "thumb-yellow",
    objective: "Count backwards from five and follow a familiar story-song.",
    description: "Sing and count the little ducks as they waddle away and come back. Can you count down from five?"
  },
  {
    id: "rainbow-song", videoId: "SLZcWGQQsmg", category: "creativity", title: "Rainbow Colors Song", creator: "The Singing Walrus",
    age: "Ages 3–7", icon: "🌈", label: "COLORFUL SING-ALONG", colors: "thumb-pink",
    objective: "Name and recognize colors through song and repetition.",
    description: "Sing about rainbow colors, then find your favorite colors in a picture or with a grown-up."
  },
  {
    id: "happy-song", videoId: "l4WNrvVjiTw", category: "creativity", title: "If You're Happy", creator: "Super Simple Songs",
    age: "Ages 3–6", icon: "🎵", label: "MOVE & SING", colors: "thumb-coral",
    objective: "Practice listening and following simple movement directions.",
    description: "A familiar action song. Sing, clap, and move along in a safe space with room to wiggle."
  },
  {
    id: "first-words", videoId: "hTqtGJwsJVE", category: "english", title: "First Words, Songs & Rhymes", creator: "Ms Rachel",
    age: "Ages 3–5", icon: "💬", label: "FIRST WORDS", colors: "thumb-lilac",
    objective: "Practice early words, listening, and joining in with nursery rhymes.",
    description: "A longer early-learning video with songs and first words. Choose a short moment to watch together and follow the child's interests."
  },
  {
    id: "flower-closeup", category: "science", title: "A Flower Opens", creator: "MDN Web Docs · CC0",
    mediaUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    age: "Ages 3–12", icon: "🌼", label: "NATURE CLOSE-UP", colors: "thumb-mint",
    objective: "Observe how a flower changes as it opens.",
    description: "Watch a flower open in this short, silent nature clip. Look closely: what changes? What colors and shapes can you find?"
  },
  {
    id: "space-asteroid", category: "science", title: "Bennu's Journey: A Space Rock", creator: "NASA Goddard",
    mediaUrl: "https://images-assets.nasa.gov/video/GSFC_20140923_Bennu_m11661_Teaser/GSFC_20140923_Bennu_m11661_Teaser~small.mp4",
    poster: "https://images-assets.nasa.gov/video/GSFC_20140923_Bennu_m11661_Teaser/GSFC_20140923_Bennu_m11661_Teaser~medium.jpg",
    captions: "https://images-assets.nasa.gov/video/GSFC_20140923_Bennu_m11661_Teaser/GSFC_20140923_Bennu_m11661_Teaser.vtt",
    age: "Ages 8–12", icon: "🚀", label: "SPACE EXPLORER", colors: "thumb-blue",
    objective: "Discover what asteroids can teach us about the early solar system.",
    description: "NASA explores asteroid Bennu and the ancient ingredients that helped form planets. This science clip is best watched and discussed with a grown-up."
  }
];

const videoGrid = document.getElementById("videoGrid");
const videoSearch = document.getElementById("videoSearch");
const emptyState = document.getElementById("emptyState");
const videoDialog = document.getElementById("videoDialog");
const promptDialog = document.getElementById("promptDialog");
const parentSettingsDialog = document.getElementById("parentSettingsDialog");
const toast = document.getElementById("toast");
let activeFilter = "all";
let activeAge = "all";
let toastTimer;
let activeChallenge;
let screenTimeTimer;
let screenTimeExpired = false;

function readList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.warn(`Could not read ${key} from local storage.`, error);
    return [];
  }
}

function readCounts(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch (error) {
    console.warn(`Could not read ${key} from local storage.`, error);
    return {};
  }
}

function formatCount(count) {
  return count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}k` : String(count);
}

function makeCard(video) {
  const favorites = readList("kidsworld-favorites");
  const liked = readList("kidsworld-liked");
  const isSaved = favorites.includes(video.id);
  const isLiked = liked.includes(video.id);
  const viewCounts = readCounts("kidsworld-view-counts");
  const thumbnail = video.videoId
    ? `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
    : video.poster;
  return `
    <article class="video-card">
      <button class="video-thumbnail ${video.colors} ${thumbnail ? "has-thumbnail" : ""}" data-play="${video.id}" aria-label="Play ${video.title}">
        ${thumbnail ? `<img class="thumbnail-image" src="${thumbnail}" alt="" loading="lazy">` : ""}
        <span class="thumbnail-label">${video.label}</span>
        <span class="thumbnail-art" aria-hidden="true">${video.icon}</span>
        <span class="play-button" aria-hidden="true">▶</span>
        <span class="duration">VIDEO</span>
      </button>
      <div class="video-card-body">
        <div class="video-creator"><span class="creator-avatar">✦</span><span>${video.creator}</span><span class="verified" aria-label="Curated channel">✓</span></div>
        <button class="video-title" data-play="${video.id}">${video.title}</button>
        <p class="video-objective">${video.objective}</p>
        <div class="video-stats"><span>▶ ${formatCount(Number(viewCounts[video.id] || 0))} video opens</span><span>♡ ${Number(isLiked)} likes</span><span class="age-tag">${video.age}</span></div>
        <div class="video-actions">
          <button class="video-action ${isLiked ? "is-active" : ""}" data-like="${video.id}" aria-label="${isLiked ? "Unlike" : "Like"} ${video.title}" aria-pressed="${isLiked}">${isLiked ? "♥" : "♡"} <span>Like</span></button>
          <button class="video-action ${isSaved ? "is-active" : ""}" data-save="${video.id}" aria-label="${isSaved ? "Remove from" : "Save to"} favorites" aria-pressed="${isSaved}">${isSaved ? "★" : "☆"} <span>${isSaved ? "Saved" : "Save"}</span></button>
          <button class="video-action" data-share="${video.id}" aria-label="Share ${video.title}">↗ <span>Share</span></button>
        </div>
      </div>
    </article>`;
}

function renderVideos() {
  const query = videoSearch.value.trim().toLowerCase();
  const matches = videos.filter((video) => {
    const favorites = readList("kidsworld-favorites");
    const history = readList("kidsworld-history");
    const matchesFilter = activeFilter === "all"
      || (activeFilter === "saved" && favorites.includes(video.id))
      || (activeFilter === "history" && history.includes(video.id))
      || video.category === activeFilter;
    const matchesQuery = `${video.title} ${video.creator} ${video.category} ${video.objective}`.toLowerCase().includes(query);
    const ageRange = video.age.match(/\d+/g)?.map(Number) || [];
    const matchesAge = activeAge === "all" || (ageRange.length === 2 && ageRange[0] <= Number(activeAge.split("-")[1]) && ageRange[1] >= Number(activeAge.split("-")[0]));
    return matchesFilter && matchesQuery && matchesAge;
  });
  videoGrid.innerHTML = matches.map(makeCard).join("");
  emptyState.hidden = matches.length > 0;
  document.getElementById("videoStructuredData").textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kids Learning World educational videos",
    itemListElement: videos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: video.videoId
          ? `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
          : video.poster,
        embedUrl: video.videoId
          ? `https://www.youtube-nocookie.com/embed/${video.videoId}`
          : undefined,
        contentUrl: video.mediaUrl,
        inLanguage: "en"
      }
    }))
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function updateLearnerProgress() {
  const xp = Number(localStorage.getItem("kidsworld-xp") || 0);
  const level = Math.floor(xp / 100) + 1;
  document.getElementById("learnerLevel").textContent = `Level ${level} · Curious Cub`;
  document.getElementById("learnerXp").textContent = `${xp % 100} / 100 XP`;
  document.getElementById("learnerProgress").style.width = `${xp % 100}%`;
  const today = dateKey(new Date());
  const days = new Set(readList("kidsworld-activity-days"));
  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (days.has(dateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  document.getElementById("learnerStreak").textContent = streak ? `${streak} ${streak === 1 ? "day" : "days"}` : "Start today!";
  document.getElementById("parentStreak").textContent = `${streak} ${streak === 1 ? "day" : "days"}`;
  document.getElementById("parentProgress").textContent = streak
    ? "Look at you go!"
    : "Start a little adventure!";
  const earnedVideos = readList("kidsworld-earned-videos").length;
  const challenges = readList("kidsworld-challenges").length;
  const badge = document.getElementById("learnerBadgeTitle");
  const badgeText = document.getElementById("learnerBadgeText");
  const badgeIcon = document.getElementById("learnerBadgeIcon");
  if (challenges > 0) {
    badge.textContent = "Challenge champion!";
    badgeText.textContent = `${challenges} challenge${challenges === 1 ? "" : "s"} solved`;
    badgeIcon.textContent = "🏆";
  } else if (earnedVideos >= 3) {
    badge.textContent = "Curious explorer!";
    badgeText.textContent = `${earnedVideos} videos started`;
    badgeIcon.textContent = "🌟";
  } else {
    badge.textContent = "Your first badge awaits!";
    badgeText.textContent = `${earnedVideos} of 3 videos started`;
    badgeIcon.textContent = "🏅";
  }
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function recordLearningActivity(videoId) {
  const today = dateKey(new Date());
  const days = readList("kidsworld-activity-days").filter((day) => typeof day === "string" && day !== today);
  localStorage.setItem("kidsworld-activity-days", JSON.stringify([today, ...days].slice(0, 365)));
  const earnedVideos = readList("kidsworld-earned-videos");
  if (!earnedVideos.includes(videoId)) {
    localStorage.setItem("kidsworld-earned-videos", JSON.stringify([...earnedVideos, videoId]));
    localStorage.setItem("kidsworld-xp", String(Number(localStorage.getItem("kidsworld-xp") || 0) + 5));
  }
  updateLearnerProgress();
}

function getScreenTimeRemaining() {
  const deadline = Number(localStorage.getItem("kidsworld-screen-time-deadline") || 0);
  return deadline ? deadline - Date.now() : null;
}

function updateScreenTimeStatus() {
  const status = document.getElementById("screenTimeStatus");
  const remaining = getScreenTimeRemaining();
  const limit = Number(localStorage.getItem("kidsworld-screen-time-minutes") || 0);
  status.textContent = !limit
    ? "No limit set"
    : remaining === null
      ? `${limit} min per session`
    : remaining <= 0
      ? "Break time reached"
      : `${Math.ceil(remaining / 60000)} min left`;
}

function startScreenTimeTimer() {
  window.clearInterval(screenTimeTimer);
  screenTimeExpired = false;
  updateScreenTimeStatus();
  if (getScreenTimeRemaining() === null) return;
  screenTimeTimer = window.setInterval(() => {
    const remaining = getScreenTimeRemaining();
    updateScreenTimeStatus();
    if (remaining === null || remaining > 0 || screenTimeExpired) return;
    screenTimeExpired = true;
    if (videoDialog.open) videoDialog.close();
    if (promptDialog.open) promptDialog.close();
    showToast("Screen-time limit reached. Time for a break—ask a grown-up to continue. 🌿");
  }, 1000);
}

function setActiveFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-tab:not(.age-filter)").forEach((tab) => {
    const selected = tab.dataset.filter === filter;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-pressed", String(selected));
  });
  renderVideos();
}

function openVideo(id, forChallenge = false) {
  const video = videos.find((item) => item.id === id);
  if (!video) return;
  if (screenTimeExpired || (getScreenTimeRemaining() !== null && getScreenTimeRemaining() <= 0)) {
    screenTimeExpired = true;
    updateScreenTimeStatus();
    showToast("Time for a screen break. Ask a grown-up to set a new limit. 🌿");
    return;
  }
  if (!forChallenge) activeChallenge = null;
  if (getScreenTimeRemaining() === null) {
    const limit = Number(localStorage.getItem("kidsworld-screen-time-minutes") || 0);
    if (limit > 0) {
      localStorage.setItem("kidsworld-screen-time-deadline", String(Date.now() + limit * 60000));
      startScreenTimeTimer();
    }
  }
  recordLearningActivity(id);
  const history = readList("kidsworld-history").filter((watchedId) => watchedId !== id);
  localStorage.setItem("kidsworld-history", JSON.stringify([id, ...history].slice(0, 30)));
  const viewCounts = readCounts("kidsworld-view-counts");
  viewCounts[id] = Number(viewCounts[id] || 0) + 1;
  localStorage.setItem("kidsworld-view-counts", JSON.stringify(viewCounts));
  renderVideos();
  document.getElementById("dialogCategory").textContent = `${video.category} · ${video.age}`;
  document.getElementById("dialogTitle").textContent = video.title;
  document.getElementById("dialogDescription").textContent = `${video.description} Learning goal: ${video.objective}`;
  const player = document.getElementById("dialogPlayer");
  player.className = `dialog-player ${video.videoId ? "youtube-player" : "native-player"} ${video.colors}`;
  if (video.videoId) {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.videoId)}?rel=0&playsinline=1&cc_load_policy=1&hl=en`;
    player.innerHTML = `<iframe src="${embedUrl}" title="${video.title} by ${video.creator}" allow="encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else {
    const captions = video.captions
      ? `<track kind="captions" src="${video.captions}" srclang="en" label="English" default>`
      : "";
    player.innerHTML = `<video controls playsinline preload="metadata" ${video.poster ? `poster="${video.poster}"` : ""} aria-label="${video.title}">${captions}<source src="${video.mediaUrl}" type="video/mp4">Your browser cannot play this video. Please try a different browser.</video>`;
  }
  const sameSubject = videos.filter((item) => item.category === video.category && item.id !== video.id);
  const related = (sameSubject.length ? sameSubject : videos.filter((item) => item.id !== video.id)).slice(0, 2);
  const challengeButton = activeChallenge?.video === video.id
    ? `<button class="related-link" data-start-challenge>Try the challenge →</button>`
    : "";
  const providerLink = video.videoId
    ? `<a class="related-link" href="https://www.youtube.com/watch?v=${encodeURIComponent(video.videoId)}" target="_blank" rel="noopener noreferrer">Open at YouTube ↗</a>`
    : `<a class="related-link" href="${video.mediaUrl}" target="_blank" rel="noopener noreferrer">Open video file ↗</a>`;
  document.getElementById("dialogMeta").innerHTML = `<span>▶ ${formatCount(viewCounts[id])} video opens</span><span>♡ ${Number(readList("kidsworld-liked").includes(id))} likes</span>${challengeButton}${providerLink}${related.map((item) => `<button class="related-link" data-play="${item.id}">More ${item.category}: ${item.title} →</button>`).join("")}`;
  if (!videoDialog.open) videoDialog.showModal();
}

document.getElementById("filterTabs").addEventListener("click", (event) => {
  const ageButton = event.target.closest("[data-age]");
  if (ageButton) {
    activeAge = ageButton.dataset.age;
    document.querySelectorAll(".age-filter").forEach((tab) => {
      const selected = tab.dataset.age === activeAge;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-pressed", String(selected));
    });
    renderVideos();
    return;
  }
  const subjectButton = event.target.closest("[data-filter]");
  if (subjectButton) setActiveFilter(subjectButton.dataset.filter);
});

document.querySelector(".tools-grid").addEventListener("click", (event) => {
  const link = event.target.closest("[data-filter]");
  if (link) setActiveFilter(link.dataset.filter);
});

document.querySelector(".subject-grid").addEventListener("click", (event) => {
  const card = event.target.closest("[data-filter]");
  if (!card) return;
  event.preventDefault();
  setActiveFilter(card.dataset.filter);
  document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
});

videoSearch.addEventListener("input", renderVideos);

videoGrid.addEventListener("click", async (event) => {
  const play = event.target.closest("[data-play]");
  const like = event.target.closest("[data-like]");
  const save = event.target.closest("[data-save]");
  const share = event.target.closest("[data-share]");

  if (play) {
    openVideo(play.dataset.play);
    return;
  }
  if (like) {
    const liked = readList("kidsworld-liked");
    const wasLiked = liked.includes(like.dataset.like);
    const next = wasLiked ? liked.filter((id) => id !== like.dataset.like) : [...liked, like.dataset.like];
    localStorage.setItem("kidsworld-liked", JSON.stringify(next));
    renderVideos();
    showToast(wasLiked ? "Like removed." : "Thanks for the love! 💛");
    return;
  }
  if (save) {
    const favorites = readList("kidsworld-favorites");
    const wasSaved = favorites.includes(save.dataset.save);
    const next = wasSaved ? favorites.filter((id) => id !== save.dataset.save) : [...favorites, save.dataset.save];
    localStorage.setItem("kidsworld-favorites", JSON.stringify(next));
    renderVideos();
    showToast(wasSaved ? "Removed from your favorites." : "Saved to your favorites! ⭐");
    return;
  }
  if (share) {
    const video = videos.find((item) => item.id === share.dataset.share);
    const url = new URL(`#video-${video.id}`, window.location.href).href;
    if (navigator.share) {
      await navigator.share({ title: video.title, text: `A little learning: ${video.title}`, url });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      showToast("Video link copied for a grown-up to share! 🔗");
    } else {
      showToast("Ask a grown-up to copy this video's link.");
    }
  }
});

videoGrid.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.classList.contains("thumbnail-image")) return;
  image.hidden = true;
  image.closest(".video-thumbnail")?.classList.remove("has-thumbnail");
}, true);

document.getElementById("dialogMeta").addEventListener("click", (event) => {
  const tryChallenge = event.target.closest("[data-start-challenge]");
  if (tryChallenge && activeChallenge) {
    videoDialog.close();
    openChallenge(activeChallenge);
    return;
  }
  const link = event.target.closest("[data-play]");
  if (link) openVideo(link.dataset.play);
});

videoDialog.addEventListener("close", () => {
  if (!videoDialog.open) document.getElementById("dialogPlayer").replaceChildren();
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

[videoDialog, promptDialog, parentSettingsDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

function openChallenge(challenge) {
  activeChallenge = challenge;
  document.getElementById("promptQuestion").textContent = challenge.challenge;
  document.getElementById("promptAnswer").value = "";
  document.getElementById("answerFeedback").textContent = "";
  promptDialog.showModal();
  document.getElementById("promptAnswer").focus();
}

document.querySelectorAll(".challenge-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.video) {
      activeChallenge = card.dataset;
      openVideo(card.dataset.video, true);
    } else {
      openChallenge(card.dataset);
    }
  });
});

document.getElementById("checkAnswer").addEventListener("click", () => {
  const answer = document.getElementById("promptAnswer").value.trim();
  const feedback = document.getElementById("answerFeedback");
  if (!answer) {
    feedback.textContent = "Pop your guess in the box first! 😊";
    feedback.className = "feedback-reminder";
    return;
  }
  if (answer.toLowerCase() !== activeChallenge?.answer) {
    feedback.textContent = "Not quite! Have another think, you can do it! 💛";
    feedback.className = "feedback-reminder";
    return;
  }
  const completed = readList("kidsworld-challenges");
  feedback.textContent = completed.includes(activeChallenge.challenge)
    ? "You got it! This challenge already earned you a star! ⭐"
    : "Wonderful guess! You’re a curious superstar! ✨";
  feedback.className = "feedback-success";
  if (completed.includes(activeChallenge.challenge)) return;
  localStorage.setItem("kidsworld-challenges", JSON.stringify([...completed, activeChallenge.challenge]));
  const xp = Number(localStorage.getItem("kidsworld-xp") || 0) + 10;
  localStorage.setItem("kidsworld-xp", String(xp));
  updateLearnerProgress();
  showToast("Challenge complete! +10 curious points ✨");
});

document.getElementById("screenTimeButton").addEventListener("click", () => {
  const remaining = getScreenTimeRemaining();
  const savedLimit = Number(localStorage.getItem("kidsworld-screen-time-minutes") || 20);
  const minutes = document.getElementById("screenTimeMinutes");
  minutes.value = remaining && remaining > 0 ? String(Math.ceil(remaining / 60000)) : String(savedLimit);
  document.getElementById("screenTimeFeedback").textContent = "";
  parentSettingsDialog.showModal();
  minutes.focus();
});

document.getElementById("saveScreenTime").addEventListener("click", () => {
  const parsed = Number(document.getElementById("screenTimeMinutes").value);
  if (!Number.isInteger(parsed) || parsed < 0 || parsed > 180) {
    document.getElementById("screenTimeFeedback").textContent = "Please enter a whole number from 0 to 180.";
    document.getElementById("screenTimeFeedback").className = "feedback-reminder";
    return;
  }
  if (parsed === 0) {
    localStorage.removeItem("kidsworld-screen-time-minutes");
    localStorage.removeItem("kidsworld-screen-time-deadline");
    screenTimeExpired = false;
    startScreenTimeTimer();
    parentSettingsDialog.close();
    showToast("The video-session limit is off. 🌿");
    return;
  }
  localStorage.setItem("kidsworld-screen-time-minutes", String(parsed));
  localStorage.removeItem("kidsworld-screen-time-deadline");
  screenTimeExpired = false;
  startScreenTimeTimer();
  parentSettingsDialog.close();
  showToast(`A grown-up set a ${parsed}-minute video limit. ⏰`);
});

const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}
applyTheme(localStorage.getItem("kidsworld-theme") || "light");
updateLearnerProgress();
startScreenTimeTimer();
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("kidsworld-theme", nextTheme);
  applyTheme(nextTheme);
});

const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");
mobileMenu.addEventListener("click", () => {
  const expanded = mobileMenu.getAttribute("aria-expanded") === "true";
  mobileMenu.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("is-open", !expanded);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    mobileMenu.setAttribute("aria-expanded", "false");
  }
});

renderVideos();

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-play]");
  if (!trigger || videoGrid.contains(trigger) || document.getElementById("dialogMeta").contains(trigger)) return;
  event.preventDefault();
  openVideo(trigger.dataset.play);
});

function openSharedVideo() {
  const videoId = window.location.hash.match(/^#video-(.+)$/)?.[1];
  if (videoId) openVideo(videoId);
}

window.addEventListener("hashchange", openSharedVideo);
openSharedVideo();
