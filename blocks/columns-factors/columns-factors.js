export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // Detect if this should use grid layout (4 columns = grid layout)
  if (cols.length === 4) {
    block.classList.add('grid-layout');
    document.body.classList.add('columns-factors-grid');
  }

  // Legacy: Add page-specific class for Onkologie page (backwards compatibility)
  const isOnkologiePage = document.title.toLowerCase().includes('onkologie')
    || window.location.pathname.includes('onkologie')
    || document.querySelector('h1')?.textContent.toLowerCase().includes('onkologie');

  if (isOnkologiePage) {
    document.body.classList.add('onkologie-page');
  }

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
