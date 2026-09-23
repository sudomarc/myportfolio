/* ============================================================
   HERO — Editorial 3D interface scene (vanilla, no dependencies)
   Decorative only. Content remains fully usable without the scene.
   ============================================================ */

(() => {
  "use strict";

  const CFG = {
    layers: [
      { sel: ".h-bg", parallax: 0.02, scale: 1.08 },
      { sel: ".h-atmos", parallax: 0.06, scale: 1.04 },
      { sel: ".h-far", parallax: 0.14, scale: 1.02 },
      { sel: ".h-mid", parallax: 0.24, scale: 1 },
      { sel: ".h-primary", parallax: 0.38, scale: 1 },
      { sel: ".h-fore", parallax: 0.54, scale: 0.98 },
    ],
    particles: { count: 38, size: { min: 1, max: 2.2 }, speed: 0.11 },
  };

  let els = [];
  let states = [];
  let canvas = null;
  let ctx = null;
  let hero = null;
  let particles = [];
  let rafId = null;
  let accent = "134, 239, 172";
  let reduced = false;
  let visible = true;
  let pageVisible = !document.hidden;
  let started = false;

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const prefersReduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function readAccent() {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();

    if (!value) return;

    const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    accent = match ? match.slice(1, 4).join(", ") : value;
  }

  function initLayers() {
    els = [];
    states = [];

    CFG.layers.forEach((layer) => {
      const el = document.querySelector(layer.sel);
      if (!el) return;

      els.push(el);
      states.push({
        parallax: layer.parallax,
        scale: layer.scale,
        x: 0,
        y: 0,
        tx: 0,
        ty: 0,
        rx: 0,
        ry: 0,
        scroll: window.scrollY,
      });
    });
  }

  function resizeCanvas() {
    if (!canvas || !canvas.parentElement) return;

    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    spawnParticles(rect.width, rect.height);
  }

  function initCanvas() {
    canvas = document.querySelector(".hero-particles");
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", resizeCanvas, {
        passive: true,
      });
    }
  }

  function spawnParticles(width, height) {
    particles = [];

    for (let i = 0; i < CFG.particles.count; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r:
          Math.random() *
            (CFG.particles.size.max - CFG.particles.size.min) +
          CFG.particles.size.min,
        vx: (Math.random() - 0.5) * CFG.particles.speed,
        vy: (Math.random() - 0.5) * CFG.particles.speed,
        opacity: 0.08 + Math.random() * 0.22,
      });
    }
  }

  function drawParticles() {
    if (!ctx || !canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -4) particle.x = width + 4;
      if (particle.x > width + 4) particle.x = -4;
      if (particle.y < -4) particle.y = height + 4;
      if (particle.y > height + 4) particle.y = -4;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fillStyle =
        "rgba(" + accent + ", " + particle.opacity.toFixed(3) + ")";
      ctx.fill();
    });
  }

  function onPointer(event) {
    if (reduced || !hero) return;

    const rect = hero.getBoundingClientRect();
    const x = clamp(
      (event.clientX - rect.left) / rect.width - 0.5,
      -0.5,
      0.5,
    );
    const y = clamp(
      (event.clientY - rect.top) / rect.height - 0.5,
      -0.5,
      0.5,
    );

    states.forEach((state) => {
      state.tx = x;
      state.ty = y;
    });
  }

  function resetPointer() {
    states.forEach((state) => {
      state.tx = 0;
      state.ty = 0;
    });
  }

  function onScroll() {
    const scrollY = window.scrollY;

    states.forEach((state) => {
      state.scroll = scrollY;
    });
  }

  function stopLoop() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  function syncLoop() {
    if (reduced || !visible || !pageVisible) {
      stopLoop();
      return;
    }

    if (!rafId) rafId = requestAnimationFrame(loop);
  }

  function loop() {
    rafId = null;

    if (reduced || !visible || !pageVisible) return;

    states.forEach((state, index) => {
      const px =
        state.tx * state.parallax * 96 +
        state.scroll * state.parallax * 0.08;
      const py =
        state.ty * state.parallax * 64 +
        state.scroll * state.parallax * 0.04;

      state.x = lerp(state.x, px, 0.1);
      state.y = lerp(state.y, py, 0.1);
      state.rx = lerp(state.rx, -py * 0.045, 0.1);
      state.ry = lerp(state.ry, px * 0.045, 0.1);

      els[index].style.transform =
        "translate3d(" +
        state.x.toFixed(2) +
        "px, " +
        state.y.toFixed(2) +
        "px, 0) rotateX(" +
        state.rx.toFixed(2) +
        "deg) rotateY(" +
        state.ry.toFixed(2) +
        "deg) scale(" +
        state.scale +
        ")";
    });

    drawParticles();
    syncLoop();
  }

  function onReducedChange() {
    reduced = prefersReduced();

    if (canvas) canvas.style.display = reduced ? "none" : "";
    syncLoop();
  }

  function initVisibilityObserver() {
    if (!hero || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        visible = Boolean(entries[0] && entries[0].isIntersecting);
        syncLoop();
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(hero);
  }

  function init() {
    if (started) return;
    started = true;

    hero = document.querySelector(".hero");
    if (!hero) return;

    reduced = prefersReduced();
    readAccent();
    initLayers();
    initCanvas();
    initVisibilityObserver();

    hero.addEventListener("pointermove", onPointer, { passive: true });
    hero.addEventListener("pointerleave", resetPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    document.addEventListener("visibilitychange", () => {
      pageVisible = !document.hidden;
      syncLoop();
    });

    if ("MutationObserver" in window) {
      new MutationObserver(() => {
        readAccent();
        if (canvas) spawnParticles(canvas.clientWidth, canvas.clientHeight);
      }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    }

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    motionQuery.addEventListener("change", onReducedChange);

    if (reduced && canvas) canvas.style.display = "none";
    syncLoop();
  }

  window.Hero3D = { init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
