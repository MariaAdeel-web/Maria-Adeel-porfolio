/* =========================================================
   MARIA ADEEL PORTFOLIO
   Main stylesheet
========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

:root {

    --bg: #090a12;
    --bg-soft: #0f1020;
    --card: rgba(255,255,255,0.055);
    --card-hover: rgba(255,255,255,0.09);

    --white: #ffffff;
    --text: #f4f2ff;
    --muted: #aaa8bd;

    --purple: #8b5cf6;
    --violet: #a855f7;
    --pink: #ec4899;
    --cyan: #22d3ee;
    --blue: #60a5fa;
    --yellow: #facc15;
    --green: #4ade80;

    --border: rgba(255,255,255,0.10);

    --font-heading: "Space Grotesk", sans-serif;
    --font-body: "DM Sans", sans-serif;

    --container: 1180px;

    --radius: 24px;

    --shadow:
        0 25px 80px rgba(0,0,0,0.35);

}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {

    background:
        radial-gradient(circle at 10% 10%, rgba(139,92,246,0.08), transparent 30%),
        radial-gradient(circle at 90% 40%, rgba(34,211,238,0.05), transparent 25%),
        var(--bg);

    color: var(--text);

    font-family: var(--font-body);

    line-height: 1.6;

    overflow-x: hidden;
}

body.menu-open {
    overflow: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font: inherit;
}

img {
    max-width: 100%;
    display: block;
}


/* =========================================================
   SCROLLBAR
========================================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(
        var(--purple),
        var(--pink)
    );

    border-radius: 20px;
}


/* =========================================================
   SELECTION
========================================================= */

::selection {
    background: rgba(168,85,247,0.35);
    color: white;
}


/* =========================================================
   CONTAINERS
========================================================= */

.section-container,
.nav-container,
.hero-container,
.footer-container {

    width: min(
        calc(100% - 48px),
        var(--container)
    );

    margin: auto;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    padding: 18px 0;

    transition:
        background .3s ease,
        padding .3s ease,
        box-shadow .3s ease;
}

.navbar.scrolled {

    background: rgba(9,10,18,0.82);

    backdrop-filter: blur(20px);

    padding: 12px 0;

    border-bottom: 1px solid var(--border);

    box-shadow:
        0 10px 40px rgba(0,0,0,.18);
}

.nav-container {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;
}


/* LOGO */

.logo {

    display: flex;

    align-items: center;

    gap: 9px;

    font-family: var(--font-heading);

    font-weight: 700;

    font-size: 20px;
}

.logo-mark {

    width: 38px;
    height: 38px;

    display: grid;
    place-items: center;

    border-radius: 11px;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--pink)
        );

    color: white;

    box-shadow:
        0 8px 25px rgba(139,92,246,.25);
}

.logo-dot {
    color: var(--pink);
}


/* NAV MENU */

.nav-menu {

    display: flex;

    align-items: center;

    gap: 28px;
}

.nav-link {

    color: var(--muted);

    font-size: 14px;

    font-weight: 600;

    transition: .25s ease;

    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: white;
}

.nav-link::after {

    content: "";

    position: absolute;

    bottom: -7px;
    left: 50%;

    width: 0;
    height: 2px;

    transform: translateX(-50%);

    background:
        linear-gradient(
            90deg,
            var(--purple),
            var(--pink)
        );

    border-radius: 5px;

    transition: width .25s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 18px;
}


/* CTA */

.nav-cta {

    display: flex;

    align-items: center;

    gap: 9px;

    padding: 11px 17px;

    border: 1px solid var(--border);

    border-radius: 100px;

    font-size: 13px;

    font-weight: 600;

    background: rgba(255,255,255,.04);

    transition: .3s ease;
}

.nav-cta:hover {

    border-color: rgba(168,85,247,.5);

    background: rgba(168,85,247,.12);

    transform: translateY(-2px);
}


/* MOBILE MENU */

.menu-toggle {

    display: none;

    width: 42px;
    height: 42px;

    border: 1px solid var(--border);

    background: var(--card);

    color: white;

    border-radius: 12px;

    cursor: pointer;
}


/* =========================================================
   HERO
========================================================= */

.hero {

    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    padding:
        140px 0
        90px;

    overflow: hidden;
}

.hero-container {

    display: grid;

    grid-template-columns:
        1.02fr
        .98fr;

    gap: 70px;

    align-items: center;

    position: relative;

    z-index: 2;
}


/* HERO BACKGROUND */

.hero-bg {
    position: absolute;
    inset: 0;

    overflow: hidden;

    pointer-events: none;
}

.gradient-orb {

    position: absolute;

    border-radius: 50%;

    filter: blur(5px);

    opacity: .55;
}

.orb-one {

    width: 500px;
    height: 500px;

    left: -180px;
    top: 5%;

    background:
        radial-gradient(
            circle,
            rgba(139,92,246,.20),
            transparent 68%
        );
}

.orb-two {

    width: 500px;
    height: 500px;

    right: -150px;
    top: 20%;

    background:
        radial-gradient(
            circle,
            rgba(236,72,153,.13),
            transparent 68%
        );
}

.orb-three {

    width: 400px;
    height: 400px;

    right: 30%;
    bottom: -200px;

    background:
        radial-gradient(
            circle,
            rgba(34,211,238,.09),
            transparent 68%
        );
}


/* GRID */

.hero::before {

    content: "";

    position: absolute;

    inset: 0;

    opacity: .25;

    background-image:
        linear-gradient(
            rgba(255,255,255,.035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,.035) 1px,
            transparent 1px
        );

    background-size: 70px 70px;

    mask-image:
        radial-gradient(
            ellipse at center,
            black,
            transparent 75%
        );
}


/* FLOATING SHAPES */

.floating-shape {

    position: absolute;

    border: 1px solid rgba(255,255,255,.06);

    border-radius: 50%;

    animation: float 8s ease-in-out infinite;
}

.shape-one {

    width: 90px;
    height: 90px;

    left: 8%;
    top: 25%;
}

.shape-two {

    width: 45px;
    height: 45px;

    right: 17%;
    top: 17%;

    animation-delay: -2s;
}

.shape-three {

    width: 65px;
    height: 65px;

    right: 5%;
    bottom: 16%;

    animation-delay: -4s;
}


/* HERO CONTENT */

.availability {

    display: inline-flex;

    align-items: center;

    gap: 9px;

    padding: 8px 13px;

    border: 1px solid rgba(74,222,128,.18);

    background: rgba(74,222,128,.06);

    border-radius: 100px;

    font-size: 12px;

    font-weight: 600;

    color: #b9fbcf;

    margin-bottom: 24px;
}

.pulse-dot {

    width: 7px;
    height: 7px;

    background: var(--green);

    border-radius: 50%;

    box-shadow:
        0 0 0 5px rgba(74,222,128,.08);

    animation: pulse 2s infinite;
}

.eyebrow {

    color: #a9a4bd;

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 3px;

    margin-bottom: 15px;
}

.hero h1 {

    font-family: var(--font-heading);

    font-size: clamp(
        44px,
        5vw,
        72px
    );

    line-height: 1.04;

    letter-spacing: -3px;

    max-width: 760px;

    margin-bottom: 24px;
}

.gradient-text {

    background:
        linear-gradient(
            100deg,
            #c084fc,
            #f472b6,
            #67e8f9
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.highlight-word {

    position: relative;

    display: inline-block;

    color: #fff;
}

.highlight-word::after {

    content: "";

    position: absolute;

    height: 9px;

    left: 2px;
    right: 4px;

    bottom: -2px;

    background:
        linear-gradient(
            90deg,
            var(--purple),
            var(--pink)
        );

    opacity: .4;

    border-radius: 100%;

    transform: rotate(-1deg);
}

.hero-description {

    color: var(--muted);

    max-width: 590px;

    font-size: 17px;

    line-height: 1.8;

    margin-bottom: 32px;
}


/* HERO BUTTONS */

.hero-buttons {

    display: flex;

    flex-wrap: wrap;

    gap: 13px;

    margin-bottom: 45px;
}

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    padding: 14px 20px;

    border-radius: 13px;

    font-weight: 700;

    font-size: 13px;

    transition:
        transform .3s ease,
        box-shadow .3s ease,
        background .3s ease;
}

.btn-primary {

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--pink)
        );

    box-shadow:
        0 12px 35px rgba(139,92,246,.23);
}

.btn-primary:hover {

    transform: translateY(-3px);

    box-shadow:
        0 18px 40px rgba(139,92,246,.35);
}

.btn-secondary {

    border: 1px solid var(--border);

    background: rgba(255,255,255,.035);

    color: white;
}

.btn-secondary:hover {

    transform: translateY(-3px);

    background: rgba(255,255,255,.08);
}


/* HERO STATS */

.hero-stats {

    display: flex;

    align-items: center;

    gap: 0;
}

.stat {

    padding-right: 25px;
    margin-right: 25px;

    border-right: 1px solid var(--border);

    display: flex;

    flex-direction: column;
}

.stat:last-child {

    border: none;

    margin: 0;
    padding: 0;
}

.stat strong {

    font-family: var(--font-heading);

    font-size: 22px;

    color: white;
}

.stat span {

    font-size: 11px;

    color: var(--muted);

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* =========================================================
   HERO CODE WINDOW
========================================================= */

.hero-visual {

    position: relative;

    min-height: 560px;

    display: flex;

    align-items: center;

    justify-content: center;
}

.code-window {

    width: min(100%, 520px);

    border-radius: 22px;

    overflow: hidden;

    border: 1px solid rgba(255,255,255,.12);

    background:
        linear-gradient(
            145deg,
            rgba(25,24,42,.96),
            rgba(12,13,25,.96)
        );

    box-shadow:
        0 40px 100px rgba(0,0,0,.5),
        0 0 80px rgba(139,92,246,.08);

    transform:
        perspective(1000px)
        rotateY(-5deg)
        rotateX(2deg);

    animation: windowFloat 7s ease-in-out infinite;
}

.window-header {

    height: 52px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 17px;

    border-bottom: 1px solid rgba(255,255,255,.07);

    background: rgba(255,255,255,.025);
}

.window-dots {

    display: flex;

    gap: 6px;
}

.window-dots span {

    width: 9px;
    height: 9px;

    border-radius: 50%;

    background: rgba(255,255,255,.18);
}

.window-title {

    color: #858298;

    font-size: 11px;

    font-family: monospace;
}

.window-icon {

    color: #77738c;

    font-size: 12px;
}

.code-body {

    padding: 27px 24px 30px;

    font-family: "Courier New", monospace;

    font-size: 13px;

    line-height: 2.05;
}

.code-line {

    display: grid;

    grid-template-columns: 28px auto;

    gap: 13px;
}

.code-line.indent {

    padding-left: 25px;
}

.line-number {

    color: #45445a;

    user-select: none;
}

.pink {
    color: #f472b6;
}

.blue {
    color: #60a5fa;
}

.purple {
    color: #c084fc;
}

.green {
    color: #86efac;
}

.yellow {
    color: #fde68a;
}

.white {
    color: #d7d3e4;
}

.blank {
    height: 12px;
}

.terminal-bar {

    padding: 13px 20px;

    border-top: 1px solid rgba(255,255,255,.06);

    background: rgba(0,0,0,.18);

    color: #69667a;

    font-size: 10px;

    font-family: monospace;
}

.terminal-dot {

    display: inline-block;

    width: 6px;
    height: 6px;

    background: #4ade80;

    border-radius: 50%;

    margin-right: 7px;
}

.cursor {

    color: #a78bfa;

    animation: blink 1s infinite;
}


/* FLOATING CARDS */

.floating-card {

    position: absolute;

    display: flex;

    align-items: center;

    gap: 11px;

    padding: 13px 15px;

    border: 1px solid rgba(255,255,255,.1);

    border-radius: 15px;

    background: rgba(17,16,29,.82);

    backdrop-filter: blur(16px);

    box-shadow:
        0 20px 50px rgba(0,0,0,.3);

    animation: float 6s ease-in-out infinite;
}

.floating-card small {

    display: block;

    color: #817d93;

    font-size: 9px;

    text-transform: uppercase;

    letter-spacing: 1px;
}

.floating-card strong {

    display: block;

    color: white;

    font-size: 11px;

    margin-top: 2px;
}

.mini-icon {

    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 10px;

    background:
        linear-gradient(
            135deg,
            rgba(139,92,246,.25),
            rgba(236,72,153,.18)
        );

    color: #d8b4fe;

    font-size: 13px;
}

.card-project {

    top: 12%;

    right: -5%;

    animation-delay: -1s;
}

.card-learning {

    bottom: 11%;

    left: -7%;

    animation-delay: -3s;
}


/* SCROLL */

.scroll-indicator {

    position: absolute;

    left: 50%;
    bottom: 28px;

    transform: translateX(-50%);

    display: flex;

    align-items: center;

    gap: 10px;

    color: #676477;

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 1.5px;

    z-index: 3;
}

.scroll-indicator i {

    animation: bounce 1.5s infinite;
}


/* =========================================================
   SECTIONS
========================================================= */

.section {

    padding: 125px 0;
}

.section-heading {

    margin-bottom: 65px;
}

.section-heading.centered {

    text-align: center;

    max-width: 750px;

    margin-left: auto;
    margin-right: auto;
}

.section-number {

    display: inline-block;

    color: #827c9b;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2.5px;

    margin-bottom: 15px;
}

.section-heading h2 {

    font-family: var(--font-heading);

    font-size: clamp(
        35px,
        4vw,
        54px
    );

    line-height: 1.08;

    letter-spacing: -2px;
}

.section-heading h2 span {

    display: block;

    background:
        linear-gradient(
            90deg,
            #c084fc,
            #f472b6
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.section-heading p {

    color: var(--muted);

    max-width: 620px;

    margin: 18px auto 0;

    line-height: 1.8;
}


/* =========================================================
   ABOUT
========================================================= */

.about-section {

    background:
        linear-gradient(
            180deg,
            transparent,
            rgba(139,92,246,.025),
            transparent
        );
}

.about-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 90px;

    align-items: center;
}

.about-text .large-text {

    font-family: var(--font-heading);

    font-size: 25px;

    line-height: 1.4;

    color: white;

    margin-bottom: 24px;
}

.about-text p:not(.large-text) {

    color: var(--muted);

    margin-bottom: 17px;

    max-width: 570px;
}

.about-text strong {
    color: white;
}

.about-signature {

    margin-top: 35px;

    display: flex;

    flex-direction: column;
}

.about-signature span {

    font-family: "Brush Script MT", cursive;

    font-size: 35px;

    color: #d8b4fe;

    transform: rotate(-4deg);

    width: max-content;
}

.about-signature small {

    color: #676477;

    font-size: 10px;

    letter-spacing: 1px;

    margin-top: -2px;
}


/* JOURNEY CARD */

.journey-card {

    padding: 28px;

    border: 1px solid var(--border);

    border-radius: 25px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.065),
            rgba(255,255,255,.025)
        );

    box-shadow: var(--shadow);

    position: relative;

    overflow: hidden;
}

.journey-card::before {

    content: "";

    position: absolute;

    width: 180px;
    height: 180px;

    top: -100px;
    right: -60px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(168,85,247,.18),
            transparent 70%
        );
}

.journey-card-top {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding-bottom: 22px;

    border-bottom: 1px solid var(--border);

    color: #89849e;

    font-size: 10px;

    letter-spacing: 2px;

    font-weight: 700;
}

.journey-card-top i {

    color: #c084fc;

    font-size: 16px;
}

.journey-path {

    padding-top: 25px;
}

.path-item {

    display: flex;

    align-items: center;

    gap: 16px;
}

.path-icon {

    flex: 0 0 48px;

    width: 48px;
    height: 48px;

    display: grid;

    place-items: center;

    border-radius: 15px;

    font-size: 18px;

    border: 1px solid rgba(255,255,255,.08);
}

.path-icon.chemistry {
    color: #c084fc;
    background: rgba(168,85,247,.08);
}

.path-icon.teaching {
    color: #f9a8d4;
    background: rgba(236,72,153,.08);
}

.path-icon.code {
    color: #67e8f9;
    background: rgba(34,211,238,.08);
}

.path-icon.ai {
    color: #fde68a;
    background: rgba(250,204,21,.08);
}

.path-item strong {

    display: block;

    font-family: var(--font-heading);

    font-size: 15px;
}

.path-item span {

    display: block;

    color: #777388;

    font-size: 11px;

    margin-top: 2px;
}

.path-line {

    height: 27px;

    width: 1px;

    background:
        linear-gradient(
            var(--purple),
            transparent
        );

    margin-left: 24px;
}


/* =========================================================
   TIMELINE
========================================================= */

.journey-section {

    background:
        linear-gradient(
            180deg,
            rgba(255,255,255,.015),
            transparent
        );
}

.timeline {

    position: relative;

    max-width: 820px;

    margin: auto;
}

.timeline::before {

    content: "";

    position: absolute;

    left: 28px;

    top: 0;
    bottom: 0;

    width: 1px;

    background:
        linear-gradient(
            var(--purple),
            rgba(168,85,247,.05)
        );
}

.timeline-item {

    position: relative;

    padding-left: 80px;

    margin-bottom: 40px;
}

.timeline-marker {

    position: absolute;

    left: 0;
    top: 2px;

    width: 57px;
    height: 57px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    border: 1px solid rgba(168,85,247,.25);

    background: var(--bg);

    z-index: 2;
}

.timeline-marker span {

    font-size: 11px;

    font-weight: 700;

    color: #a78bfa;
}

.timeline-content {

    display: flex;

    gap: 20px;

    padding: 25px;

    border: 1px solid var(--border);

    background: rgba(255,255,255,.035);

    border-radius: 20px;

    transition: .3s ease;
}

.timeline-content:hover {

    transform: translateX(6px);

    background: rgba(255,255,255,.055);

    border-color: rgba(168,85,247,.22);
}

.timeline-icon {

    flex: 0 0 45px;

    width: 45px;
    height: 45px;

    display: grid;
    place-items: center;

    border-radius: 13px;

    background: rgba(248,113,113,.08);

    color: #fb7185;

    font-size: 20px;
}

.css-icon {
    color: #60a5fa;
    background: rgba(96,165,250,.08);
}

.js-icon {
    color: #fde047;
    background: rgba(250,204,21,.08);
}

.github-icon {
    color: #f1f5f9;
    background: rgba(255,255,255,.07);
}

.ai-icon {
    color: #c084fc;
    background: rgba(168,85,247,.08);
}

.timeline-label {

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 700;

    color: #7d788f;
}

.timeline-content h3 {

    font-family: var(--font-heading);

    font-size: 22px;

    margin: 4px 0 6px;
}

.timeline-content p {

    color: var(--muted);

    font-size: 13px;

    line-height: 1.7;
}

.skill-tags {

    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-top: 15px;
}

.skill-tags span {

    padding: 5px 9px;

    border: 1px solid rgba(255,255,255,.07);

    border-radius: 100px;

    color: #8f8a9f;

    font-size: 9px;
}


/* =========================================================
   FEATURED PROJECT
========================================================= */

.featured-project {

    display: grid;

    grid-template-columns:
        1.1fr
        .9fr;

    gap: 70px;

    align-items: center;

    padding: 45px;

    border: 1px solid rgba(168,85,247,.14);

    border-radius: 30px;

    background:
        radial-gradient(
            circle at 20% 20%,
            rgba(139,92,246,.10),
            transparent 35%
        ),
        rgba(255,255,255,.025);

    overflow: hidden;

    position: relative;
}

.featured-project::after {

    content: "";

    position: absolute;

    width: 300px;
    height: 300px;

    right: -160px;
    bottom: -180px;

    border-radius: 50%;

    border: 1px solid rgba(236,72,153,.15);
}


/* PROJECT WINDOW */

.project-window {

    border-radius: 18px;

    overflow: hidden;

    border: 1px solid rgba(255,255,255,.10);

    background: #0b0b14;

    box-shadow:
        0 30px 70px rgba(0,0,0,.35);

    transform:
        perspective(1000px)
        rotateY(4deg);

    transition: transform .5s ease;
}

.featured-project:hover .project-window {

    transform:
        perspective(1000px)
        rotateY(0)
        translateY(-5px);
}

.project-window-header {

    height: 42px;

    display: flex;

    align-items: center;

    gap: 15px;

    padding: 0 14px;

    border-bottom: 1px solid rgba(255,255,255,.07);

    color: #777388;

    font-size: 10px;
}

.project-window-header .window-dots span {

    width: 7px;
    height: 7px;
}

.focus-screen {

    min-height: 365px;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 30px;

    position: relative;

    background:
        radial-gradient(
            circle at 50% 40%,
            rgba(139,92,246,.18),
            transparent 48%
        ),
        #0d0d19;
}

.focus-glow {

    position: absolute;

    width: 240px;
    height: 240px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(236,72,153,.12),
            transparent 65%
        );

    filter: blur(20px);
}

.focus-content {

    position: relative;

    z-index: 1;

    text-align: center;

    max-width: 320px;
}

.focus-logo {

    width: 53px;
    height: 53px;

    display: grid;
    place-items: center;

    margin: 0 auto 14px;

    border-radius: 16px;

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--pink)
        );

    box-shadow:
        0 10px 35px rgba(139,92,246,.3);
}

.focus-content > span {

    font-size: 8px;

    color: #8f88a3;

    letter-spacing: 2px;

    font-weight: 700;
}

.focus-content h3 {

    font-family: var(--font-heading);

    font-size: 27px;

    margin: 4px 0 8px;
}

.focus-content > p {

    color: #89859b;

    font-size: 11px;

    line-height: 1.6;

    margin-bottom: 23px;
}

.focus-progress {

    text-align: left;

    padding: 14px;

    border: 1px solid rgba(255,255,255,.08);

    border-radius: 13px;

    background: rgba(255,255,255,.025);
}

.progress-label {

    display: flex;

    justify-content: space-between;

    font-size: 9px;

    color: #777388;

    margin-bottom: 9px;
}

.progress-label strong {

    color: #c4b5fd;
}

.progress-bar {

    height: 5px;

    background: rgba(255,255,255,.08);

    border-radius: 20px;

    overflow: hidden;
}

.progress-bar span {

    display: block;

    height: 100%;

    width: 75%;

    background:
        linear-gradient(
            90deg,
            var(--purple),
            var(--pink)
        );

    border-radius: 20px;
}

.focus-mini-cards {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 7px;

    margin-top: 8px;
}

.focus-mini-cards div {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 5px;

    padding: 8px;

    border: 1px solid rgba(255,255,255,.05);

    border-radius: 9px;

    font-size: 8px;

    color: #777388;
}

.focus-mini-cards i {

    color: #a78bfa;
}


/* FEATURED INFO */

.project-number {

    color: #807b93;

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 700;

    margin-bottom: 13px;
}

.featured-info h3 {

    font-family: var(--font-heading);

    font-size: 44px;

    letter-spacing: -2px;

    margin-bottom: 18px;
}

.featured-info h3 span {
    color: #c084fc;
}

.project-intro {

    color: white !important;

    font-size: 16px !important;

    line-height: 1.7 !important;
}

.featured-info p {

    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;

    margin-bottom: 18px;
}

.project-tech {

    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin: 25px 0;
}

.project-tech span {

    display: inline-flex;

    align-items: center;

    gap: 6px;

    padding: 8px 11px;

    border: 1px solid var(--border);

    border-radius: 9px;

    color: #9c97aa;

    font-size: 9px;
}

.project-tech i {
    color: #c084fc;
}

.project-buttons {
    margin-top: 25px;
}


/* =========================================================
   PROJECT CARDS
========================================================= */

.projects-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}

.project-card {

    padding: 22px;

    border: 1px solid var(--border);

    border-radius: 23px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.05),
            rgba(255,255,255,.02)
        );

    transition:
        transform .35s ease,
        border-color .35s ease,
        background .35s ease;

    overflow: hidden;
}

.project-card:hover {

    transform: translateY(-8px);

    border-color: rgba(168,85,247,.25);

    background: var(--card-hover);
}

.project-card-top {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}

.project-category {

    color: #777287;

    font-size: 8px;

    letter-spacing: 2px;

    font-weight: 700;
}

.project-card-icon {

    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 10px;

    background: rgba(168,85,247,.08);

    color: #c084fc;

    font-size: 13px;
}

.project-art {

    height: 190px;

    border-radius: 17px;

    margin-bottom: 22px;

    display: flex;

    align-items: center;

    justify-content: center;

    overflow: hidden;

    background:
        linear-gradient(
            135deg,
            rgba(139,92,246,.08),
            rgba(236,72,153,.05)
        );

    border: 1px solid rgba(255,255,255,.05);
}


/* MINI BROWSER */

.mini-browser {

    width: 80%;

    border-radius: 10px;

    background: #11111c;

    border: 1px solid rgba(255,255,255,.1);

    box-shadow: 0 20px 35px rgba(0,0,0,.35);

    transform: rotate(-3deg);

    transition: transform .4s ease;
}

.project-card:hover .mini-browser {
    transform: rotate(0) scale(1.03);
}

.mini-browser-bar {

    height: 19px;

    display: flex;

    gap: 4px;

    align-items: center;

    padding-left: 7px;

    border-bottom: 1px solid rgba(255,255,255,.05);
}

.mini-browser-bar span {

    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: #555166;
}

.mini-browser-content {

    padding: 15px;
}

.mini-title {

    width: 55%;

    height: 7px;

    border-radius: 5px;

    background: #8b5cf6;

    margin-bottom: 8px;
}

.mini-text {

    width: 75%;

    height: 4px;

    border-radius: 5px;

    background: #353347;

    margin-bottom: 17px;
}

.mini-blocks {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 6px;
}

.mini-blocks span {

    height: 38px;

    border-radius: 5px;

    background:
        linear-gradient(
            135deg,
            rgba(139,92,246,.28),
            rgba(236,72,153,.12)
        );
}


/* CHECKBOX ART */

.checkbox-interface {

    width: 72%;

    padding: 18px;

    border-radius: 13px;

    background: rgba(10,10,20,.8);

    border: 1px solid rgba(255,255,255,.08);

    box-shadow: 0 15px 40px rgba(0,0,0,.3);
}

.checkbox-title {

    font-family: var(--font-heading);

    font-size: 12px;

    font-weight: 700;

    margin-bottom: 13px;
}

.checkbox-interface label {

    display: flex;

    align-items: center;

    gap: 9px;

    padding: 7px 0;

    color: #858094;

    font-size: 9px;
}

.checkbox-interface input {

    accent-color: #8b5cf6;
}


/* PORTFOLIO ART */

.portfolio-preview {

    width: 66%;

    padding: 20px;

    border-radius: 14px;

    background:
        linear-gradient(
            135deg,
            #171425,
            #10101b
        );

    border: 1px solid rgba(255,255,255,.08);

    text-align: center;

    box-shadow: 0 20px 50px rgba(0,0,0,.3);

    transform: rotate(3deg);
}

.preview-avatar {

    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    margin: 0 auto 12px;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--pink)
        );

    font-weight: 700;
}

.preview-lines {

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 5px;

    margin-bottom: 13px;
}

.preview-lines span {

    width: 75%;
    height: 4px;

    background: #343146;

    border-radius: 10px;
}

.preview-lines span:nth-child(2) {
    width: 50%;
}

.preview-lines span:nth-child(3) {
    width: 63%;
}

.preview-button {

    display: inline-block;

    padding: 6px 12px;

    background: rgba(139,92,246,.2);

    border: 1px solid rgba(139,92,246,.25);

    border-radius: 7px;

    font-size: 7px;

    color: #c4b5fd;
}

.project-card h3 {

    font-family: var(--font-heading);

    font-size: 20px;

    margin-bottom: 8px;
}

.project-card > p {

    color: var(--muted);

    font-size: 12px;

    line-height: 1.7;

    min-height: 63px;
}

.card-footer {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 10px;

    padding-top: 19px;

    margin-top: 17px;

    border-top: 1px solid rgba(255,255,255,.07);
}

.card-tags {

    display: flex;

    flex-wrap: wrap;

    gap: 5px;
}

.card-tags span {

    padding: 4px 7px;

    border-radius: 6px;

    background: rgba(255,255,255,.04);

    color: #777287;

    font-size: 8px;
}

.icon-button {

    width: 34px;
    height: 34px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border: 1px solid var(--border);

    border-radius: 9px;

    color: #a78bfa;

    transition: .25s ease;
}

.icon-button:hover {

    background: rgba(139,92,246,.15);

    transform: rotate(8deg);
}

.learning-badge {

    font-size: 8px;

    color: #8f86a5;

    border: 1px solid rgba(255,255,255,.08);

    border-radius: 100px;

    padding: 5px 8px;
}


/* =========================================================
   SKILLS
========================================================= */

.skills-section {

    background:
        radial-gradient(
            circle at 50% 50%,
            rgba(139,92,246,.06),
            transparent 50%
        );
}

.skills-layout {

    display: grid;

    grid-template-columns:
        .8fr
        1.2fr;

    gap: 90px;

    align-items: center;
}

.skills-intro h2 {

    font-family: var(--font-heading);

    font-size: clamp(38px,4vw,53px);

    line-height: 1.05;

    letter-spacing: -2px;

    margin-bottom: 20px;
}

.skills-intro h2 span {

    display: block;

    color: #c084fc;
}

.skills-intro > p {

    color: var(--muted);

    font-size: 14px;

    line-height: 1.8;

    max-width: 450px;
}

.skill-note {

    display: flex;

    align-items: center;

    gap: 11px;

    margin-top: 25px;

    color: #858095;

    font-size: 10px;
}

.skill-note i {

    color: #4ade80;

    font-size: 15px;
}


/* SKILLS CLOUD */

.skills-cloud {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 12px;

    transform: rotate(-1deg);
}

.skill-pill {

    min-height: 105px;

    padding: 17px;

    border-radius: 18px;

    border: 1px solid rgba(255,255,255,.08);

    background: rgba(255,255,255,.035);

    display: flex;

    flex-direction: column;

    justify-content: center;

    transition: .3s ease;
}

.skill-pill:hover {

    transform: translateY(-7px) rotate(1deg);

    background: rgba(255,255,255,.07);
}

.skill-pill i {

    font-size: 23px;

    margin-bottom: 9px;
}

.skill-pill span {

    font-family: var(--font-heading);

    font-size: 13px;

    font-weight: 700;
}

.skill-pill small {

    color: #6e697e;

    font-size: 8px;

    margin-top: 3px;
}

.skill-pill.skill-large {

    min-height: 125px;
}

.html i {
    color: #fb7185;
}

.css i {
    color: #60a5fa;
}

.js i {
    color: #facc15;
}

.github i {
    color: #f8fafc;
}

.ai i {
    color: #c084fc;
}

.responsive i {
    color: #22d3ee;
}

.git i {
    color: #fb923c;
}

.lovable i {
    color: #f472b6;
}


/* =========================================================
   LEARNING
========================================================= */

.learning-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}

.learning-card {

    padding: 30px;

    border: 1px solid var(--border);

    border-radius: 23px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.05),
            rgba(255,255,255,.02)
        );

    transition: .3s ease;
}

.learning-card:hover {

    transform: translateY(-6px);

    border-color: rgba(168,85,247,.2);
}

.learning-card-icon {

    width: 49px;
    height: 49px;

    display: grid;
    place-items: center;

    border-radius: 15px;

    background: rgba(168,85,247,.09);

    color: #c084fc;

    font-size: 19px;

    margin-bottom: 22px;
}

.learning-status {

    display: inline-block;

    color: #817b93;

    font-size: 8px;

    letter-spacing: 1.5px;

    font-weight: 700;

    margin-bottom: 7px;
}

.learning-card h3 {

    font-family: var(--font-heading);

    font-size: 20px;

    margin-bottom: 10px;
}

.learning-card p {

    color: var(--muted);

    font-size: 12px;

    line-height: 1.8;

    min-height: 110px;
}

.learning-progress {

    height: 5px;

    background: rgba(255,255,255,.06);

    border-radius: 20px;

    margin: 20px 0 10px;

    overflow: hidden;
}

.learning-progress span {

    display: block;

    width: 65%;

    height: 100%;

    border-radius: 20px;

    background:
        linear-gradient(
            90deg,
            var(--purple),
            var(--pink)
        );
}

.ai-progress span {

    width: 48%;

    background:
        linear-gradient(
            90deg,
            var(--cyan),
            var(--purple)
        );
}

.learning-card small {

    color: #696477;

    font-size: 9px;
}

.certificate-placeholder {

    display: flex;

    align-items: center;

    gap: 9px;

    padding: 13px;

    border: 1px dashed rgba(255,255,255,.10);

    border-radius: 12px;

    color: #777287;

    font-size: 10px;

    margin-top: 20px;
}

.certificate-placeholder i {

    color: #a78bfa;
}


/* =========================================================
   QUOTE
========================================================= */

.quote-section {

    position: relative;

    padding: 145px 24px;

    overflow: hidden;

    text-align: center;
}

.quote-bg {

    position: absolute;

    inset: 0;

    background:
        radial-gradient(
            ellipse at center,
            rgba(139,92,246,.10),
            transparent 55%
        );
}

.quote-container {

    max-width: 900px;

    margin: auto;

    position: relative;
}

.quote-mark {

    font-family: Georgia, serif;

    font-size: 80px;

    line-height: .5;

    color: #8b5cf6;

    opacity: .45;

    margin-bottom: 25px;
}

blockquote {

    font-family: var(--font-heading);

    font-size: clamp(
        32px,
        5vw,
        57px
    );

    line-height: 1.12;

    letter-spacing: -2px;

    font-weight: 600;
}

blockquote span {

    background:
        linear-gradient(
            90deg,
            #c084fc,
            #f472b6
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;
}

.quote-author {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 13px;

    margin-top: 30px;

    color: #777287;

    font-size: 10px;

    letter-spacing: 2px;

    text-transform: uppercase;
}

.quote-author span {

    width: 35px;

    height: 1px;

    background: #4a4658;
}


/* =========================================================
   CONTACT
========================================================= */

.contact-section {
    padding-top: 90px;
}

.contact-card {

    position: relative;

    overflow: hidden;

    min-height: 500px;

    display: grid;

    grid-template-columns:
        1fr
        .8fr;

    align-items: center;

    gap: 50px;

    padding: 65px;

    border-radius: 32px;

    border: 1px solid rgba(168,85,247,.16);

    background:
        radial-gradient(
            circle at 20% 30%,
            rgba(139,92,246,.12),
            transparent 35%
        ),
        radial-gradient(
            circle at 90% 70%,
            rgba(236,72,153,.09),
            transparent 30%
        ),
        rgba(255,255,255,.025);
}

.contact-content {

    position: relative;

    z-index: 2;
}

.contact-content h2 {

    font-family: var(--font-heading);

    font-size: clamp(
        40px,
        5vw,
        60px
    );

    line-height: 1.02;

    letter-spacing: -2px;

    margin-bottom: 20px;
}

.contact-content h2 span {

    display: block;

    color: #c084fc;
}

.contact-content p {

    color: var(--muted);

    max-width: 530px;

    font-size: 14px;

    line-height: 1.8;

    margin-bottom: 28px;
}

.contact-buttons {

    display: flex;

    flex-wrap: wrap;

    gap: 10px;
}

.contact-link {

    min-width: 190px;

    display: flex;

    align-items: center;

    gap: 11px;

    padding: 12px 14px;

    border-radius: 13px;

    border: 1px solid var(--border);

    background: rgba(255,255,255,.04);

    transition: .3s ease;
}

.contact-link > i:first-child {

    width: 34px;
    height: 34px;

    display: grid;
    place-items: center;

    border-radius: 9px;

    background: rgba(255,255,255,.06);

    font-size: 14px;
}

.contact-link small {

    display: block;

    color: #706b7e;

    font-size: 8px;
}

.contact-link strong {

    display: block;

    font-size: 11px;

    margin-top: 1px;
}

.contact-link .arrow {

    margin-left: auto;

    color: #6f6a7e;

    font-size: 9px;
}

.contact-link:hover {

    transform: translateY(-3px);

    background: rgba(255,255,255,.07);

    border-color: rgba(168,85,247,.25);
}

.linkedin > i:first-child {
    color: #60a5fa;
}

.github-link > i:first-child {
    color: white;
}


/* CONTACT ORBIT */

.contact-visual {

    position: relative;

    width: 350px;
    height: 350px;

    margin: auto;
}

.contact-center {

    position: absolute;

    width: 88px;
    height: 88px;

    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);

    display: grid;
    place-items: center;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--pink)
        );

    box-shadow:
        0 0 80px rgba(139,92,246,.28);

    z-index: 4;
}

.contact-center span {

    font-family: var(--font-heading);

    font-size: 30px;

    font-weight: 700;
}

.contact-orbit {

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);

    border: 1px solid rgba(255,255,255,.07);

    border-radius: 50%;
}

.orbit-one {

    width: 150px;
    height: 150px;

    animation: orbitRotate 15s linear infinite;
}

.orbit-two {

    width: 235px;
    height: 235px;

    animation: orbitRotate 22s linear infinite reverse;
}

.orbit-three {

    width: 320px;
    height: 320px;

    border-style: dashed;

    opacity: .6;

    animation: orbitRotate 30s linear infinite;
}

.orbit-icon {

    position: absolute;

    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    background: #12121e;

    border: 1px solid rgba(255,255,255,.10);

    z-index: 5;

    box-shadow: 0 10px 30px rgba(0,0,0,.3);
}

.icon-html {

    top: 34px;
    left: 155px;

    color: #fb7185;
}

.icon-css {

    right: 15px;
    top: 145px;

    color: #60a5fa;
}

.icon-js {

    bottom: 34px;
    left: 155px;

    color: #facc15;
}

.icon-ai {

    left: 15px;
    top: 145px;

    color: #c084fc;
}


/* CONTACT DECORATIONS */

.contact-decoration {

    position: absolute;

    border-radius: 50%;

    pointer-events: none;
}

.decoration-one {

    width: 240px;
    height: 240px;

    right: -100px;
    top: -120px;

    border: 1px solid rgba(168,85,247,.15);
}

.decoration-two {

    width: 130px;
    height: 130px;

    left: -80px;
    bottom: -70px;

    border: 1px solid rgba(236,72,153,.13);
}


/* =========================================================
   FOOTER
========================================================= */

footer {

    padding: 35px 0;

    border-top: 1px solid rgba(255,255,255,.06);

    margin-top: 80px;
}

.footer-container {

    display: grid;

    grid-template-columns:
        1fr
        1fr
        1fr;

    align-items: center;

    gap: 20px;
}

.footer-brand p {

    color: #686477;

    font-size: 9px;

    margin-top: 8px;
}

.footer-brand .logo-mark {

    width: 30px;
    height: 30px;

    border-radius: 8px;

    font-size: 13px;
}

.footer-brand .logo {

    font-size: 16px;
}

.footer-center {

    text-align: center;

    color: #555163;

    font-size: 9px;
}

.footer-right {

    text-align: right;

    color: #555163;

    font-size: 9px;
}


/* =========================================================
   BACK TO TOP
========================================================= */

.back-to-top {

    position: fixed;

    right: 22px;
    bottom: 22px;

    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border-radius: 12px;

    border: 1px solid var(--border);

    background: rgba(18,17,29,.8);

    backdrop-filter: blur(10px);

    color: white;

    cursor: pointer;

    z-index: 100;

    opacity: 0;

    visibility: hidden;

    transform: translateY(15px);

    transition: .3s ease;
}

.back-to-top.show {

    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}

.back-to-top:hover {

    background: rgba(139,92,246,.2);

    border-color: rgba(139,92,246,.3);
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes float {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}

@keyframes windowFloat {

    0%,100% {
        transform:
            perspective(1000px)
            rotateY(-5deg)
            rotateX(2deg)
            translateY(0);
    }

    50% {
        transform:
            perspective(1000px)
            rotateY(-5deg)
            rotateX(2deg)
            translateY(-8px);
    }
}

@keyframes pulse {

    0%,100% {
        box-shadow:
            0 0 0 5px rgba(74,222,128,.08);
    }

    50% {
        box-shadow:
            0 0 0 9px rgba(74,222,128,.02);
    }
}

@keyframes blink {

    0%,45% {
        opacity: 1;
    }

    46%,100% {
        opacity: 0;
    }
}

@keyframes bounce {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(5px);
    }
}

@keyframes orbitRotate {

    from {
        transform:
            translate(-50%,-50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%,-50%)
            rotate(360deg);
    }
}


/* SCROLL REVEAL */

.reveal {

    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity .8s ease,
        transform .8s ease;
}

.reveal.visible {

    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 1050px) {

    .nav-menu {
        gap: 18px;
    }

    .nav-cta {
        display: none;
    }

    .hero-container {

        grid-template-columns: 1fr;

        gap: 60px;

        text-align: center;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons,
    .hero-stats {
        justify-content: center;
    }

    .hero-visual {
        min-height: 500px;
    }

    .code-window {
        max-width: 550px;
    }

    .about-grid,
    .skills-layout {

        grid-template-columns: 1fr;

        gap: 55px;
    }

    .about-text {
        text-align: center;
    }

    .about-text p {
        margin-left: auto;
        margin-right: auto;
    }

    .about-signature {
        align-items: center;
    }

    .skills-intro {
        text-align: center;
    }

    .skills-intro > p {
        margin-left: auto;
        margin-right: auto;
    }

    .skill-note {
        justify-content: center;
    }

    .featured-project {

        grid-template-columns: 1fr;

        gap: 45px;
    }

    .featured-info {
        text-align: center;
    }

    .project-tech,
    .project-buttons {
        justify-content: center;
    }

    .learning-grid {
        grid-template-columns: 1fr 1fr;
    }

    .learning-card:last-child {
        grid-column: 1 / -1;
    }

    .contact-card {

        grid-template-columns: 1fr;

        text-align: center;
    }

    .contact-content p {
        margin-left: auto;
        margin-right: auto;
    }

    .contact-buttons {
        justify-content: center;
    }

}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 760px) {

    .section-container,
    .nav-container,
    .hero-container {

        width: min(
            calc(100% - 32px),
            var(--container)
        );
    }

    .section {
        padding: 85px 0;
    }

    /* NAV */

    .menu-toggle {
        display: grid;
        place-items: center;
    }

    .nav-menu {

        position: fixed;

        top: 0;
        right: -100%;

        width: min(300px, 85vw);

        height: 100vh;

        padding:
            100px
            30px
            40px;

        background: rgba(13,12,23,.97);

        backdrop-filter: blur(25px);

        border-left: 1px solid var(--border);

        flex-direction: column;

        align-items: flex-start;

        gap: 25px;

        transition: right .35s ease;

        z-index: 100;
    }

    .nav-menu.open {
        right: 0;
    }

    .nav-link {
        font-size: 17px;
    }

    .menu-toggle {
        position: relative;
        z-index: 101;
    }

    /* HERO */

    .hero {

        padding:
            130px 0
            80px;
    }

    .hero h1 {

        font-size: 43px;

        letter-spacing: -2px;
    }

    .hero-description {

        font-size: 14px;

        line-height: 1.75;
    }

    .hero-stats {
        gap: 0;
    }

    .stat {

        padding-right: 16px;

        margin-right: 16px;
    }

    .hero-visual {

        min-height: 400px;
    }

    .code-window {

        transform: none;

        width: 100%;
    }

    .code-body {

        font-size: 10px;

        padding: 20px 12px;
    }

    .code-line {

        grid-template-columns: 20px auto;

        gap: 6px;
    }

    .code-line.indent {
        padding-left: 10px;
    }

    .card-project {
        right: -5px;
        top: 4%;
    }

    .card-learning {
        left: -5px;
        bottom: 4%;
    }

    .floating-card {
        transform: scale(.82);
    }

    .scroll-indicator {
        display: none;
    }

    /* HEADINGS */

    .section-heading h2 {

        font-size: 36px;

        letter-spacing: -1.5px;
    }

    /* ABOUT */

    .journey-card {
        padding: 20px;
    }

    /* TIMELINE */

    .timeline::before {
        left: 20px;
    }

    .timeline-item {

        padding-left: 55px;

        margin-bottom: 25px;
    }

    .timeline-marker {

        width: 41px;
        height: 41px;

        font-size: 9px;
    }

    .timeline-content {

        padding: 18px;

        flex-direction: column;

        gap: 14px;
    }

    .timeline-icon {

        width: 38px;
        height: 38px;

        font-size: 16px;
    }

    /* FEATURED */

    .featured-project {

        padding: 20px;

        border-radius: 23px;
    }

    .focus-screen {

        min-height: 300px;

        padding: 20px;
    }

    .featured-info h3 {

        font-size: 35px;
    }

    /* PROJECTS */

    .projects-grid {

        grid-template-columns: 1fr;
    }

    .project-art {
        height: 175px;
    }

    /* SKILLS */

    .skills-cloud {

        grid-template-columns:
            repeat(2, 1fr);

        transform: none;
    }

    .skill-pill.skill-large {
        min-height: 105px;
    }

    /* LEARNING */

    .learning-grid {
        grid-template-columns: 1fr;
    }

    .learning-card:last-child {
        grid-column: auto;
    }

    .learning-card p {
        min-height: auto;
    }

    /* QUOTE */

    .quote-section {
        padding: 100px 20px;
    }

    blockquote {

        font-size: 34px;

        letter-spacing: -1px;
    }

    /* CONTACT */

    .contact-card {

        padding: 35px 22px;

        min-height: auto;
    }

    .contact-content h2 {

        font-size: 40px;

        letter-spacing: -1.5px;
    }

    .contact-visual {

        width: 280px;
        height: 280px;

        transform: scale(.85);
    }

    .contact-buttons {
        flex-direction: column;
    }

    .contact-link {
        width: 100%;
    }

    /* FOOTER */

    .footer-container {

        grid-template-columns: 1fr;

        text-align: center;
    }

    .footer-center,
    .footer-right {
        text-align: center;
    }

}


/* =========================================================
   SMALL PHONES
========================================================= */

@media (max-width: 400px) {

    .hero h1 {
        font-size: 37px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }

    .skills-cloud {
        gap: 8px;
    }

    .skill-pill {
        padding: 13px;
    }

    .contact-content h2 {
        font-size: 34px;
    }

}
