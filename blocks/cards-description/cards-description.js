/**
 * Cards Description Block
 * Creates cards with image, title, and description
 *
 * IMPORTANT NOTES:
 * - EDS does NOT parse markdown syntax (###, ##) inside table cells
 * - This decorator includes special logic to handle ### prefixes in plain text
 * - It parses <br> elements to separate title from description
 * - Text truncation (3 lines) is handled in CSS using -webkit-line-clamp
 * - All cards in a row maintain equal heights via grid-auto-rows: 1fr
 */

export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'cards-description-container';

  // Process each row as a card
  [...block.children].forEach((row) => {
    const card = document.createElement('div');
    card.className = 'card-description';

    const cells = [...row.children];

    // Create wrapper for card content
    const wrapper = document.createElement('div');
    wrapper.className = 'card-description-wrapper';

    // First cell: Image
    if (cells[0]) {
      const imageArea = document.createElement('div');
      imageArea.className = 'card-description-image';

      const picture = cells[0].querySelector('picture');
      if (picture) {
        imageArea.appendChild(picture);
      }

      wrapper.appendChild(imageArea);
    }

    // Content area for title and description
    const body = document.createElement('div');
    body.className = 'card-description-body';

    // Second cell: Title + Description
    if (cells[1]) {
      // Extract title (h1-h6) or parse from text with ### prefix
      const titleElement = cells[1].querySelector('h1, h2, h3, h4, h5, h6');
      if (titleElement) {
        const title = document.createElement('h3');
        title.textContent = titleElement.textContent.trim();
        body.appendChild(title);
      } else {
        // WORKAROUND: EDS doesn't parse ### inside table cells
        // We manually detect ### prefix and parse <br> separators
        const firstPara = cells[1].querySelector('p');
        if (firstPara) {
          // Split content by <br> elements
          const parts = [];
          let currentText = '';

          Array.from(firstPara.childNodes).forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              currentText += node.textContent;
            } else if (node.nodeName === 'BR') {
              if (currentText.trim()) {
                parts.push(currentText.trim());
                currentText = '';
              }
            }
          });

          if (currentText.trim()) {
            parts.push(currentText.trim());
          }

          // Check if first part starts with ###
          if (parts.length > 0 && parts[0].startsWith('###')) {
            const title = document.createElement('h3');
            title.textContent = parts[0].replace(/^###\s*/, '').trim();
            body.appendChild(title);

            // Add remaining parts as description
            if (parts.length > 1) {
              const description = document.createElement('p');
              description.textContent = parts.slice(1).join(' ').trim();
              body.appendChild(description);
            }
          }
        }
      }

      // Extract all paragraphs for description (skip if already processed above)
      const paragraphs = cells[1].querySelectorAll('p');
      if (!body.querySelector('h3')) {
        paragraphs.forEach((p) => {
          const description = document.createElement('p');
          description.textContent = p.textContent.trim();
          body.appendChild(description);
        });
      }
    }

    wrapper.appendChild(body);
    card.appendChild(wrapper);
    container.appendChild(card);
  });

  block.textContent = '';
  block.appendChild(container);
}
