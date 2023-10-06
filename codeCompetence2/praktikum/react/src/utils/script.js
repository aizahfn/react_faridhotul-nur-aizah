// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

function checkForm() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (firstName == "") {
    alert("Please enter a valid last name");
  }

  if (lastName == "") {
    alert("Please enter a valid last name");
  }

  if (email == "") {
    alert("Please enter a valid email");
  }

  if (message == "") {
    alert("Please enter a valid message");
  }
  //  else {
  //   alert("Berhasil submit");
  // }
}

// formcontact.addEventListener("button", (e) => {
//   e.preventDefault();
//   const firstName = document.getElementById("first-name").value;
//   const lastName = document.getElementById("last-name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   if (firstName && lastName && email && message) {
//     alert(`
//     First name: ${firstName}
//     Last name: ${lastName}
//     Email: ${email}
//     Message: ${message}

//     Berhasil Submit!
//     `);
//     formcontact.reset();
//   }
// });
