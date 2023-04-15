		function getRandomColor() {
		  const colors = ["#FF69B4", "#FF6EB4", "#FF73B4", "#FF78B4", "#FF7DB4", "#FF82B4", "#FF87B4", "#FF8CB4", "#FF91B4", "#FF96B4", "#FF9BB4", "#FFA0B4", "#FFA5B4", "#FFAAB4", "#FFAFB4", "#FFB4B4", "#FFB9B4", "#FFBEB4", "#FFC3B4", "#FFC8B4", "#FFCDB4", "#FFD2B4", "#FFD7B4", "#FFDCB4", "#FFE1B4", "#FFE6B4", "#FFEBB4", "#FFF0B4", "#FFF5B4", "#FFFAB4", "#FFB6C1", "#EE82EE", "#DA70D6", "#FF00FF", "#FF00FF", "#8B008B", "#800080", "#4B0082", "#BA55D3", "#9400D3", "#9932CC", "#8A2BE2", "#A020F0", "#9370DB", "#7B68EE", "#6A5ACD", "#483D8B", "#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF", "#FF00FF", "#8B008B", "#800080", "#4B0082", "#BA55D3", "#9400D3", "#9932CC", "#8A2BE2", "#A020F0", "#9370DB", "#7B68EE", "#6A5ACD", "#483D8B"];
		  let randomColor = colors[Math.floor(Math.random() * colors.length)];
		  return randomColor;
		}

		document.addEventListener("DOMContentLoaded", function() {
		  const elements = document.querySelectorAll("*");
		  for (let i = 0; i < elements.length; i++) {
			elements[i].style.color = getRandomColor();
		  }
		});