export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // Detect if this should use grid layout (4 columns = grid layout)
  if (cols.length === 4) {
    block.classList.add('grid-layout');
    document.body.classList.add('columns-factors-grid');
  }

  // Add page-specific classes for Onkologie pages
  const pathname = window.location.pathname;
  const isOnkologiePage1 = pathname.includes('onkologie-page-1');
  const isOnkologiePage = document.title.toLowerCase().includes('onkologie')
    || pathname.includes('onkologie')
    || document.querySelector('h1')?.textContent.toLowerCase().includes('onkologie');

  // Add specific class for onkologie-page-1
  if (isOnkologiePage1) {
    document.body.classList.add('onkologie-page-1');
  }
  // Legacy: Add page-specific class for original Onkologie page (backwards compatibility)
  else if (isOnkologiePage) {
    document.body.classList.add('onkologie-page');
  }

  // Fix image paths that were incorrectly resolved to Figma URLs
  const images = block.querySelectorAll('img, source');
  images.forEach((element) => {
    const srcAttribute = element.tagName === 'SOURCE' ? 'srcset' : 'src';
    const src = element.getAttribute(srcAttribute);

    if (src && src.includes('figma.com')) {
      // Extract the path after 'images/' and prepend with '/content/'
      const match = src.match(/images\/(.*)/);
      if (match) {
        const localPath = `/content/images/${match[1]}`;
        element.setAttribute(srcAttribute, localPath);
      }
    }
  });

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
