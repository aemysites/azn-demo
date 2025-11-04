export default function decorate(block) {
  const rows = [...block.children];

  // First row: background image
  const imageRow = rows[0];
  const bgImg = imageRow ? imageRow.querySelector('img') : null;

  // Second row: logo
  const logoRow = rows[1];
  const logoImg = logoRow ? logoRow.querySelector('img') : null;

  // Third row: headline text
  const textRow = rows[2];
  const text = textRow ? textRow.querySelector('div') : null;

  // Clear the block
  block.innerHTML = '';

  // Add background image
  if (bgImg) {
    block.appendChild(bgImg);
  }

  // Add logo
  if (logoImg) {
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('hero-lok-logo');
    logoDiv.appendChild(logoImg);
    block.appendChild(logoDiv);
  }

  // Create content overlay
  if (text) {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('hero-lok-content');

    const headline = document.createElement('h1');
    headline.classList.add('hero-lok-headline');
    headline.textContent = text.textContent;

    contentDiv.appendChild(headline);
    block.appendChild(contentDiv);
  }

  block.classList.add('hero-lokelma');
}
