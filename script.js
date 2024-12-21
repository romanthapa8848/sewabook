// Example: Basic search functionality
document.querySelector("button").addEventListener("click", () => {
  const searchTerm = document.querySelector("input").value.toLowerCase();
  const categories = document.querySelectorAll(".grid div");

  categories.forEach((category) => {
    if (category.textContent.toLowerCase().includes(searchTerm)) {
      category.style.display = "block";
    } else {
      category.style.display = "none";
    }
  });
});
