function loadGame(gameURL) {
  const gameArea = document.getElementById("gameArea");
  gameArea.innerHTML = ""; // Clear previous game content
 
  const iframe = document.createElement("iframe");
  iframe.src = gameURL;
  iframe.style.width = "100%";
  iframe.style.height = "600px"; // Adjust height as needed
 
  gameArea.appendChild(iframe);
}