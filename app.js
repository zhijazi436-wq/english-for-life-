const videos = [
  {
    id: "animal-band", category: "science", title: "The Animal Sound Band!", creator: "Winnie & Friends",
    duration: "2:14", age: "Ages 3–6", views: 12800, likes: 942, icon: "🐵", label: "THIS WEEK'S #1",
    colors: "thumb-coral", objective: "Recognize familiar animal sounds and connect each sound to an animal.",
    description: "Join Winnie and the woodland band for a happy little guessing game. Can you spot who goes moo, quack, and oink?"
  },
  {
    id: "counting-stars", category: "math", title: "Count the Stars with Me!", creator: "Little Learner Club",
    duration: "3:08", age: "Ages 3–5", views: 9600, likes: 721, icon: "🌟", label: "NUMBER ONE FUN",
    colors: "thumb-yellow", objective: "Practice counting objects from one to ten.",
    description: "The stars are out and they need counting! Join a gentle bedtime adventure and count along from one to ten."
  },
  {
    id: "hello-words", category: "english", title: "10 Happy Words in 1 Minute", creator: "Sunny Sounds",
    duration: "0:58", age: "Ages 5–8", views: 18400, likes: 1540, icon: "🔤", label: "QUICK & CLEVER",
    colors: "thumb-lilac", objective: "Build everyday English vocabulary through repetition and pictures.",
    description: "Ready, set, say! Practice ten useful English words with cheerful pictures, a catchy beat, and lots of chances to join in."
  },
  {
    id: "rainbow-lab", category: "science", title: "The Rainbow in a Glass", creator: "Curious Cloud",
    duration: "4:22", age: "Ages 7–10", views: 7300, likes: 604, icon: "🌈", label: "CURIOUS PICK",
    colors: "thumb-mint", objective: "Explore how colors mix with a safe, grown-up-guided experiment.",
    description: "What happens when sunny colors say hello? Curious Cloud explores color mixing with a simple experiment to try together with a grown-up."
  },
  {
    id: "shape-hunt", category: "math", title: "The Great Shape Safari", creator: "Winnie & Friends",
    duration: "2:46", age: "Ages 4–7", views: 6700, likes: 513, icon: "🔺", label: "LITTLE EXPLORER",
    colors: "thumb-blue", objective: "Identify circles, triangles, squares, and rectangles in everyday objects.",
    description: "Winnie is off on a shape safari! Look high and low for circles, squares, triangles, and more in this playful seek-and-find."
  },
  {
    id: "moonlight-tale", category: "stories", title: "Milo's Moonlight Story", creator: "The Cozy Corner",
    duration: "5:10", age: "Ages 3–7", views: 8100, likes: 802, icon: "🌙", label: "COZY FAVORITE",
    colors: "thumb-peach", objective: "Practice listening, imagination, and kindness through a gentle bedtime story.",
    description: "Little Milo finds a glowing surprise on a quiet night walk. A cozy story about helping a friend and finding your way home."
  },
  {
    id: "dance-colors", category: "creativity", title: "Dance the Colors!", creator: "Sunny Sounds",
    duration: "1:36", age: "Ages 3–6", views: 10200, likes: 887, icon: "🎨", label: "SING IT AGAIN",
    colors: "thumb-pink", objective: "Name basic colors and connect them with movement and music.",
    description: "Red, yellow, blue! Wiggle, stretch, and sing along while learning the colors of our wonderful world."
  },
  {
    id: "tiny-gardener", category: "science", title: "A Seed's Big Adventure", creator: "Curious Cloud",
    duration: "3:52", age: "Ages 6–9", views: 5900, likes: 477, icon: "🌱", label: "NATURE FRIEND",
    colors: "thumb-mint", objective: "Understand the basic stages in a plant's life cycle.",
    description: "A teeny seed has a big dream! Follow its journey from tiny sprout to happy sunflower and discover what plants need to grow."
  }
];

const videoGrid = document.getElementById("videoGrid");
const videoSearch = document.getElementById("videoSearch");
const emptyState = document.getElementById("emptyState");
const videoDialog = document.getElementById("videoDialog");
const promptDialog = document.getElementById("promptDialog");
const toast = document.getElementById("toast");
let activeFilter = "all";
let activeAge = "all";
let toastTimer;
let activeChallenge;

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
  return `
    <article class="video-card">
      <button class="video-thumbnail ${video.colors}" data-play="${video.id}" aria-label="Play ${video.title}">
        <span class="thumbnail-label">${video.label}</span>
        <span class="thumbnail-art" aria-hidden="true">${video.icon}</span>
        <span class="play-button" aria-hidden="true">▶</span>
        <span class="duration">${video.duration}</span>
      </button>
      <div class="video-card-body">
        <div class="video-creator"><span class="creator-avatar">✦</span><span>${video.creator}</span><span class="verified" aria-label="Curated channel">✓</span></div>
        <button class="video-title" data-play="${video.id}">${video.title}</button>
        <p class="video-objective">${video.objective}</p>
        <div class="video-stats"><span>◉ ${formatCount(video.views + Number(viewCounts[video.id] || 0))} views</span><span>♡ ${formatCount(video.likes + Number(isLiked))}</span><span class="age-tag">${video.age}</span></div>
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
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function updateLearnerProgress() {
  const xp = Number(localStorage.getItem("kidsworld-xp") || 120);
  const level = Math.max(2, Math.floor(xp / 100) + 1);
  document.getElementById("learnerLevel").textContent = `Level ${level} · Curious Cub`;
  document.getElementById("learnerXp").textContent = `${xp} / ${level * 100} XP`;
  document.getElementById("learnerProgress").style.width = `${Math.min(100, (xp / (level * 100)) * 100)}%`;
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

function openVideo(id) {
  const video = videos.find((item) => item.id === id);
  if (!video) return;
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
  player.className = `dialog-player ${video.colors}`;
  player.innerHTML = `<span class="dialog-art" aria-hidden="true">${video.icon}</span><span class="dialog-play" aria-hidden="true">▶</span><span class="player-caption">A little preview of ${video.creator}</span>`;
  const sameSubject = videos.filter((item) => item.category === video.category && item.id !== video.id);
  const related = (sameSubject.length ? sameSubject : videos.filter((item) => item.id !== video.id)).slice(0, 2);
  document.getElementById("dialogMeta").innerHTML = `<span>◉ ${formatCount(video.views + viewCounts[id])} views this week</span><span>♡ ${formatCount(video.likes)} happy learners</span>${related.map((item) => `<button class="related-link" data-play="${item.id}">More ${item.category}: ${item.title} →</button>`).join("")}`;
  videoDialog.showModal();
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

document.getElementById("dialogMeta").addEventListener("click", (event) => {
  const link = event.target.closest("[data-play]");
  if (link) openVideo(link.dataset.play);
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

[videoDialog, promptDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelectorAll(".challenge-card").forEach((card) => {
  card.addEventListener("click", () => {
    activeChallenge = card.dataset;
    document.getElementById("promptQuestion").textContent = card.dataset.challenge;
    document.getElementById("promptAnswer").value = "";
    document.getElementById("answerFeedback").textContent = "";
    promptDialog.showModal();
    document.getElementById("promptAnswer").focus();
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
  const xp = Number(localStorage.getItem("kidsworld-xp") || 120) + 10;
  localStorage.setItem("kidsworld-xp", String(xp));
  updateLearnerProgress();
  showToast("Challenge complete! +10 curious points ✨");
});

document.getElementById("screenTimeButton").addEventListener("click", () => {
  const minutes = window.prompt("How many minutes should a grown-up set for a learning break?", "20");
  if (minutes === null) return;
  const parsed = Number(minutes);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 180) {
    showToast("Please ask a grown-up to choose 1–180 minutes.");
    return;
  }
  localStorage.setItem("kidsworld-screen-time", String(parsed));
  showToast(`A grown-up set a ${parsed}-minute learning reminder. ⏰`);
});

const themeToggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}
applyTheme(localStorage.getItem("kidsworld-theme") || "light");
updateLearnerProgress();
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
