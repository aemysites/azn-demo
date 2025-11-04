export default function decorate(block) {
  // Get the text content from the first row
  const textParagraph = block.querySelector('p');

  if (textParagraph) {
    // Clear block and add text directly
    block.innerHTML = '';
    block.appendChild(textParagraph);
  }

  block.classList.add('callout-lokelma');
}
