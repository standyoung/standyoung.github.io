(() => {
  // Add or update an author's personal page here.
  const authorPages = {
    "Jaehyeok Bae": "https://jaehyeokbae.me/",
    "Youngung Han": "https://github.com/youngunghan/",
    "Junsu Lim": "https://jsulim.github.io/CV/",
    "Kyeonghun Kim": "https://khkim1729.github.io/",
    "Pa Hong": "https://smc.skku.edu/smc/medical/intro.do?mId=100",
    "Hyuk-Jae Lee": "http://capp.snu.ac.kr/?p=people#Prof",
    "Nam-Joon Kim": "https://imsilab.github.io/imsi/authors/investigators/nam-joon-kim/",
  };

  document.querySelectorAll(".publication-authors").forEach((authors) => {
    const walker = document.createTreeWalker(authors, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      if (!walker.currentNode.parentElement.closest("a, sup")) {
        textNodes.push(walker.currentNode);
      }
    }

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(,\s*)/).forEach((part) => {
        const name = part.trim();
        if (!Object.prototype.hasOwnProperty.call(authorPages, name)) {
          fragment.append(part);
          return;
        }

        const link = document.createElement("a");
        link.href = authorPages[name];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = name;
        fragment.append(part.match(/^\s*/)[0], link, part.match(/\s*$/)[0]);
      });
      node.replaceWith(fragment);
    });
  });
})();
