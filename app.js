/* app.js — turns content.js into the page. You shouldn't need to edit this. */
(function () {
  "use strict";

  var app = document.getElementById("app");
  var C = window.PORTFOLIO;

  /* ---------- tiny DOM helper (uses textContent, so content is never parsed as HTML) */
  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false || v === "") return;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    });
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }

  // Only http(s), mailto and relative paths are allowed as link targets.
  function safeUrl(u) {
    u = String(u || "").trim();
    if (/^[a-z][a-z0-9+.-]*:/i.test(u) && !/^(https?:|mailto:)/i.test(u)) return "#";
    return u;
  }

  function list(items, cls) {
    if (!items || !items.length) return null;
    return h("ul", { class: cls }, items.map(function (t) { return h("li", { text: t }); }));
  }

  function heading(title, note) {
    return h("div", { class: "sec-head" }, [
      h("h2", { text: title }),
      note ? h("p", { text: note }) : null,
    ]);
  }

  function section(id, cls, children) {
    return h("section", { id: id, class: "sec " + (cls || "") }, [
      h("div", { class: "wrap" }, children),
    ]);
  }

  /* ---------- error banner: a typo in content.js lands here instead of a blank page */
  function fail(msg) {
    app.textContent = "";
    app.appendChild(
      h("div", { class: "wrap" }, [
        h("div", { class: "err", role: "alert" }, [
          h("strong", { text: "The page couldn't be built." }),
          h("p", {
            text:
              "Something in content.js is off. This is nearly always a missing comma, a missing quote, or an extra bracket. " +
              "Check the last thing you edited.",
          }),
          msg ? h("code", { text: msg }) : null,
        ]),
      ])
    );
  }

  if (!C) return fail("content.js did not load (syntax error).");

  /* ---------- contact links (used in the hero and the contact section) */
  function contactLinks() {
    var c = C.contact || {}, out = [];
    if (c.email) out.push({ label: "Email", text: c.email, url: "mailto:" + c.email });
    if (c.linkedin) out.push({ label: "LinkedIn", text: String(c.linkedin).replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, ""), url: c.linkedin, ext: true });
    if (c.resume) out.push({ label: "Résumé", text: "Download PDF", url: c.resume, ext: true });
    return out;
  }

  /* ---------- HERO */
  function hero() {
    var s = C.site || {}, x = C.hero || {};
    var words = String(s.name || "").split(/\s+/).filter(Boolean);
    var hasContact = contactLinks().length > 0;
    var stats = x.stats || [];
    var photo = x.photo
      ? h("figure", { class: "avatar" }, [
          h("img", { src: safeUrl(x.photo), alt: x.photoAlt || s.name || "", width: "620", height: "620", decoding: "async",
                     style: "object-position:" + cropValue(x.photoPosition, "50% 50%") }),
        ])
      : null;

    return h("header", { class: "hero", id: "top" }, [
      h("div", { class: "wrap hero-in" + (stats.length ? " has-spec" : "") }, [
        h("div", { class: "hero-name" }, [
          x.eyebrow ? h("p", { class: "eyebrow", text: x.eyebrow }) : null,
          h("h1", { "aria-label": s.name }, words.map(function (w) { return h("span", { class: "nm", "aria-hidden": "true", text: w }); })),
        ]),
        photo,
        h("div", { class: "hero-text" }, [
          x.tagline ? h("p", { class: "tagline", text: x.tagline }) : null,
          x.intro ? h("p", { class: "intro", text: x.intro }) : null,
          h("div", { class: "actions" }, [
            hasContact ? h("button", { class: "btn btn-primary", type: "button", "data-contact-open": "1", "aria-haspopup": "dialog" }, ["Get in touch"]) : null,
            C.work && C.work.show !== false ? h("a", { class: "btn", href: "#work" }, ["See the work"]) : null,
          ]),
        ]),
        stats.length
          ? h("aside", { class: "spec", "aria-label": x.statsTitle || "Key figures" }, [
              h("div", { class: "spec-head" }, [h("span", { text: x.statsTitle || "At a glance" }), h("span", { text: x.statsNote || "" })]),
              h("dl", {}, stats.map(function (r) {
                return h("div", { class: "row" }, [
                  h("dt", { text: r.label }),
                  h("dd", {}, [h("span", { class: "v", text: r.value }), h("span", { class: "u", text: r.unit || "" })]),
                ]);
              })),
            ])
          : null,
      ]),
    ]);
  }

  /* ---------- TYPING LINE (a few short lines typed out one after another) */
  function typingLines() {
    var t = C.typing;
    if (!t || t.show === false) return [];
    return (t.lines || []).filter(function (s) { return typeof s === "string" && s; });
  }

  function typingLine() {
    var lines = typingLines();
    if (!lines.length) return null;
    return h("section", { class: "typer", id: "typer", "aria-label": "A few things about me" }, [
      h("div", { class: "wrap" }, [
        // the moving text is decoration; screen readers get the whole list instead
        h("p", { class: "typer-line", "aria-hidden": "true" }, [h("span", { class: "typer-text" }), h("span", { class: "typer-caret" })]),
        h("ul", { class: "sr-only" }, lines.map(function (s) { return h("li", { text: s }); })),
      ]),
    ]);
  }

  function initTyping() {
    var root = document.getElementById("typer");
    if (!root) return;
    var t = C.typing || {}, lines = typingLines();
    var speed = Math.max(20, Number(t.speed) || 70), hold = Math.max(400, Number(t.hold) || 1800);
    var text = root.querySelector(".typer-text");

    // people who ask their device for less motion get every line at once, standing still
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var line = root.querySelector(".typer-line");
      line.textContent = "";
      lines.forEach(function (s) { line.appendChild(h("span", { class: "typer-static", text: s })); });
      return;
    }

    var i = 0, n = 0, erasing = false, timer = null, on = false;
    function later(ms) { timer = setTimeout(step, ms); }
    function step() {
      if (!on) return;
      var full = lines[i];
      root.classList.add("typing");                      // caret stays solid while letters are moving
      if (!erasing) {
        n++;
        text.textContent = full.slice(0, n);
        if (n >= full.length) { erasing = true; root.classList.remove("typing"); later(hold); }
        else later(speed * (0.7 + Math.random() * 0.6));  // a little unevenness, like a real typist
      } else {
        n--;
        text.textContent = full.slice(0, n);
        if (n <= 0) { erasing = false; i = (i + 1) % lines.length; root.classList.remove("typing"); later(450); }
        else later(speed * 0.35);
      }
    }
    function start() { if (!on) { on = true; later(400); } }
    function stop() { on = false; clearTimeout(timer); root.classList.remove("typing"); }

    // only run while the section is on screen (and never rely on the browser's "on screen" signal alone)
    if ("IntersectionObserver" in window) {
      var reported = false;
      new IntersectionObserver(function (entries) {
        reported = true;
        if (entries[0].isIntersecting) start(); else stop();
      }, { threshold: 0.2 }).observe(root);
      setTimeout(function () { if (!reported) start(); }, 1500);
    } else { start(); }
  }

  /* ---------- WORK */
  // Optional per-photo crop (imageRatio / imagePosition in content.js). Only plain
  // values such as "4 / 5" or "50% 0%" are accepted.
  function cropValue(v, fallback) {
    return typeof v === "string" && /^[\w.\s%\/-]+$/.test(v) ? v : fallback;
  }
  function media(p, ratio) {
    if (!p.image) return null;
    var style = "aspect-ratio:" + cropValue(p.imageRatio, ratio || "16 / 10") + ";object-position:" + cropValue(p.imagePosition, "50% 50%");
    return h("figure", { class: "media" }, [h("img", { src: safeUrl(p.image), alt: p.imageAlt || "", loading: "lazy", style: style })]);
  }
  function linkButtons(links) {
    if (!links || !links.length) return null;
    return h("div", { class: "actions" }, links.map(function (l) {
      return h("a", { class: "btn", href: safeUrl(l.url), target: "_blank", rel: "noopener" }, [l.label]);
    }));
  }
  function tags(t) {
    if (!t || !t.length) return null;
    return h("ul", { class: "tags" }, t.map(function (x) { return h("li", { class: "tag", text: x }); }));
  }

  /* ---------- video + photo carousel (used inside the featured project) */
  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function videoBlock(p) {
    var v = p.video;
    if (!v || !v.src) return null;
    var ratio = cropValue(v.ratio, "16 / 9");
    var parts = ratio.split("/");
    var portrait = parts.length === 2 && parseFloat(parts[0]) < parseFloat(parts[1]);
    var el = h("video", {
      controls: "controls", playsinline: "playsinline", preload: "metadata",
      poster: v.poster ? safeUrl(v.poster) : null,
      src: safeUrl(v.src) + (v.poster ? "" : "#t=0.1"),    // no poster: the #t nudges phones into showing a first frame
      "aria-label": v.caption || ((p.title || "Project") + " video"),
      style: "aspect-ratio:" + ratio,
    });
    var box = h("figure", { class: "vid " + (portrait ? "portrait" : "landscape") }, [
      el,
      v.caption ? h("figcaption", { text: v.caption }) : null,
    ]);
    // once the real dimensions are known, trust them over the ratio written in content.js
    el.addEventListener("loadedmetadata", function () {
      if (!el.videoWidth || !el.videoHeight) return;
      el.style.aspectRatio = el.videoWidth + " / " + el.videoHeight;
      box.className = "vid " + (el.videoHeight > el.videoWidth ? "portrait" : "landscape");
    });
    return box;
  }

  function gallery(p) {
    var g = (p.gallery || []).filter(function (it) { return it && it.src; });
    if (!g.length) return null;
    var n = g.length, label = (p.title || "Project") + " photos";
    var track = h("div", { class: "g-track", tabindex: "0", role: "group", "aria-label": label }, g.map(function (it, i) {
      return h("figure", { class: "g-item" }, [
        h("img", { src: safeUrl(it.src), alt: it.alt || "", loading: i < 3 ? "eager" : "lazy", decoding: "async" }),
        it.caption ? h("figcaption", { text: it.caption }) : null,
      ]);
    }));
    var count = h("span", { class: "g-count", text: "01 / " + pad2(n) });
    var prev = h("button", { class: "g-btn", type: "button", "aria-label": "Previous photo", text: "←" });
    var next = h("button", { class: "g-btn", type: "button", "aria-label": "Next photo", text: "→" });
    var box = h("div", { class: "gallery", role: "region", "aria-roledescription": "carousel", "aria-label": label }, [
      h("div", { class: "g-bar" }, [h("span", { text: "Photos" }), count, h("div", { class: "g-nav" }, [prev, next])]),
      track,
    ]);
    wireGallery(track, prev, next, count, n);
    return box;
  }

  // Buttons, counter and swipe/scroll all share one scrolling strip, so nothing can get out of sync.
  function wireGallery(track, prev, next, count, n) {
    var items = track.children;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function startOf(i) { return items[i].getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft; }
    function atEnd() { return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; }
    function leftIndex() {                 // the photo sitting at (or just past) the left edge
      var x = track.scrollLeft + 8, idx = 0;
      for (var i = 0; i < n; i++) { if (startOf(i) <= x) idx = i; else break; }
      return idx;
    }
    function update() {                    // counter shows which photos are on screen, e.g. "02–03 / 11"
      var first = leftIndex(), last = first, edge = track.scrollLeft + track.clientWidth - 24;
      for (var i = first + 1; i < n; i++) { if (startOf(i) < edge) last = i; else break; }
      count.textContent = pad2(first + 1) + (last > first ? "–" + pad2(last + 1) : "") + " / " + pad2(n);
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = atEnd();
    }
    var wanted = null, settle = null;      // remembers where a slide in progress is heading, so quick clicks add up
    function step(dir) {
      var base = wanted !== null ? wanted : leftIndex();
      wanted = Math.max(0, Math.min(n - 1, base + dir));
      track.scrollTo({ left: startOf(wanted), behavior: reduce ? "auto" : "smooth" });
      clearTimeout(settle);
      settle = setTimeout(function () { wanted = null; update(); }, 700);
    }
    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });
    var ticking = false;
    track.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });
    window.addEventListener("resize", update);
    for (var i = 0; i < items.length; i++) {
      var im = items[i].querySelector("img");
      if (im) im.addEventListener("load", update);
    }
    update();
  }

  function feature(p) {
    // Right-hand column: the video if there is one, else a single photo, else the facts.
    // When that column holds media, the facts drop to the bottom of the text column instead.
    // The photo carousel runs full width underneath.
    var video = videoBlock(p);
    var photo = video ? null : media(p, "4 / 5");
    var hasSideMedia = !!(video || photo);
    var facts = p.facts && p.facts.length
      ? h("dl", { class: "facts" }, p.facts.map(function (f) {
          return h("div", {}, [h("dt", { text: f.label }), h("dd", { text: f.value })]);
        }))
      : null;
    var carousel = gallery(p);
    return h("article", { class: "feature" + (hasSideMedia ? " has-side-media" : "") }, [
      h("div", { class: "feature-main" }, [
        p.kicker ? h("p", { class: "kicker", text: p.kicker }) : null,
        h("h3", { text: p.title }),
        p.summary ? h("p", { class: "lede", text: p.summary }) : null,
        list(p.highlights, "dash"),
        tags(p.tags),
        linkButtons(p.links),
        hasSideMedia ? facts : null,
      ]),
      h("div", { class: "feature-side" }, [video || photo || facts]),
      carousel ? h("div", { class: "feature-media" }, [carousel]) : null,
    ]);
  }

  function card(p) {
    return h("article", { class: "card" }, [
      media(p),
      p.kicker ? h("p", { class: "kicker", text: p.kicker }) : null,
      h("h3", { text: p.title }),
      p.summary ? h("p", { text: p.summary }) : null,
      list(p.highlights, "dash"),
      linkButtons(p.links),
      tags(p.tags),
    ]);
  }

  function work() {
    var w = C.work; if (!w || w.show === false) return null;
    var kids = [heading(w.title || "Work", w.note)], group = null;
    (w.projects || []).forEach(function (p) {
      if (p.featured) { group = null; kids.push(feature(p)); return; }
      if (!group) { group = h("div", { class: "grid" }); kids.push(group); }
      group.appendChild(card(p));
    });
    return section("work", "", kids);
  }

  /* ---------- ABOUT */
  function about() {
    var a = C.about; if (!a || a.show === false) return null;
    return section("about", "alt", [
      h("div", { class: "about" }, [
        heading(a.title || "About"),
        h("div", { class: "prose" }, (a.paragraphs || []).map(function (t) { return h("p", { text: t }); })),
      ]),
    ]);
  }

  /* ---------- EXPERIENCE */
  function experience() {
    var e = C.experience; if (!e || e.show === false) return null;
    return section("experience", "", [
      heading(e.title || "Experience"),
      h("div", { class: "jobs" }, (e.items || []).map(function (j) {
        return h("article", { class: "job" }, [
          h("div", { class: "job-meta" }, [h("p", { class: "dates", text: j.dates }), j.place ? h("p", { class: "place", text: j.place }) : null]),
          h("div", { class: "job-body" }, [
            h("h3", {}, [j.role, j.org ? h("span", { class: "org", text: " — " + j.org }) : null]),
            list(j.bullets, "dash"),
          ]),
        ]);
      })),
    ]);
  }

  /* ---------- SKILLS + EDUCATION (side by side when both are shown) */
  function skillsAndEducation() {
    var s = C.skills && C.skills.show !== false ? C.skills : null;
    var e = C.education && C.education.show !== false ? C.education : null;
    if (!s && !e) return null;

    var left = s && h("div", {}, [
      heading(s.title || "Skills"),
      h("dl", { class: "skills" }, (s.groups || []).map(function (g) {
        return h("div", { class: "skillrow" }, [
          h("dt", { text: g.label }),
          h("dd", {}, [h("ul", { class: "chips" }, (g.items || []).map(function (i) { return h("li", { class: "chip", text: i }); }))]),
        ]);
      })),
    ]);

    var right = e && h("div", {}, [
      heading(e.title || "Education"),
      h("div", { class: "edu" }, (e.items || []).map(function (i) {
        return h("article", {}, [
          h("h3", { text: i.school }),
          h("p", { text: i.detail }),
          h("p", { class: "dates", text: i.dates }),
          i.note ? h("p", { class: "note", text: i.note }) : null,
        ]);
      })),
    ]);

    return section("skills", "alt", [h("div", { class: "split" }, [left, right])]);
  }

  /* ---------- CONTACT */
  function contact() {
    var c = C.contact; if (!c || c.show === false) return null;
    var links = contactLinks();
    return section("contact", "", [
      h("div", { class: "contact" }, [
        h("div", {}, [heading(c.title || "Contact"), c.blurb ? h("p", { class: "lede", text: c.blurb }) : null]),
        links.length
          ? h("ul", { class: "contact-list" }, links.map(function (l) {
              return h("li", {}, [
                h("a", { href: safeUrl(l.url), target: l.ext ? "_blank" : null, rel: l.ext ? "noopener" : null }, [
                  h("span", { class: "lbl", text: l.label }),
                  h("span", { class: "val", text: l.text }),
                ]),
              ]);
            }))
          : null,
      ]),
    ]);
  }

  /* ---------- FOOTER: an engineering-drawing title block */
  function footer() {
    var s = C.site || {};
    function cell(label, value, cls) {
      return h("div", { class: "cell " + (cls || "") }, [h("span", { class: "cl", text: label }), h("span", { class: "cv", text: value })]);
    }
    return h("footer", { class: "foot" }, [
      h("div", { class: "wrap" }, [
        h("div", { class: "tb", role: "group", "aria-label": "Page details" }, [
          cell("Title", "Engineering portfolio", "wide"),
          cell("Drawn by", s.shortName || s.name || ""),
          cell("Scale", "1:1"),
          cell("Sheet", "1 of 1"),
          cell("Rev", s.updated || ""),
        ]),
        h("p", { class: "legal", text: "© " + new Date().getFullYear() + " " + (s.name || "") + (s.location ? " · " + s.location : "") }),
      ]),
    ]);
  }

  /* ---------- CONTACT POP-UP (opened by the "Get in touch" button) */
  function contactDialog() {
    var links = contactLinks(); if (!links.length) return null;
    var c = C.contact || {};
    return h("dialog", { class: "dlg", id: "contact-dialog", "aria-labelledby": "contact-dialog-title" }, [
      h("div", { class: "dlg-head" }, [
        h("span", { text: "Contact" }),
        h("button", { class: "dlg-close", type: "button", "data-contact-close": "1" }, ["Close"]),
      ]),
      h("div", { class: "dlg-body" }, [
        h("h2", { id: "contact-dialog-title", text: c.dialogTitle || "Get in touch" }),
        c.dialogNote ? h("p", { text: c.dialogNote }) : null,
        h("ul", { class: "contact-list" }, links.map(function (l) {
          return h("li", {}, [
            h("a", { href: safeUrl(l.url), target: l.ext ? "_blank" : null, rel: l.ext ? "noopener" : null }, [
              h("span", { class: "lbl", text: l.label }),
              h("span", { class: "val", text: l.text }),
            ]),
          ]);
        })),
        c.email ? h("button", { class: "btn", type: "button", "data-copy-email": c.email }, ["Copy email address"]) : null,
      ]),
    ]);
  }

  function initContactDialog() {
    var dlg = document.getElementById("contact-dialog");
    if (!dlg) return;
    var root = document.documentElement;
    var canModal = typeof dlg.showModal === "function";

    document.querySelectorAll("[data-contact-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (!canModal) { location.hash = "contact"; return; }   // very old browsers: jump to the Contact section instead
        dlg.showModal();
        root.classList.add("dlg-open");
      });
    });

    // close with the Close button, or by clicking the dimmed area outside the box (Esc works by itself)
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg || (e.target.closest && e.target.closest("[data-contact-close]"))) dlg.close();
    });
    dlg.addEventListener("keydown", function (e) { if (e.key === "Escape") { e.preventDefault(); dlg.close(); } });
    dlg.addEventListener("close", function () { root.classList.remove("dlg-open"); });

    var copy = dlg.querySelector("[data-copy-email]");
    if (copy) copy.addEventListener("click", function () {
      var original = copy.textContent;
      function say(msg) { copy.textContent = msg; setTimeout(function () { copy.textContent = original; }, 1600); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copy.getAttribute("data-copy-email")).then(function () { say("Copied"); }, function () { say("Couldn't copy"); });
      } else { say("Couldn't copy"); }
    });
  }

  /* ---------- nav (built from whichever sections are visible) */
  function buildNav() {
    var nav = document.getElementById("nav"), brand = document.getElementById("brand");
    var s = C.site || {};
    if (brand) brand.textContent = s.shortName || s.name || "";
    if (!nav) return;
    [["work", C.work, "Work"], ["about", C.about, "About"], ["experience", C.experience, "Experience"],
     ["skills", C.skills || C.education, "Skills"], ["contact", C.contact, "Contact"]].forEach(function (r) {
      if (r[1] && r[1].show !== false) nav.appendChild(h("a", { href: "#" + r[0], text: r[2] }));
    });
  }

  /* ---------- search-engine data (Person) */
  function structuredData() {
    var s = C.site || {}, c = C.contact || {};
    var d = { "@context": "https://schema.org", "@type": "Person", name: s.name, jobTitle: "Mechanical Engineering student",
              alumniOf: { "@type": "CollegeOrUniversity", name: "University of Waterloo" }, description: (C.hero || {}).tagline };
    if (s.location) d.homeLocation = { "@type": "Place", name: s.location };
    if (c.linkedin) d.sameAs = [c.linkedin];
    var t = document.createElement("script"); t.type = "application/ld+json"; t.textContent = JSON.stringify(d);
    document.head.appendChild(t);
  }

  /* ---------- theme toggle (remembers the choice; falls back gracefully) */
  function initTheme() {
    var root = document.documentElement, btn = document.getElementById("theme"), KEY = "portfolio-theme", saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
    if (!btn) return;
    btn.addEventListener("click", function () {
      var cur = root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  /* ---------- go */
  initTheme();
  try {
    app.textContent = "";
    [hero(), typingLine(), work(), about(), experience(), skillsAndEducation(), contact(), footer(), contactDialog()].forEach(function (n) { if (n) app.appendChild(n); });
    initContactDialog();
    initTyping();
    buildNav();
    structuredData();
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  } catch (err) {
    fail(err && err.message);
  }
})();
