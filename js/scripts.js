document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");

    // Remove active class from all buttons and content
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Add active class to selected button and content
    button.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});
