export const getPageButtons = (pagesLength, currentPage) => {
  const pages = [];

  for (let i = 1; i <= pagesLength; i++) {
    if (i === 1 || i === pagesLength || i === currentPage) {
      pages.push(i);
    }

    if (i === currentPage + 1 || i === currentPage - 1) {
      pages.push(i);
    } 

    if (currentPage === 1 && (i === currentPage + 2 || i === currentPage + 3)) {
      pages.push(i);
    } 

    if (currentPage === 2 && i === currentPage + 2) {
      pages.push(i);
    } 

    if (currentPage === pagesLength && (i === currentPage - 2 || i === currentPage - 3)) {
      pages.push(i);
    } 

    if (currentPage === pagesLength - 1 && i === currentPage - 2) {
      pages.push(i);
    } 

    if (
      currentPage < pagesLength - 2 && 
      pagesLength > 5 && 
      (pages.includes('firstDots') || currentPage === 2 ? pages.length === 5 : pages.length === 4) && 
      i < pagesLength - 1
    ) {
      pages.push('secondDots');
    }

    if (currentPage > 3 && pagesLength > 5 && i === 2 ) {
      pages.push('firstDots');
    }
  }

  return pages.filter((item, pos) => {
    return pages.indexOf(item) === pos;
  });
}
