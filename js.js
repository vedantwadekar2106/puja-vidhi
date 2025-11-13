
  <script>
    window.addEventListener("load", () => {
      const popup = document.getElementById("popup");
      const audio = document.getElementById("chant");

      popup.style.display = "flex";

      // Try to unmute after a small delay
      setTimeout(() => {
        audio.muted = false;
        audio.play().catch((err) => {
          console.log("Autoplay blocked — waiting for user interaction.");
          document.body.addEventListener("click", () => {
            audio.muted = false;
            audio.play();
          }, { once: true });
        });
      }, 1000);

      // Optional: Hide popup after 5 seconds
      setTimeout(() => {
        popup.style.display = "none";
      }, 5000);
    });
  </script>