/* FOUC prevention: set data-theme on <html> before first paint. */
try {
  var t = localStorage.getItem("theme");
  if (t) {
    document.documentElement.setAttribute("data-theme", t);
  } else {
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }
} catch (e) {}