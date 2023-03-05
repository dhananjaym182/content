<script>
  // Create table of contents
  function createTableOfContents() {
    const ToC = document.createElement('nav');
    ToC.className = 'table-of-contents';
    ToC.setAttribute('role', 'navigation');
    ToC.innerHTML = `
      <h4 onclick="toggleToC()">⇅ Table of Contents</h4>
      <ul></ul>
    `;

    const headings = document.querySelectorAll('article h2, article h3, article h4, article h5');
    headings.forEach((heading, index) => {
      const title = heading.textContent;
      const link = `#point${index}`;
      heading.id = `point${index}`;
      const item = document.createElement('li');
      item.innerHTML = `<a href="${link}">${title}</a>`;
      ToC.querySelector('ul').appendChild(item);
    });

    document.querySelector('.toc-pros').prepend(ToC);
  }

  // Toggle table of contents
  function toggleToC() {
    const toc = document.querySelector('.table-of-contents ul');
    const tocHeight = toc.scrollHeight;

    if (toc.classList.contains('show')) {
      toc.style.height = 0;
      toc.classList.remove('show');
    } else {
      toc.style.height = `${tocHeight}px`;
      toc.classList.add('show');
    }
  }

  // Initialize table of contents
  window.addEventListener('load', createTableOfContents);
</script>

