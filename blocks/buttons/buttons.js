export default function decorate(block) {
  // Get all links in the block
  const links = [...block.querySelectorAll('a')];

  // Create buttons container
  const container = document.createElement('div');
  container.classList.add('buttons-container');

  // Move all links to the container
  links.forEach((link) => {
    container.appendChild(link);
  });

  // Clear block and add container
  block.innerHTML = '';
  block.appendChild(container);
}
