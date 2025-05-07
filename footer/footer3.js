document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg");
  
    if (!email.includes("@") || !email.includes(".")) {
      msg.textContent = "Please enter a valid email address.";
      msg.style.color = "#ff5e5e";
      return;
    }
  
    msg.textContent = "Subscribed successfully!";
    msg.style.color = "#00ffae";
    this.reset();
  });
  