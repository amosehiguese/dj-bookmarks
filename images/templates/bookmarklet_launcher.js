(function () {
  if (!window.bookmarklet) {
    bookmarklet_js = document.body.appendChild(
      document.createElement('script')
    );
    bookmarklet_js.type = 'module';
    bookmarklet_js.src =
      '//mysite.com:8000/static/js/bookmarklet.js?r=' +
      Math.floor(Math.random() * 99999999999999);
    window.bookmarklet = true;
  } else {
    bookmarkletLaunch();
  }
})();
