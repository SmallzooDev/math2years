const links = new Map();
document.querySelectorAll(".side-toc a[href^='#']").forEach((a) => links.set(decodeURIComponent(a.hash.slice(1)), a));
const headings = [...document.querySelectorAll("article h2[id], article h3[id]")].filter((h) => links.has(h.id));
let current;

const mark = () => {
  let active = headings[0];
  for (const heading of headings) {
    if (heading.getBoundingClientRect().top > 96) break;
    active = heading;
  }
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) active = headings[headings.length - 1];
  if (active === current) return;
  if (current) links.get(current.id).classList.remove("here");
  current = active;
  const link = links.get(current.id);
  link.classList.add("here");
  link.scrollIntoView({ block: "nearest" });
};

if (headings.length) {
  addEventListener("scroll", mark, { passive: true });
  mark();
}
