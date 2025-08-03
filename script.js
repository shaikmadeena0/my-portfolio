// Form validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from actually submitting

  const name = document.querySelector("input[type='text']").value.trim();
  const email = document.querySelector("input[type='email']").value.trim();
  const message = document.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Message sent successfully! (This is a demo form)");
  this.reset(); // Clear the form
});

// Smooth scroll on nav click
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
