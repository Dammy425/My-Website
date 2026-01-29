// Initialize EmailJS
(function () {
  emailjs.init("9XS5nRpak39j5WpQt"); // Your User ID
})();

// Get the contact form
const form = document.getElementById("contact-form");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page refresh

  // --- 1. Send admin notification ---
  emailjs
    .sendForm("service_98pxfgj", "template_admin", this) // Replace with your admin template ID
    .then(
      function () {
        console.log("Admin notification sent ✅");
      },
      function (error) {
        console.log("Admin email failed ❌", error);
      },
    );

  // --- 2. Send auto-reply to user ---
  emailjs
    .sendForm("service_98pxfgj", "template_opoai6f  ", this) // Replace with your auto-reply template ID
    .then(
      function () {
        console.log("Auto-reply sent ✅");
        alert(
          "Thanks! Your message has been sent. You should receive a confirmation email shortly.",
        );
        form.reset(); // Clear the form
      },
      function (error) {
        console.log("Auto-reply failed ❌", error);
        alert("Something went wrong. Try again later.");
      },
    );
});
