const stories = [
  {
    title: "🌧️ After the Rain",
    text: "Walking alone in the rain, a traveler felt lost and unsure. But when the clouds cleared, a rainbow appeared, reminding them that hope often arrives after the hardest storms."
  },
  {
    title: "📚 The Dream of Learning",
    text: "Late nights and endless studying tested a student's patience. Step by step, effort turned into knowledge, and knowledge turned into success on graduation day."
  },
  {
    title: "🌙 Midnight Thoughts",
    text: "Under the quiet moonlight, ideas began to form. What started as simple thoughts became powerful discoveries that changed everything."
  },
  {
    title: "🚶 Steps to Success",
    text: "Success did not come all at once. Small daily actions slowly built confidence until one day those tiny steps became a great victory."
  }
];

function generateStory() {
  const randomIndex = Math.floor(Math.random() * stories.length);
  document.getElementById("title").innerHTML = stories[randomIndex].title;
  document.getElementById("story").innerHTML = stories[randomIndex].text;
}