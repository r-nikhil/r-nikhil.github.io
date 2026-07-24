(() => {
  const companion = document.querySelector('[data-nav-companion]');
  if (!companion) return;

  const desktopPointer = window.matchMedia('(min-width: 45.001rem) and (hover: hover) and (pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let animationFrame = 0;
  let idleTimer = 0;
  let tracking = false;

  const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));

  const render = () => {
    companion.style.setProperty('--companion-eye-x', `${currentX * 1.7}px`);
    companion.style.setProperty('--companion-eye-y', `${currentY * 1.25}px`);
    companion.style.setProperty('--companion-head-x', `${currentX * 0.55}px`);
    companion.style.setProperty('--companion-head-y', `${currentY * 0.4}px`);
    companion.style.setProperty('--companion-head-rotate', `${currentX * 1.2}deg`);
  };

  const animate = () => {
    currentX += (targetX - currentX) * 0.13;
    currentY += (targetY - currentY) * 0.13;
    render();

    const stillMoving = Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002;
    if (companion.dataset.active === 'true' || stillMoving) {
      animationFrame = window.requestAnimationFrame(animate);
    } else {
      animationFrame = 0;
    }
  };

  const startAnimation = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(animate);
  };

  const settle = () => {
    targetX = 0;
    targetY = 0;
    companion.dataset.active = 'false';
    startAnimation();
  };

  const followPointer = (event) => {
    const bounds = companion.getBoundingClientRect();
    const deltaX = event.clientX - (bounds.left + bounds.width / 2);
    const deltaY = event.clientY - (bounds.top + bounds.height / 2);
    const distance = Math.max(34, Math.hypot(deltaX, deltaY));

    targetX = clamp(deltaX / distance, -1, 1);
    targetY = clamp(deltaY / distance, -1, 1);
    companion.dataset.active = 'true';
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(settle, 1200);
    startAnimation();
  };

  const stopTracking = () => {
    if (!tracking) return;
    document.removeEventListener('pointermove', followPointer);
    window.clearTimeout(idleTimer);
    settle();
    tracking = false;
  };

  const syncTracking = () => {
    if (desktopPointer.matches && !reducedMotion.matches) {
      if (!tracking) {
        document.addEventListener('pointermove', followPointer, { passive: true });
        tracking = true;
      }
    } else {
      stopTracking();
    }
  };

  desktopPointer.addEventListener('change', syncTracking);
  reducedMotion.addEventListener('change', syncTracking);
  syncTracking();
})();
