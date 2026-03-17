const btn = document.getElementById('dyslexia-toggle');

function applyMode(enabled) {
  document.body.classList.toggle('dyslexia-mode', enabled);
  btn.setAttribute('aria-pressed', String(enabled));
}

applyMode(localStorage.getItem('dyslexiaMode') === 'true');

btn.addEventListener('click', () => {
  const next = !document.body.classList.contains('dyslexia-mode');
  localStorage.setItem('dyslexiaMode', String(next));
  applyMode(next);
});
