import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const rows = [...block.children];

  // Structure:
  // Row 1: [empty] [Phase title] - Header bar content
  // Row 2: [Dosing visual with typography] [Content bullets]

  if (rows.length < 2) return;

  // Create header bar (only if row 1 right cell has content)
  const headerBar = document.createElement('div');
  const headerCell = rows[0].children[1]; // Right cell contains phase title
  if (headerCell && headerCell.textContent.trim()) {
    while (headerCell.firstChild) {
      headerBar.appendChild(headerCell.firstChild);
    }
  }

  // Create content container
  const contentContainer = document.createElement('div');

  // Left column - Dosing visual with large typography and image
  const leftColumn = document.createElement('div');
  const visualCell = rows[1].children[0]; // Left cell of row 2
  if (visualCell) {
    while (visualCell.firstChild) {
      leftColumn.appendChild(visualCell.firstChild);
    }
  }

  // Right column - Content bullets
  const rightColumn = document.createElement('div');
  const contentCell = rows[1].children[1]; // Right cell of row 2
  if (contentCell) {
    while (contentCell.firstChild) {
      rightColumn.appendChild(contentCell.firstChild);
    }
  }

  contentContainer.appendChild(leftColumn);
  contentContainer.appendChild(rightColumn);

  // Optimize images in both columns
  block.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  // Clear block and rebuild
  block.textContent = '';

  // Only add header bar if it has content
  if (headerBar.textContent.trim()) {
    block.appendChild(headerBar);
  }

  block.appendChild(contentContainer);

  // Add variant class if needed (green is default, pink for maintenance/hemodialysis)
  const headerText = headerBar.textContent.toLowerCase();
  if (headerText.includes('maintenance') || headerText.includes('hemodialysis') || headerText.includes('dialysis')) {
    block.classList.add('pink');
  }
}
