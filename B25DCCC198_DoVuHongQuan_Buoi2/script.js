const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "☀️";
  } else {
    darkBtn.textContent = "🌙";
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("tel").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Vui lòng nhập họ tên.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ.");
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;

  if (phone !== "" && !phoneRegex.test(phone)) {
    alert("Số điện thoại phải có đúng 10 chữ số.");
    return;
  }

  if (subject === "") {
    alert("Vui lòng nhập tiêu đề.");
    return;
  }

  if (message.length < 10) {
    alert("Tin nhắn phải có ít nhất 10 ký tự.");
    return;
  }

  alert("Gửi thông tin thành công!");

  form.reset();
});

const textarea = document.getElementById("message");
const counter = document.getElementById("charCount");

textarea.addEventListener("input", function () {
  let length = textarea.value.length;

  counter.textContent = length + " ký tự";
});
