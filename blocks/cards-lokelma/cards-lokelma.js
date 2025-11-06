/**
 * Cards Lokelma Block - Efficacy Cards with Icons
 * Extracted from Figma: node-id=677-6820 (Group 107302)
 * Page: 1.0 Post-gate HCP Homepage – Slide 1_P3
 * Pixel-perfect match to Figma specifications
 */

export default function decorate(block) {
  const rows = [...block.children];

  // Check if first row contains a heading (if it has no picture, it's likely the heading)
  let headingElement = null;
  let cardRows = rows;

  if (rows.length > 0) {
    const firstRow = rows[0];
    const firstCell = firstRow.querySelector('div');
    if (firstCell && !firstCell.querySelector('picture')) {
      // This is the heading row
      const headingText = firstCell.textContent.trim();
      if (headingText) {
        headingElement = document.createElement('h2');
        headingElement.className = 'cards-lokelma-heading';
        headingElement.innerHTML = firstCell.innerHTML;
        cardRows = rows.slice(1); // Skip the heading row for cards
      }
    }
  }

  const container = document.createElement('div');
  container.className = 'cards-lokelma-container';

  cardRows.forEach((row) => {
    const cells = [...row.children];

    cells.forEach((cell) => {
      if (cell.textContent.trim()) {
        const card = document.createElement('div');
        card.className = 'card-lokelma';

        // Get the paragraph element that contains everything
        const paragraph = cell.querySelector('p');
        if (!paragraph) return;

        // Extract the icon (picture element)
        const picture = paragraph.querySelector('picture');
        if (picture) {
          const iconWrapper = document.createElement('div');
          iconWrapper.className = 'card-lokelma-icon';
          const img = picture.querySelector('img');
          if (img) {
            const clonedImg = img.cloneNode(true);
            // Fix Figma URLs to point to local images
            if (clonedImg.src.includes('figma.com')) {
              const filename = clonedImg.src.split('/').pop();
              clonedImg.src = `./images/${filename}`;
            }
            iconWrapper.appendChild(clonedImg);
          }
          card.appendChild(iconWrapper);
        }

        // Get the HTML content and split by double <br> tags
        const htmlContent = paragraph.innerHTML;
        // Remove the picture element from content
        const contentWithoutPicture = htmlContent.replace(/<picture>[\s\S]*?<\/picture>/g, '');

        // Split by double line breaks to separate sections
        const sections = contentWithoutPicture.split(/<br\s*\/?>\s*<br\s*\/?>/i).map(s => s.trim()).filter(s => s);

        if (sections.length > 0) {
          // First section is the title
          const titleWrapper = document.createElement('div');
          titleWrapper.className = 'card-lokelma-title';
          const titleP = document.createElement('p');
          titleP.innerHTML = sections[0];
          titleWrapper.appendChild(titleP);
          card.appendChild(titleWrapper);

          // Middle sections are content (bullet points)
          // Create a proper unordered list
          if (sections.length > 2) {
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'card-lokelma-content';

            // Create UL element for bullet points
            const ul = document.createElement('ul');

            // All sections except first and last are content (bullet items)
            for (let i = 1; i < sections.length - 1; i++) {
              const li = document.createElement('li');
              li.innerHTML = sections[i];
              ul.appendChild(li);
            }

            contentWrapper.appendChild(ul);
            card.appendChild(contentWrapper);
          }

          // Last section is the citation
          if (sections.length > 1) {
            const citationWrapper = document.createElement('div');
            citationWrapper.className = 'card-lokelma-citation';
            const citationP = document.createElement('p');
            citationP.innerHTML = sections[sections.length - 1];
            citationWrapper.appendChild(citationP);
            card.appendChild(citationWrapper);
          }
        }

        container.appendChild(card);
      }
    });
  });

  block.textContent = '';
  if (headingElement) {
    block.append(headingElement);
  }
  block.append(container);
}
