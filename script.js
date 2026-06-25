const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectTiles = document.querySelectorAll("[data-category]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectTiles.forEach((tile) => {
      const shouldShow = filter === "all" || tile.dataset.category === filter;
      tile.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const videoTiles = document.querySelectorAll(".project-video");
const videoModal = document.querySelector(".video-modal");

if (videoModal && videoTiles.length) {
  const videoFrame = videoModal.querySelector(".video-modal-frame");
  const videoClose = videoModal.querySelector(".video-modal-close");

  const getVideoId = (url) => {
    const match = (url || "").match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
    );
    return match ? match[1] : null;
  };

  const openVideo = (id) => {
    videoFrame.innerHTML =
      `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" ` +
      `title="Video player" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" ` +
      `allowfullscreen></iframe>`;
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  };

  const closeVideo = () => {
    videoModal.classList.remove("is-open");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    // Clear the iframe after the fade-out so the close animates cleanly.
    window.setTimeout(() => {
      if (!videoModal.classList.contains("is-open")) videoFrame.innerHTML = "";
    }, 240);
  };

  videoTiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
      const id = getVideoId(tile.getAttribute("href"));
      if (!id) return;
      event.preventDefault();
      openVideo(id);
    });
  });

  videoClose.addEventListener("click", closeVideo);
  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) closeVideo();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeVideo();
  });
}

if (reduceMotion) {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}
