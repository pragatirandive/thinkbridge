# Selecting Elements

document.getElementById("id") → Select element by ID.

document.getElementsByName("name") → Select elements by name (NodeList).

document.getElementsByTagName("tag") → Select elements by tag name (HTMLCollection).

document.querySelector("selector") → Select the first element matching CSS selector.

document.querySelectorAll("selector") → Select all elements matching CSS selector (NodeList).

# Creating & Modifying Elements

document.createElement("tag") → Create new element.

element.innerHTML → Get/set HTML content.

element.textContent → Get/set text content.

element.setAttribute(attr, value) → Set an attribute.

element.getAttribute(attr) → Get an attribute value.

element.style.property → Change inline style.

parent.appendChild(child) → Add element as child.

parent.insertBefore(newNode, referenceNode) → Insert element before reference node.

# Events & Event Listeners

element.addEventListener(event, function) → Attach an event handler.

click → Fires when element is clicked.

mouseenter → Fires when cursor enters element.

mouseleave → Fires when cursor leaves element.

input → Fires when input value changes.

submit → Fires on form submission.

# Window & Document Events

window.onload → Fires when the page fully loads.

document.addEventListener("DOMContentLoaded", function) → Fires when DOM is ready.

window.scrollTo(x, y) → Scroll window to specific coordinates.

# Quick Example
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("admissionForm");
  const submitBtn = form.querySelector("button[type='submit']");

  const heading = document.createElement("h2");
  heading.textContent = "Admission Form";
  form.insertBefore(heading, form.firstChild);

  const p = document.createElement("p");
  p.innerHTML = "Review your details before submitting.";
  form.insertBefore(p, submitBtn);

  submitBtn.addEventListener("click", e => e.preventDefault());

  form.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "black";
    heading.style.color = "white";
  });
  form.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = "white";
    heading.style.color = "black";
  });
});