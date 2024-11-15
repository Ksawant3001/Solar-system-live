function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
}
  createStars();

//   Realistic Visuals: Immerse yourself in the beauty of space with meticulously designed planet models, complete with accurate proportions and textures. 🪐🎨

// Orbital Dynamics: Witness the graceful dance of planets as they orbit the sun, following their real-life trajectories and speeds. 🌍🕊️

// Interactive Moon Observe Earth's moon orbiting around our home planet in an accurate representation of its elliptical path. 🌕🌍

// Educational Insight Gain a deeper understanding of our solar system's composition, planetary order, and relative distances through this educational visualization. 📚🌌