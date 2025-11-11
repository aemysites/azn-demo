export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

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

  // Mark percentage values (those containing %) for special styling
  const strongTags = block.querySelectorAll('strong');
  strongTags.forEach((strong) => {
    if (strong.textContent.includes('%')) {
      strong.classList.add('percentage-value');
    }
  });
}
