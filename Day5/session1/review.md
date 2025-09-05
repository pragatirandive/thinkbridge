##  HTML, CSS, and JavaScript Basics – Quick Review

###  HTML (Structure)
**HTML (HyperText Markup Language)** gives structure to web pages.
 Common semantic tags:
   `<header>` – Top section of the page.
   `<nav>` – Navigation menu with links.
   `<main>` – Main content area.
   `<section>` – Group related content.
   `<article>` – Standalone piece of content.
   `<footer>` – Bottom section with info/links.
 Attributes like `id`, `class`, `src`, `href` help in linking & styling.


###  CSS (Styling)
 **CSS (Cascading Style Sheets)** styles HTML elements.
 **Selectors**:
   `element` (e.g., `p { color: blue; }`)
   `.class` (e.g., `.btn { background: red; }`)
   `#id` (e.g., `#main { padding: 10px; }`)
 **Box Model**:
   Content → Padding → Border → Margin
 **Typography**: font-family, font-size, line-height, color.
 **Best Practices**:
   Use `normalize.css` or CSS reset.
   Keep styles in an external `styles.css`.



###  JavaScript (Behavior)
 **JavaScript** adds interactivity to web pages.
 **Variables**:
   `let` and `const` (modern, block-scoped)
   `var` (function-scoped, avoid if possible)
 **Control Flow**: `if`, `else`, `for`, `while`

 **DOM Manipulation**:
   `document.querySelector()` to select elements
   `.innerText`, `.innerHTML`, `.style` to modify
   
 **Events**:
  document.getElementById("btn").addEventListener("click", () => {
    alert("Button clicked!");
  });
