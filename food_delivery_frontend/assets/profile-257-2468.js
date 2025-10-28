(function () {
  'use strict';

  /*
    Changelog:
    - Added keyboard-accessible tabs with proper aria-selected and tabindex updates.
    - Added bookmark toggle buttons to use aria-pressed and persist state in-memory.
    - Ensured lazy images get decoding=async and sizes via HTML; here we just add safety attributes when missing.
    - No business logic added; all changes are progressive enhancement.
  */

  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('screen-profile-257-2468');
    if (!root) return;

    // Tabs a11y management
    const tabs = [
      document.getElementById('tab-recipes'),
      document.getElementById('tab-videos'),
      document.getElementById('tab-tags')
    ].filter(Boolean);

    function setActiveTab(index) {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.setAttribute('tabindex', selected ? '0' : '-1');
      });
    }

    function onTabClick(e) {
      const idx = tabs.indexOf(e.currentTarget);
      if (idx >= 0) setActiveTab(idx);
    }

    function onTabKeydown(e) {
      const current = tabs.indexOf(document.activeElement);
      if (current < 0) return;
      let next = current;
      if (e.key === 'ArrowRight') next = (current + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
      if (next !== current) {
        e.preventDefault();
        tabs[next].focus();
        setActiveTab(next);
      }
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', onTabClick);
      tab.addEventListener('keydown', onTabKeydown);
    });

    // Bookmark toggles
    const bookmarkButtons = [
      document.getElementById('node-257-2686'),
      document.getElementById('node-257-2703'),
      document.getElementById('node-257-2719')
    ].filter(Boolean);

    bookmarkButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!pressed));
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    // Defensive: ensure lazy images have decoding=async and sizes where possible
    root.querySelectorAll('img[loading="lazy"]').forEach(img => {
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      if (!img.hasAttribute('sizes') && img.width) {
        img.setAttribute('sizes', '(max-width: 375px) ' + img.width + 'px, ' + img.width + 'px');
      }
    });
  });
})();
