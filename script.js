const stories = [
  "🌧️ Walking alone, then 🌈 finding hope",
  "📚 Studying hard → 🎓 achieving dreams",
  "🌙 Thinking deeply → ✨ discovering ideas",
  "🚶 Small steps → 🏆 big success"
];

function generateStory() {
  const storyElement = document.getElementById("story");
  if (!storyElement) {
    console.error("Element with id 'story' not found!");
    return;
  }
  storyElement.innerHTML =
    stories[Math.floor(Math.random() * stories.length)];
}