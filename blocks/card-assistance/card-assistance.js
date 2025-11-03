/**
 * Card Assistance Block
 * Payment Assistance Card with headline section + 2-column content
 */

export default function decorate(block) {
  // Create main card structure
  const cardHeadline = document.createElement('div');
  cardHeadline.className = 'card-headline';

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const contentArea = document.createElement('div');
  contentArea.className = 'content-area';

  const imageArea = document.createElement('div');
  imageArea.className = 'image-area';

  // Process all rows
  const rows = [...block.children];

  rows.forEach((row, index) => {
    const cells = [...row.children];

    if (index === 0) {
      // First row: headline section
      cardHeadline.innerHTML = cells[0].innerHTML;
    } else {
      // Remaining rows: split between content and image
      cells.forEach((cell) => {
        const hasPicture = cell.querySelector('picture');

        if (hasPicture) {
          // This cell contains the image
          const picture = cell.querySelector('picture');
          const img = picture.querySelector('img');

          // Fix localhost URLs
          if (img && img.src.includes('localhost:3845')) {
            const filename = img.src.split('/').pop();
            img.src = `./images/${filename}`;
          }

          imageArea.appendChild(picture);
        } else {
          // This cell contains content
          contentArea.innerHTML += cell.innerHTML;
        }
      });
    }
  });

  // Find and style the button link
  const links = contentArea.querySelectorAll('a');
  links.forEach((link) => {
    // The last link should be the button
    if (link.textContent.trim() === 'Patient Website' || link.parentElement.tagName === 'P' && !link.parentElement.querySelector('ol')) {
      link.classList.add('button-link');
    }
  });

  // Clear block and rebuild
  block.textContent = '';
  block.appendChild(cardHeadline);

  cardContent.appendChild(contentArea);
  cardContent.appendChild(imageArea);
  block.appendChild(cardContent);
}
