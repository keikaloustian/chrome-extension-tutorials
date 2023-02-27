const article = document.querySelector("article");

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);

  // matchAll returns an Iterator, which needs to be converted to an array
  const wordCount = [...words].length;

  // Average reading speed is 200 to 300 words/min
  const readingTime = Math.round(wordCount / 200);

  const readTimeMessage = document.createElement("p");
  readTimeMessage.classList.add("color-secondary-text", "type--caption");
  readTimeMessage.textContent = `⏱️ ${readingTime} min read`;

  const title = article.querySelector("h1");
  // Optional chaining (?.) calls an object's property or method if valid; othewise short circuits and evaluates to undefined instead of throwing an error
  const date = article.querySelector("time")?.parentNode;

  // Nullish coalescing operator (??) returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
  (date ?? title).insertAdjacentElement("afterend", readTimeMessage);
}
