/**
 * Cards Resources Block
 * Creates resource cards with icon, title, and CTA button
 */

export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'cards-resources-container';

  // Process each row as a card
  [...block.children].forEach((row) => {
    const card = document.createElement('div');
    card.className = 'card-resource';

    const cells = [...row.children];

    // First cell: Icon
    if (cells[0]) {
      const iconArea = document.createElement('div');
      iconArea.className = 'card-resource-icon';

      const picture = cells[0].querySelector('picture');
      if (picture) {
        const img = picture.querySelector('img');
        if (img) {
          // Fix Figma URLs to point to local images
          if (img.src.includes('figma.com')) {
            const filename = img.src.split('/').pop();
            img.src = `./images/${filename}`;
          }
          iconArea.appendChild(img);
        }
      }

      card.appendChild(iconArea);
    }

    // Remaining cells: Content (title and link)
    const body = document.createElement('div');
    body.className = 'card-resource-body';

    // Second cell: Title
    if (cells[1]) {
      const title = document.createElement('h3');
      title.textContent = cells[1].textContent.trim();
      body.appendChild(title);
    }

    // Third cell: Link/Button
    if (cells[2]) {
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';

      const link = cells[2].querySelector('a');
      if (link) {
        link.textContent = link.textContent.trim() || 'Learn More';
        buttonContainer.appendChild(link);
      }

      body.appendChild(buttonContainer);
    }

    card.appendChild(body);
    container.appendChild(card);
  });

  block.textContent = '';
  block.appendChild(container);
}
