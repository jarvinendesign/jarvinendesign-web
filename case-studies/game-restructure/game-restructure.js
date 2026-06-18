const progress = document.querySelector(".progress");
const sections = [...document.querySelectorAll("section[id]")];
const links = [...document.querySelectorAll(".chapter-nav a")];

const updatePageState = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;

  let active = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.45) {
      active = section.id;
    }
  }

  links.forEach((link) => {
    link.classList.toggle("active", link.hash === `#${active}`);
  });
};

window.addEventListener("scroll", updatePageState, { passive: true });
window.addEventListener("resize", updatePageState);
updatePageState();
