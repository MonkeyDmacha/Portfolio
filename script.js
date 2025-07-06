const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

document.querySelectorAll(".project").forEach((proj) => {
  observer.observe(proj);
});

// ✅ Initialize EmailJS with your public key
(function () {
  emailjs.init("dD86X7CbnVJ1WUK-L"); // Your Public API key
})();

// ✅ Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_85m1l0s", "template_10iyih7", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (error) => {
      console.log("EmailJS Error →", error);
      alert("❌ Something went wrong. Please try again.");
    });
});
