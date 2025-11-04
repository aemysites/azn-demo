export default function decorate(block) {
  // Get all rows
  const rows = [...block.children];

  // Create card container
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card-container');

  // Process each row
  rows.forEach((row) => {
    const content = row.querySelector('p, a, img, picture');
    if (content) {
      if (content.tagName === 'A') {
        // Button
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('card-button');
        buttonDiv.appendChild(content);
        cardDiv.appendChild(buttonDiv);
      } else if (content.tagName === 'IMG' || content.tagName === 'PICTURE') {
        // Icon
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('card-icon');
        iconDiv.appendChild(content);
        cardDiv.appendChild(iconDiv);
      } else {
        // Text content
        const textDiv = document.createElement('div');
        textDiv.classList.add('card-text');
        textDiv.appendChild(content);
        cardDiv.appendChild(textDiv);
      }
    }
  });

  // Clear block and add container
  block.innerHTML = '';
  block.appendChild(cardDiv);
}
