const specialChars = ["@", "#", "$", "%", "^", "&", "*", "!", "(", ")", "_", "+", "="];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function hasSpecialCharacter(value) {
  for (let i = 0; i < specialChars.length; i++) {
    if (value.includes(specialChars[i])) {
      return true;
    }
  }

  return false;
}

function hasNumber(value) {
  for (let i = 0; i < numbers.length; i++) {
    if (value.includes(numbers[i])) {
      return true;
    }
  }

  return false;
}

function hasOnlyNumbers(value) {
  for (let i = 0; i < value.length; i++) {
    if (!numbers.includes(value[i])) {
      return false;
    }
  }

  return true;
}

function isValidEmail(email) {
  if (!email.includes("@")) {
    return false;
  }

  if (!email.includes(".")) {
    return false;
  }

  return true;
}

function validateContactForm() {
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("c-email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (hasSpecialCharacter(firstname)) {
    return "First name cannot contain special characters.";
  }

  if (hasNumber(firstname)) {
    return "First name cannot contain numbers.";
  }

  if (hasSpecialCharacter(lastname)) {
    return "Last name cannot contain special characters.";
  }

  if (hasNumber(lastname)) {
    return "Last name cannot contain numbers.";
  }

  if (!isValidEmail(email)) {
    return "Enter a valid email address.";
  }

  if (email.length < 12) {
    return "Email must be at least 12 characters.";
  }

  if (phone.length !== 11) {
    return "Phone number must be exactly 11 digits.";
  }

  if (!hasOnlyNumbers(phone)) {
    return "Phone number can only contain numbers.";
  }

  if (message.length < 10) {
    return "Message is too short.";
  }

  return "";
}

function validateTestimonialForm() {
  const tName = document.getElementById("t-name").value.trim();
  const tRole = document.getElementById("t-role").value.trim();
  const tEmail = document.getElementById("t-email").value.trim();
  const tMessage = document.getElementById("t-message").value.trim();

  if (hasSpecialCharacter(tName)) {
    return "Name cannot contain special characters.";
  }

  if (hasNumber(tName)) {
    return "Name cannot contain numbers.";
  }

  if (tRole.length < 3) {
    return "Role is too short.";
  }

  if (hasSpecialCharacter(tRole)) {
    return "Position cannot contain special characters.";
  }

  if (hasNumber(tRole)) {
    return "Position cannot contain numbers.";
  }

  if (!isValidEmail(tEmail)) {
    return "Enter a valid email address.";
  }

  if (tEmail.length < 12) {
    return "Email must be at least 12 characters.";
  }

  if (tMessage.length < 15) {
    return "Testimonial is too short.";
  }

  return "";
}
