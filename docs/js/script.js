let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let footer = document.querySelector("footer")
  footer.classList.toggle("show-animate" , this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
};

window.onload = function () {
  const spans = document.querySelectorAll(
    ".skills-content .progress .bar span"
  );
  spans.forEach((span) => {
    span.classList.add("filled");
  });
};

// some new feature testing

window.onload = function () {
  const spans = document.querySelectorAll(
    ".skills-content .progress .bar span"
  );
  const progressPercentages = document.querySelectorAll(".progress h3 span");

  // Function to fill bars and count percentages
  const fillBars = () => {
    spans.forEach((span) => {
      span.classList.add("filled");
    });

    progressPercentages.forEach((percentage) => {
      const value = parseInt(percentage.textContent);
      let count = 0;
      const interval = setInterval(() => {
        if (count < value) {
          count++;
          percentage.textContent = count + "%";
        } else {
          clearInterval(interval);
        }
      }, 80); // Adjust the speed of the count up
    });
  };

  // Intersection Observer to detect when skills section is in view
  const skillsSection = document.getElementById("skills");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fillBars();
        observer.unobserve(skillsSection); // Stop observing after filling
      }
    });
  });

  observer.observe(skillsSection);
};
