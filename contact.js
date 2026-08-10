/* Email contact enhancement.
   A mailto: link does nothing on a computer with no mail app configured, so on
   every page the address is shown as plain, selectable text inside the link.
   Where the browser can actually copy to the clipboard, we ADD a "Copy" button.
   The button is created here (not in the HTML) so it can never appear as a
   dead, clickable-looking element when copying isn't supported. */
(function () {
  var canCopy = !!(navigator.clipboard && navigator.clipboard.writeText);
  var blocks = document.querySelectorAll('.contact-email');
  for (var i = 0; i < blocks.length; i++) {
    (function (el) {
      var link = el.querySelector('a[href^="mailto:"]');
      if (!link || !canCopy) return; // address stays visible + selectable either way
      var addr = (link.textContent || '').trim();
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-email';
      btn.textContent = 'Copy address';
      btn.setAttribute('aria-label', 'Copy email address ' + addr);
      btn.addEventListener('click', function () {
        navigator.clipboard.writeText(addr).then(function () {
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function () { btn.textContent = 'Copy address'; btn.classList.remove('copied'); }, 1800);
        }).catch(function () {
          btn.textContent = 'Select & copy';
        });
      });
      el.appendChild(btn);
    })(blocks[i]);
  }
})();
