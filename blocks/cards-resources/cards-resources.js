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

    // Determine if this is a 3-column (with image) or 2-column (no image) format
    const hasImage = cells.length === 3;
    let contentCellIndex = hasImage ? 1 : 0;
    let linkCellIndex = hasImage ? 2 : 1;

    // First cell: Icon (only if 3-column format)
    if (hasImage && cells[0]) {
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

    // Content cell: Title and Description
    const body = document.createElement('div');
    body.className = 'card-resource-body';

    if (cells[contentCellIndex]) {
      // Extract title and description from cell content
      const cellContent = cells[contentCellIndex].innerHTML;

      // Check if content has bold title followed by description
      const strongMatch = cellContent.match(/<strong>(.*?)<\/strong>/);
      if (strongMatch) {
        // Has bold title - extract it
        const title = document.createElement('h3');
        title.textContent = strongMatch[1];
        body.appendChild(title);

        // Extract description (content after <br><br>)
        const descMatch = cellContent.match(/<\/strong><br><br>([\s\S]*)/);
        if (descMatch) {
          const description = document.createElement('p');
          description.innerHTML = descMatch[1];
          body.appendChild(description);
        }
      } else {
        // No bold formatting - use entire content as title
        const title = document.createElement('h3');
        title.textContent = cells[contentCellIndex].textContent.trim();
        body.appendChild(title);
      }
    }

    // Link cell: Button
    if (cells[linkCellIndex]) {
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';

      const link = cells[linkCellIndex].querySelector('a');
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
