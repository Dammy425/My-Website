// ----------------- INITIALIZE EMAILJS -----------------
(function () {
  emailjs.init("9XS5nRpak39j5WpQt");
})();

// ----------------- MOBILE MENU LOGIC -----------------
// This closes the menu automatically when a link is clicked
const navLinks = document.querySelectorAll(".navbar a");
const navToggle = document.getElementById("nav-toggle");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.checked = false;
  });
});

// ----------------- CONTACT FORM -----------------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const validationError = validateContactForm();
    if (validationError) {
      Swal.fire({
        icon: "error",
        title: "Check your form",
        text: validationError,
        confirmButtonColor: "#d33",
      });
      return;
    }

    const btn = this.querySelector("button");
    const originalText = btn.innerText;

    btn.innerText = "Sending...";
    btn.disabled = true;

    emailjs
      .sendForm("service_98pxfgj", "template_wbrwxvh", this)

      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Thanks For Contacting Us.",
          confirmButtonColor: "#28a745",
          timer: 2500,
          timerProgressBar: false,
          showConfirmButton: false,
        });
        contactForm.reset();
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An Error Occured. Please Try Again.",
          confirmButtonColor: "#d33",
        });
      })

      .finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
      });
  });
}

// ----------------- TESTIMONIAL MODAL -----------------
const testimonialForm = document.getElementById("testimonial-form");
const modal = document.getElementById("testimonial-modal");
const addBtn = document.getElementById("add-testimonial-btn");
const closeModal = document.getElementById("close-modal");

addBtn.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
});

const hideModal = () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
  testimonialForm.reset();
};

closeModal.addEventListener("click", hideModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

testimonialForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const validationError = validateTestimonialForm();
  if (validationError) {
    Swal.fire({
      icon: "error",
      title: "Check your form",
      text: validationError,
      confirmButtonColor: "#d33",
    });
    return;
  }

  const submitBtn = this.querySelector("button");
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  emailjs
    .sendForm("service_98pxfgj", "template_yi3o409", this)

    .then(() => {
      hideModal();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Thanks! Your testimonial has been sent.",
        confirmButtonColor: "#28a745",
        timer: 2500,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    })

    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An Error Occured. Please Try Again.",
        confirmButtonColor: "#d33",
      });
    })

    .finally(() => {
      submitBtn.innerText = "Send Testimonial";
      submitBtn.disabled = false;
    });
});
