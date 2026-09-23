/* FOUC prevention: set data-theme on <html> before first paint. */
try {
  var t = localStorage.getItem("theme");
  if (t) document.documentElement.setAttribute("data-theme", t);
} catch (e) {}