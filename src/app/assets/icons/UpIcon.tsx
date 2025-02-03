import { IconButton } from "@mui/material";

export default function UpIcon() {
  function scrollToTop(duration: number) {
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const startTime = performance.now();

    function scrollStep(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Calculating new scroll position
      const newScrollTop = start * (1 - progress);
      window.scrollTo(0, newScrollTop);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
  return (
    <IconButton onClick={() => scrollToTop(500)} title="Back To Top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="#ffffff"
          d="M11 18V9.75L7.75 13L7 12.34l4.5-4.5l4.5 4.5l-.75.66L12 9.75V18zm.5-15a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4"
        />
      </svg>
    </IconButton>
  );
}
