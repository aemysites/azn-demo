export default function decorate(block) {
  // Get all rows from the block
  const rows = [...block.children];

  // First row should be the section heading
  const headingRow = rows[0];
  if (headingRow) {
    const heading = headingRow.querySelector('p');
    if (heading) {
      heading.classList.add('cards-eff-heading');
    }
  }

  // Create container for cards
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-eff-container');

  // Process remaining rows as cards (should be 2 cards)
  rows.slice(1).forEach((row) => {
    const card = document.createElement('div');
    card.classList.add('cards-eff-card');

    // Extract content from row cells
    const cells = [...row.children];

    // First cell: Icon
    const iconCell = cells[0];
    if (iconCell) {
      const img = iconCell.querySelector('img');
      if (img) {
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('cards-eff-icon');
        iconDiv.appendChild(img.cloneNode(true));
        card.appendChild(iconDiv);
      }
    }

    // Second cell: Content
    const contentCell = cells[1];
    if (contentCell) {
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('cards-eff-content');

      // Parse the cell content
      const cellHTML = contentCell.innerHTML;

      // Split content by double line breaks to separate sections
      const sections = cellHTML.split('<br><br>');

      if (sections.length > 0) {
        // First section is the heading
        const heading = document.createElement('h3');
        heading.classList.add('cards-eff-card-heading');
        heading.innerHTML = sections[0];
        contentDiv.appendChild(heading);

        // Middle sections are bullet points
        for (let i = 1; i < sections.length - 1; i++) {
          const bulletSection = document.createElement('div');
          bulletSection.classList.add('cards-eff-bullets');
          bulletSection.innerHTML = sections[i];
          contentDiv.appendChild(bulletSection);
        }

        // Last section is the study box
        if (sections.length > 1) {
          const studyBox = document.createElement('div');
          studyBox.classList.add('cards-eff-study-box');
          studyBox.innerHTML = sections[sections.length - 1];
          contentDiv.appendChild(studyBox);
        }
      }

      card.appendChild(contentDiv);
    }

    cardsContainer.appendChild(card);
  });

  // Clear block and append new structure
  block.innerHTML = '';
  if (headingRow) {
    block.appendChild(headingRow);
  }
  block.appendChild(cardsContainer);

  block.classList.add('cards-efficacy');
}
