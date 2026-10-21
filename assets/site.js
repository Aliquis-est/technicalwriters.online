(function () {
  // Баннер cookie: показываем, пока посетитель не нажал «Принять»
  var KEY = 'kb.cookie';
  var banner = document.getElementById('cookie');
  var accepted = false;
  try { accepted = localStorage.getItem(KEY) === '1'; } catch (e) {}
  if (banner && !accepted) {
    banner.hidden = false;
    banner.querySelector('button').addEventListener('click', function () {
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
      banner.hidden = true;
    });
  }

  // Оглавление (в боковой панели и чипсы на телефоне): подсвечиваем раздел, который сейчас на экране
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-toc] a'));
  if (!links.length) return;
  var ids = [];
  links.forEach(function (a) { var id = a.getAttribute('href').split('#')[1]; if (ids.indexOf(id) < 0) ids.push(id); });
  var sections = ids.map(function (id) { return document.getElementById(id); });
  function update() {
    var offset = window.innerWidth <= 900 ? 160 : 120, cur = ids[0];
    sections.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < offset) cur = ids[i]; });
    links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href').split('#')[1] === cur); });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
