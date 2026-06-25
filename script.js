// ===== Navigation =====
function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== Stars (Splash Screen) =====
window.addEventListener('DOMContentLoaded', function () {
  const starsEl = document.getElementById('stars');
  if (starsEl) {
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const sz = Math.random() * 2.5 + 0.5;
      s.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${sz}px;
        height: ${sz}px;
        animation-delay: ${Math.random() * 3}s;
        animation-duration: ${Math.random() * 2 + 2}s;
      `;
      starsEl.appendChild(s);
    }
  }

  // ===== Filter Tabs =====
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ===== Rating Stars =====
  document.querySelectorAll('.rate-stars').forEach(group => {
    group.querySelectorAll('.rate-star').forEach((star, i, arr) => {
      star.addEventListener('click', () => {
        arr.forEach((s, j) => {
          s.classList.toggle('on', j <= i);
          s.style.color = j <= i ? '#fbbf24' : '#e5e7eb';
        });
      });
    });
  });
});