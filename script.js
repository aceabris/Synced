/* ============================================
   CANDIDATE DATA
   Edit this array to swap in your real candidates.
   For each candidate, just replace the "photo" value
   with the filename of their picture (keep the images
   in an "images" folder next to index.html, or change
   the path to wherever you're keeping them).
   ============================================ */
const CANDIDATES = [
  { num: 1,  position: "President",              name: "JOHN ALBERT ABRIS",      photo: "images/01-john-albert-abris.png",
    platform: "Building one transparent, student-centered CCS organization where every voice contributes to every decision.",
    focus: ["Consolidating CCS organization processes into one transparent, student-run system.", "Publishing organizational updates and accomplishments to keep every CCS student informed."] },
  { num: 2,  position: "Vice President",          name: "NATHALIE DELADIA",       photo: "images/02-nathalie-deladia.png",
    platform: "Ensuring every project is organized, collaborative, and completed efficiently.",
    focus: ["Coordinating committees to keep projects on schedule and accountable.", "Monitoring the implementation of approved programs and organizational goals."] },
  { num: 3,  position: "Secretary",                name: "JENIFER BEA BAGANIA",          photo: "images/03-jenifaer-bagania.png",
    platform: "Making communication clear, organized, and accessible to every CCS student.",
    focus: ["Digitizing meeting minutes, resolutions, and official announcements in one central portal.", "Publishing timely documentation and organizational updates for transparency."] },
  { num: 4,  position: "Treasurer",                name: "LIXCEL GLEEN TURPIS",    photo: "images/04-lixcel-gleen-turpis.png",
    platform: "Managing organization funds with integrity, transparency, and accountability.",
    focus: ["Maintaining transparent and accountable financial management through clear and timely fund reports.", "Managing resources responsibly to maximize the impact of every organizational project."] },
  { num: 5,  position: "Auditor",                  name: "JHUNCEL NUEVO",          photo: "images/05-jhuncel-nuevo.png",
    platform: "Promoting accountability by ensuring every project and transaction is properly documented.",
    focus: ["Conducting regular audits of financial records and organizational activities.", "Publishing audit summaries and recommendations to strengthen transparency."] },
  { num: 6,  position: "Business Manager",         name: "LUCIOUS QUIMINALES",     photo: "images/06-lucious-quiminales.png",
    platform: "Creating sustainable partnerships and responsible fundraising for the organization.",
    focus: ["Developing sponsorships and fundraising initiatives that benefit CCS students.", "Tracking project budgets and resource utilization to maximize every contribution."] },
  { num: 7,  position: "Muse",                     name: "CLAIRE ANTHONYT GALACAN",          photo: "images/07-claire-galacan.png",
    platform: "Promoting school spirit, creativity, and student engagement beyond competitions.",
    focus: ["Leading initiatives that celebrate CCS talent, diversity, and creativity.", "Representing the organization with professionalism and inclusivity at school events."] },
  { num: 8,  position: "Escort",                   name: "JOHN MARK BOLANOS",      photo: "images/08-john-mark-bolanos.png",
    platform: "Representing CCS with confidence, leadership, and professionalism.",
    focus: ["Promoting student involvement in organizational activities and campus events.", "Serving as a welcoming ambassador for CCS programs and official functions."] },
  { num: 9,  position: "1st Year Rep",  name: "ANGEL TABULAO",           photo: "images/09-angel-tabulao.png",
    platform: "Helping first-year students transition confidently into the CCS community.",
    focus: ["Establishing a support and feedback channel dedicated to freshmen.", "Organizing orientation and peer-mentoring activities for new students."] },
  { num: 10, position: "2nd Year Rep",  name: "JYCEL LAROZA",           photo: "images/10-jycel-laroza.png",
    platform: "Strengthening collaboration and engagement among sophomore students.",
    focus: ["Gathering and presenting student concerns through regular consultations.", "Organizing academic and social activities that encourage participation."] },
  { num: 11, position: "3rd Year Rep",  name: "JOHN MICHAEL LAGRAMADA", photo: "images/11-john-michael-lagramada.png",
    platform: "Preparing students for leadership, internships, and future career opportunities.",
    focus: ["Coordinating career preparation activities, seminars, and industry engagements.", "Advocating for programs that support internships, portfolios, and professional development."] },
];

/* ============================================
   PLATFORMS DATA
   Each platform is its own full-screen section.
   Set `placeholder: true` on an item to show an
   "add photo" placeholder box next to it, or set
   `image: "images/yourfile.png"` to show a real
   logo/photo instead.
   ============================================ */
const PLATFORMS = [
  {
    num: 1,
    title: "Digital Innovation",
    items: [
      { text: "ITSO SIS Development and Implementation", image: "images/itso-id-front.png", imageBack: "images/itso-id-back.png" },
      { text: "Digital Student Services" },
      { text: "Online Elections" },
      { text: "GCash Payment Integration" },
    ],
  },
  {
    num: 2,
    title: "Academic Excellence",
    items: [
      { text: "Collaborated Tech Talks with Dev8", image: "images/dev8.png", imageBack: "images/dev8-back.png" }, 
      { text: "Programming Tutorials" },
      { text: "Learning Resources" },
      
      { text: "Tutoring" },
      
    ],
  },
  {
    num: 3,
    title: "Student Welfare",
    items: [
      { text: "Student Suggestions and Feedback Box" },
      { text: "Officers Evaluation" },
    ],
  },
];

/* ============================================
   PROJECTS DATA
   ============================================ */
const PROJECTS = [
  { num: 1, name: "Student's Lounge" },
  { num: 2, name: "CCS Webpage" },
  { num: 3, name: "Coffee Vendo" },
  { num: 4, name: "Waste Management" },
  { num: 5, name: "Cleaning Materials Storage" },
];

/* ============================================
   HELPERS
   ============================================ */
function initials(name){
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

/* If a photo file is missing or hasn't been added yet, this
   quietly swaps the broken image for the candidate's initials
   instead of showing a broken-image icon. */
function imgFallback(img, text){
  img.remove();
  img.parentElement.textContent = text;
}

function photoTag(c){
  return `<img src="${c.photo}" alt="${c.name}" onerror="imgFallback(this, '${initials(c.name)}')">`;
}

/* ============================================
   RENDER CANDIDATES
   ============================================ */
function renderCandidates(){
  const container = document.getElementById("candidatesContainer");
  const html = CANDIDATES.map((c) => `
    <section class="candidate-view" id="candidate-${c.num}" data-num="${c.num}" aria-label="${c.name}, ${c.position}">
      <div class="candidate-view__inner">
        <div class="candidate-view__photo">${photoTag(c)}</div>
        <div class="candidate-view__info">
          <p class="candidate-view__position">${c.position}</p>
          <h2>${c.name}</h2>
          <p class="candidate-view__platform">${c.platform}</p>
          <ul class="candidate-view__focus">
            ${c.focus.map(f => `<li>${f}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `).join("");
  container.innerHTML = html;
}

/* ============================================
   RENDER PLATFORMS
   One full-screen section per platform, mirroring
   the candidate treatment. Items flagged with
   `placeholder: true` get an "add photo" box; items
   with an `image` path get that logo/photo instead.
   ============================================ */
function renderPlatforms(){
  const container = document.getElementById("platformsContainer");
  if (!container) return;
  const html = PLATFORMS.map((p) => `
    <section class="platform-view" id="platform-${p.num}" data-num="${p.num}" aria-label="${p.title}">
      <div class="platform-view__inner">
        <span class="platform-view__index" aria-hidden="true">${String(p.num).padStart(2, "")}</span>
        <div class="platform-view__info">
          <span class="platform-view__badge">PLATFORM ${String(p.num).padStart(2, "")} / ${PLATFORMS.length}</span>
          <h2>${p.title}</h2>
          <ul class="platform-view__list">
            ${p.items.map(it => `
              <li class="platform-view__item">
                <span class="platform-view__item-text">${it.text}</span>
                ${it.placeholder ? `
                <span class="platform-view__item-photo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <circle cx="8.5" cy="10.5" r="1.5"></circle>
                    <path d="M21 16l-5-5-4 4-3-3-5 5"></path>
                  </svg>
                  <span>Photo placeholder</span>
                </span>` : ``}
                ${it.image ? `
                <button type="button" class="platform-view__item-photo platform-view__item-photo--img" data-photo="${it.image}" data-photo-back="${it.imageBack || ""}" data-photo-alt="${it.text}" aria-label="View photo: ${it.text}">
                  <img src="${it.image}" alt="${it.text}">
                  <span class="platform-view__item-photo-hint">Tap to view</span>
                </button>` : ``}
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </section>
  `).join("");
  container.innerHTML = html;
}

/* ============================================
   RENDER PROJECTS
   One full-screen section per project.
   ============================================ */
function renderProjects(){
  const container = document.getElementById("projectsContainer");
  if (!container) return;
  const html = PROJECTS.map((p) => `
    <section class="project-view" id="project-${p.num}" data-num="${p.num}" aria-label="${p.name}">
      <div class="project-view__inner">
        <span class="project-view__index" aria-hidden="true">${String(p.num).padStart(2, "")}</span>
        <h2 class="project-view__name">${p.name}</h2>
        <span class="project-view__tag">Project ${String(p.num).padStart(2, "")} / ${PROJECTS.length}</span>
      </div>
    </section>
  `).join("");
  container.innerHTML = html;
}

/* ============================================
   SITE NAV
   Circular button, fixed top-left on every screen
   size. Tap opens 3 categories (Candidates /
   Platforms / Projects); tap a category to drill
   into its jump-to list; tap an item to scroll +
   close. Tap the circle again (or Back) to collapse.
   ============================================ */
function renderSiteNavLists(){
  const candidatesList = document.getElementById("siteNavCandidates");
  const platformsList = document.getElementById("siteNavPlatforms");
  const projectsList = document.getElementById("siteNavProjects");

  if (candidatesList){
    candidatesList.innerHTML = CANDIDATES.map(c => `
      <a href="#candidate-${c.num}" class="site-nav__link" data-category="candidates" data-num="${c.num}" aria-label="Jump to ${c.name}, ${c.position}">${c.position}</a>
    `).join("");
  }
  if (platformsList){
    platformsList.innerHTML = PLATFORMS.map(p => `
      <a href="#platform-${p.num}" class="site-nav__link" data-category="platforms" data-num="${p.num}">${p.title}</a>
    `).join("");
  }
  if (projectsList){
    projectsList.innerHTML = PROJECTS.map(p => `
      <a href="#project-${p.num}" class="site-nav__link" data-category="projects" data-num="${p.num}">${p.name}</a>
    `).join("");
  }
}

/* Circle nav: tap the FAB to open the 3 categories,
   tap a category to drill into its jump-to list,
   tap Back (or the FAB again) to collapse back out,
   tap a link to scroll + close entirely. */
function initSiteNav(){
  const nav = document.getElementById("siteNav");
  const fab = document.getElementById("siteNavFab");
  const panel = document.getElementById("siteNavPanel");
  const categoriesEl = document.getElementById("siteNavCategories");
  const backBtn = document.getElementById("siteNavBack");
  const itemsEl = document.getElementById("siteNavItems");
  if (!nav || !fab || !panel || !categoriesEl || !backBtn || !itemsEl) return;

  const closeAll = () => {
    nav.classList.remove("open", "level-items");
    nav.removeAttribute("data-active");
    fab.setAttribute("aria-expanded", "false");
  };

  const showCategories = () => {
    nav.classList.remove("level-items");
    nav.removeAttribute("data-active");
  };

  const showItems = (category) => {
    nav.classList.add("level-items");
    nav.setAttribute("data-active", category);
  };

  fab.addEventListener("click", () => {
    if (nav.classList.contains("open")){
      closeAll();
    } else {
      nav.classList.add("open");
      fab.setAttribute("aria-expanded", "true");
      showCategories();
    }
  });

  categoriesEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".site-nav__category");
    if (!btn) return;
    showItems(btn.dataset.category);
  });

  backBtn.addEventListener("click", showCategories);

  itemsEl.addEventListener("click", (e) => {
    if (e.target.closest(".site-nav__link")) closeAll();
  });

  document.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && !nav.contains(e.target)) closeAll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) closeAll();
  });
}

function initSiteNavHighlight(){
  const links = document.querySelectorAll(".site-nav__link");
  const sections = Array.from(document.querySelectorAll(".candidate-view, .platform-view, .project-view"));
  if (!links.length || !sections.length) return;

  const categoryFor = (section) => {
    if (section.classList.contains("candidate-view")) return "candidates";
    if (section.classList.contains("platform-view")) return "platforms";
    return "projects";
  };

  const setActive = (category, num) => {
    links.forEach(l => {
      l.classList.toggle("active", l.dataset.category === category && l.dataset.num === num);
    });
  };

  // Cache each section's true document-relative top (offsetTop is
  // relative to the nearest positioned ancestor, which differs between
  // .ticket / .platforms / .projects, so it can't be compared directly —
  // getBoundingClientRect + scrollY gives the real position instead).
  let offsets = [];
  function measure(){
    offsets = sections.map(s => s.getBoundingClientRect().top + window.scrollY);
  }

  let ticking = false;
  function updateActive(){
    ticking = false;
    const marker = window.scrollY + window.innerHeight * 0.4;
    let idx = 0;
    for (let i = 0; i < offsets.length; i++){
      if (offsets[i] <= marker) idx = i; else break;
    }
    const current = sections[idx];
    setActive(categoryFor(current), current.dataset.num);
  }

  function onScroll(){
    if (!ticking){
      ticking = true;
      requestAnimationFrame(updateActive);
    }
  }

  function onResize(){
    measure();
    updateActive();
  }

  measure();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  updateActive();
}

/* ============================================
   INTRO / SPLASH SCREEN
   Locks scroll behind the folder screen, then fades
   it out on click/Enter and kicks off the hero's
   ballot check-mark animation right as it clears.
   ============================================ */
function initIntro(){
  const introScreen = document.getElementById("introScreen");
  const folderWrap = document.getElementById("folderWrap");
  document.body.style.overflow = "hidden";

  // iOS Safari won't apply :active styles at all unless a touch
  // listener exists somewhere on the page — this is that listener.
  document.body.addEventListener("touchstart", () => {}, { passive: true });

  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  let entering = false;

  function closeIntro(){
    introScreen.classList.add("closing");
    initHeroBallot();
    introScreen.addEventListener("transitionend", () => {
      introScreen.style.display = "none";
    }, { once: true });
  }

  function enterSite(){
    if (entering) return;
    entering = true;
    document.body.style.overflow = "";

    if (isTouch){
      // Hold the glow/sheet animation visible for a beat before
      // the fade-out starts, since there's no hover preview on touch.
      folderWrap.classList.add("is-tapped");
      setTimeout(closeIntro, 400);
    } else {
      closeIntro();
    }
  }

  folderWrap.addEventListener("click", enterSite);
  folderWrap.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    enterSite();
  });
}

/* ============================================
   CANDIDATE DETAIL MODAL
   Details panel slides in from the left,
   photo panel slides in from the right.
   ============================================ */
let lastFocusedCard = null;

function buildModalContent(c){
  const detailsHTML = `
    <p class="modal__num">Seat ${String(c.num).padStart(2, "")} / 11</p>
    <p class="modal__platform">${c.platform}</p>
    <ul class="modal__focus">
      ${c.focus.map(f => `<li>${f}</li>`).join("")}
    </ul>
  `;
  const photoHTML = `
    <div class="modal__avatar">${photoTag(c)}</div>
    <p class="modal__photo-name">${c.name}</p>
    <p class="modal__photo-tag"> for ${c.position}</p>
  `;
  document.getElementById("modalDetails").innerHTML = detailsHTML;
  document.getElementById("modalPhoto").innerHTML = photoHTML;
}

function openModal(num){
  const candidate = CANDIDATES.find(c => c.num === Number(num));
  if (!candidate) return;
  buildModalContent(candidate);
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal(){
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocusedCard) lastFocusedCard.focus();
}

function initModal(){
  const container = document.getElementById("candidatesContainer");
  const overlay = document.getElementById("modalOverlay");

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    lastFocusedCard = card;
    openModal(card.dataset.num);
  });

  container.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (!card) return;
    e.preventDefault();
    lastFocusedCard = card;
    openModal(card.dataset.num);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });
}

/* ============================================
   PLATFORM PHOTO MODAL
   Click a platform image to open it full size in
   a modal. If the item has a back image, a rotate
   button flips the card to reveal it.
   ============================================ */
function initPlatformPhotoModal(){
  const overlay = document.getElementById("photoModalOverlay");
  const card = document.getElementById("photoModalCard");
  const frontImg = document.getElementById("photoModalFrontImg");
  const backImg = document.getElementById("photoModalBackImg");
  const flipBtn = document.getElementById("photoModalFlip");
  const closeBtn = document.getElementById("photoModalClose");
  const container = document.getElementById("platformsContainer");
  if (!overlay || !card || !container) return;

  let lastFocused = null;

  function openPhotoModal(btn){
    const front = btn.dataset.photo;
    const back = btn.dataset.photoBack;
    const alt = btn.dataset.photoAlt || "";

    frontImg.src = front;
    frontImg.alt = alt;
    card.classList.remove("is-flipped");

    if (back){
      backImg.src = back;
      backImg.alt = alt + " (back)";
      flipBtn.hidden = false;
    } else {
      backImg.removeAttribute("src");
      flipBtn.hidden = true;
    }

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closePhotoModal(){
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    card.classList.remove("is-flipped");
    if (lastFocused) lastFocused.focus();
  }

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".platform-view__item-photo--img");
    if (!btn) return;
    lastFocused = btn;
    openPhotoModal(btn);
  });

  container.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const btn = e.target.closest(".platform-view__item-photo--img");
    if (!btn) return;
    e.preventDefault();
    lastFocused = btn;
    openPhotoModal(btn);
  });

  flipBtn.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });

  closeBtn.addEventListener("click", closePhotoModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePhotoModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closePhotoModal();
  });
}

/* ============================================
   3D TILT ON HOVER
   Mirrors a mouse-tracked tilt effect: each card's
   inner panel leans toward the cursor and springs
   back flat on mouse leave. Skipped on touch devices.
   ============================================ */
function initTilt(){
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const container = document.getElementById("candidatesContainer");

  container.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const tilt = card.querySelector(".card__tilt");
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transition = "transform 0.1s ease-out";
    tilt.style.transform = `rotateX(${(-py * 22).toFixed(2)}deg) rotateY(${(px * 22).toFixed(2)}deg)`;
  });

  container.addEventListener("mouseleave", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const tilt = card.querySelector(".card__tilt");
    tilt.style.transition = "transform 0.5s cubic-bezier(.16,1,.3,1)";
    tilt.style.transform = "rotateX(0deg) rotateY(0deg)";
  }, true);
}

/* ============================================
   SCROLL REVEAL (cards + pillars)
   ============================================ */
function initScrollReveal(){
  const targets = document.querySelectorAll(".candidate-view, .pillar, .platform-view, .project-view");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(t => observer.observe(t));
}

/* ============================================
   HERO BALLOT FILL-IN (on load)
   ============================================ */
function initHeroBallot(){
  const fill = document.getElementById("heroFill");
  const check = document.getElementById("heroCheck");
  requestAnimationFrame(() => {
    fill.classList.add("filled");
    check.classList.add("filled");
  });
}

/* ============================================
   SCROLL PROGRESS RAIL
   ============================================ */
function initProgressRail(){
  const bar = document.getElementById("progressFill");
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  initIntro();
  renderCandidates();
  renderPlatforms();
  renderProjects();
  renderSiteNavLists();
  initSiteNav();
  initSiteNavHighlight();
  initModal();
  initPlatformPhotoModal();
  initTilt();
  initScrollReveal();
  initProgressRail();
});