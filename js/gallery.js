(function () {
  var filters = document.querySelectorAll('.gallery-filter button');
  var items = document.querySelectorAll('.gallery-item');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      filters.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      items.forEach(function (item) {
        item.hidden = filter !== 'all' && item.getAttribute('data-category') !== filter;
      });
    });
  });

  var dialog = document.getElementById('lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  var dialogImg = dialog.querySelector('img');
  var caption = dialog.querySelector('.lightbox-caption');

  items.forEach(function (item) {
    item.querySelector('button').addEventListener('click', function () {
      var img = item.querySelector('img');
      dialogImg.src = img.src;
      dialogImg.alt = img.alt;
      caption.textContent = item.querySelector('figcaption').textContent;
      dialog.showModal();
    });
  });

  dialog.querySelector('.lightbox-close').addEventListener('click', function () {
    dialog.close();
  });

  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
