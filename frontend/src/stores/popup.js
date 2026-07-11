import { atom } from "nanostores";

export const popupOpen = atom(false);

export const openPopup = () => popupOpen.set(true);
export const closePopup = () => popupOpen.set(false);

const AUTO_OPEN_DELAY_MS = 3000;
const SESSION_KEY = "popupAutoOpened";

// Auto-opens once per browser session (not on every page load in Astro's
// multi-page model), mirroring the old SPA's once-per-session behavior.
export function scheduleAutoOpen() {
  if (typeof window === "undefined") return;
  if (sessionStorage.getItem(SESSION_KEY)) return;

  const timer = setTimeout(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    openPopup();
  }, AUTO_OPEN_DELAY_MS);

  return () => clearTimeout(timer);
}
