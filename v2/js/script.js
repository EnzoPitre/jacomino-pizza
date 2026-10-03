(function () {
  "use strict";

  document.documentElement.classList.add("js-ready");

  // ---------- Mobile nav toggle ----------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // ---------- Scroll reveal ----------
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 120px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // ---------- Active chip on menu page ----------
  var jumpLinks = document.querySelectorAll(".menu-jump a");
  var categories = document.querySelectorAll(".menu-category");

  if (jumpLinks.length && categories.length && "IntersectionObserver" in window) {
    var catObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.getAttribute("id");
          var link = document.querySelector('.menu-jump a[href="#' + id + '"]');
          if (!link) return;
          if (entry.isIntersecting) {
            jumpLinks.forEach(function (l) {
              l.classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-160px 0px -60% 0px", threshold: 0 }
    );
    categories.forEach(function (cat) {
      catObserver.observe(cat);
    });
  }

  // ---------- Current year in footer ----------
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
