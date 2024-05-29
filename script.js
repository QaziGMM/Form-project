const text = document.querySelectorAll("text");
const btn = document.getElementById("btn");

console.log(text);

function subment() {
  const firstname = document.getElementById("fname");
  const lastname = document.getElementById("lname");
  const birthday = document.getElementById("brt");
  //   const male = document.getElementById("male");
  //   const female = document.getElementById("femlae");
  const email = document.getElementById("email");
  const phoneno = document.getElementById("phoneno");
  //   const subject = document.getElementById("subject");

  console.log({
    firstname: firstname.value,
    lastname: lastname.value,
    birthday: birthday.value,
    // male: male.value,
    // female: female.value,
    email: email.value,
    phoneno: phoneno.value,
    // subject: subject.value,
  });
}
