export default function decorate(block) {
  // Get all rows from the block
  const rows = [...block.children];

  // Create container for cards
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-res-container');

  // Process each row as a card
  rows.forEach((row) => {
    const card = document.createElement('div');
    card.classList.add('cards-res-card');

    const cells = [...row.children];

    // First cell: Icon
    const iconCell = cells[0];
    if (iconCell) {
      const iconSection = document.createElement('div');
      iconSection.classList.add('cards-res-icon-section');

      const img = iconCell.querySelector('img');
      if (img) {
        iconSection.appendChild(img);
      }

      card.appendChild(iconSection);
    }

    // Second cell: Title and Button
    const contentCell = cells[1];
    if (contentCell) {
      const contentSection = document.createElement('div');
      contentSection.classList.add('cards-res-content');

      // Extract title
      const titleText = contentCell.textContent.trim().split('\n')[0];
      const title = document.createElement('h3');
      title.classList.add('cards-res-title');
      title.textContent = titleText;
      contentSection.appendChild(title);

      // Extract link/button
      const link = contentCell.querySelector('a');
      if (link) {
        link.classList.add('cards-res-button');
        contentSection.appendChild(link);
      }

      card.appendChild(contentSection);
    }

    cardsContainer.appendChild(card);
  });

  // Clear block and append new structure
  block.innerHTML = '';
  block.appendChild(cardsContainer);

  block.classList.add('cards-resources');
}
