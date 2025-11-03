/**
 * Cards Lokelma Block - Efficacy Cards with Icons
 * Extracted from Figma: node-id=677-6811 (Group 107303)
 * Page: 1.0 Post-gate HCP Homepage – Slide 1_P3
 */

export default function decorate(block) {
  const rows = [...block.children];
  const container = document.createElement('div');
  container.className = 'cards-lokelma-container';

  rows.forEach((row) => {
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
          if (sections.length > 2) {
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'card-lokelma-content';

            // All sections except first and last are content
            for (let i = 1; i < sections.length - 1; i++) {
              const contentP = document.createElement('p');
              contentP.innerHTML = sections[i];
              contentWrapper.appendChild(contentP);
            }

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
  block.append(container);
}
