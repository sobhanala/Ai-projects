document.addEventListener('DOMContentLoaded', function () {
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
  const scroll = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scroll, { scrollOffset: 50 });
});
