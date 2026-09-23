/* ============================================================
   HERO — Immersive 3D scene (vanilla, no dependencies)
   JS owns parallax + particles only. Visual layers and entrance
   choreography are pure CSS (fail-safe: content visible without JS).
   Theme-aware: colors are read from CSS custom properties.
   ============================================================ */

(() => {
  "use strict";

  const CFG = {
    layers: [
      { sel: ".h-bg", parallax: 0.02, scale: 1.15 },
      { sel: ".h-atmos", parallax: 0.08, scale: 1.1 },
      { sel: ".h-far", parallax: 0.18, scale: 1.05 },
      { sel: ".h-mid", parallax: 0.3, scale: 1.02 },
      { sel: ".h-primary", parallax: 0.45, scale: 1 },
      { sel: ".h-fore", parallax: 0.65, scale: 0.95 },
    ],
    particles: { count: 60, size: { min: 1, max: 3 }, speed: 0.15 },
  };

  let els = null;
  let states = null;
  let canvas = null;
  let ctx = null;
  let particles = [];
  let rafId = null;
  let accent = "134, 239, 172";
  let reduced = false;
  let started = false;

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function readAccent() {
    var v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    if (v) {
      var m = v.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (m) accent = m[1] + ", " + m[2] + ", " + m[3];
      else accent = v;
    }
  }

  function initLayers() {
    els = [];
    states = [];
    CFG.layers.forEach((l) => {
      var el = document.querySelector(l.sel);
      if (!el) return;
      els.push(el);
      states.push({ parallax: l.parallax, scale: l.scale, x: 0, y: 0, tx: 0, ty: 0, rx: 0, ry: 0 });
    });
  }

  function initCanvas() {
    canvas = document.querySelector(".hero-particles");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resize();
    spawn();
    window.addEventListener("resize", resize, { passive: true });
  }

  function resize() {
    if (!canvas) return;
    var rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(rect.width * devicePixelRatio));
    canvas.height = Math.max(1, Math.round(rect.height * devicePixelRatio));
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
    if (!ctx) return;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function spawn() {
    if (!canvas) return;
    var w = canvas.width / devicePixelRatio;
    var h = canvas.height / devicePixelRatio;
    particles = [];
    for (var i = 0; i < CFG.particles.count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * (CFG.particles.size.max - CFG.particles.size.min) + CFG.particles.size.min,
        vx: (Math.random() - 0.5) * CFG.particles.speed,
        vy: (Math.random() - 0.5) * CFG.particles.speed,
        o: 0.1 + Math.random() * 0.35,
      });
    }
  }

  function drawParticles() {
    if (!ctx || !canvas) return;
    var w = canvas.width / devicePixelRatio;
    var h = canvas.height / devicePixelRatio;
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.vx *= 0.998;
      p.vy *= 0.998;
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + accent + ", " + p.o + ")";
      ctx.fill();
    }
  }

  function onPointer(e) {
    if (reduced || !els.length) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;
    var rect = hero.getBoundingClientRect();
    var x = clamp((e.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
    var y = clamp((e.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
    if (!states) return;
    for (var i = 0; i < states.length; i++) states[i].tx = x;
    for (var j = 0; j < states.length; j++) states[j].ty = y;
  }

  function onLeave() {
    if (!states) return;
    for (var i = 0; i < states.length; i++) {
      states[i].tx = 0;
      states[i].ty = 0;
    }
  }

  function onScroll() {
    if (reduced) return;
    var sy = window.scrollY;
    for (var i = 0; i < states.length; i++) {
      states[i].scroll = sy;
    }
  }

  function loop() {
    for (var i = 0; i < states.length; i++) {
      var s = states[i];
      if (s.scroll == null) s.scroll = 0;
      var px = s.tx * s.parallax * 120 + s.scroll * s.parallax * 0.25;
      var py = s.ty * s.parallax * 80 + s.scroll * s.parallax * 0.12;
      s.x = lerp(s.x, px, 0.1);
      s.y = lerp(s.y, py, 0.1);
      s.rx = lerp(s.rx, -py * 0.05, 0.1);
      s.ry = lerp(s.ry, px * 0.05, 0.1);
      if (els[i]) {
        els[i].style.transform =
          "translate3d(" + s.x.toFixed(2) + "px, " + s.y.toFixed(2) + "px, 0) " +
          "rotateX(" + s.rx.toFixed(2) + "deg) rotateY(" + s.ry.toFixed(2) + "deg) " +
          "scale(" + s.scale + ")";
      }
    }
    drawParticles();
    rafId = requestAnimationFrame(loop);
  }

  function onReducedChange() {
    reduced = prefersReduced();
    if (reduced) {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      if (canvas) canvas.style.display = "none";
    } else {
      if (canvas) canvas.style.display = "";
      if (!rafId) rafId = requestAnimationFrame(loop);
    }
  }

  function init() {
    if (started) return;
    started = true;
    reduced = prefersReduced();
    readAccent();
    initLayers();
    initCanvas();

    document.addEventListener("mousemove", onPointer, { passive: true });
    document.addEventListener("mouseleave", onLeave, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    if ("MutationObserver" in window) {
      new MutationObserver(function () {
        readAccent();
        if (canvas) spawn();
      }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    }

    if (!reduced) rafId = requestAnimationFrame(loop);
    else if (canvas) canvas.style.display = "none";

    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", onReducedChange);
    if (window.visualViewport) window.visualViewport.addEventListener("resize", resize, { passive: true });
  }

  window.Hero3D = { init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();