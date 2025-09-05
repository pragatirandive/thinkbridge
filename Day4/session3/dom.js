
const Username = document.getElementById("fullName");   //find username
console.log(Username);

const DOB = document.getElementById("dob");
console.log(DOB);

const email = document.getElementById("email");
console.log(email);

const phone = document.getElementById("phone");
console.log(phone);

const gender = document.getElementsByName("gender");
console.log(gender);

const course = document.getElementsByName("course");
console.log(course);

// const options = document.querySelectorAll("options");
// console.log(options);

const year = document.getElementsByName("year");
console.log(year);

const address = document.getElementsByName("address");
console.log(address);

const button = document.getElementsByTagName("button");
console.log(button);

//****************Adding events*************************** */

document.addEventListener("DOMContentLoaded", () => {
  // Select the form and the submit button
  const form = document.getElementById("admissionForm");
  const submitBtn = form.querySelector("button[type='submit']");

  // Create a paragraph and insert before the button
  const p = document.createElement("p");
  p.textContent = "Please review your details before submitting.";
  p.className = "info-text";
  p.id = "infoParagraph";
  p.innerHTML = "<strong> Please review your details before submitting <strong>";
  //set attribute
  p.setAttribute("id", "para");
  p.setAttribute("class", "info");
  //get attribute
  console.log(p.getAttribute("id")); // "para1"

  form.insertBefore(p, submitBtn);

  //after page loaded
  window.onload = () => {
    console.log("Page fully loaded");
  };
  //add event listner after clicking button 
  submitBtn.addEventListener("click", () => {
    console.log("Button clicked!");
  });

  
  // When cursor enters the form
    const h2 = document.getElementsByTagName("h2");
    console.log("heading",h2);

  form.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "black"; // page turns black
    
  });

  // When cursor leaves the form
  form.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = ""; // revert to default
  });
  
    h2.style.color = "black";

});

  //chnaging style
  p.style.color = "red";
  p.style.fontSize = "30px";

 //scrolling window
    window.scrollTo(0, 500); 
