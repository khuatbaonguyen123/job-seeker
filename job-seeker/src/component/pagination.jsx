import { useState } from "react";


export const Pagination = ({
  totalItems,
  itemsPerPage,
  pagesPerGroup,
  onPageChange,
  className = "",
  buttonClassName = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const handlePreviousGroup = () => {
    if (startPage > 1) {
      const newPage = startPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      const newPage = endPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const pageButtons = [];

  if (startPage > 1) {
    pageButtons.push(
      <button key="prev-ellipsis" disabled className={`button-disabled ${buttonClassName}`}>
        ...
      </button>
    );
  }

  for (let page = startPage; page <= endPage; page++) {
    pageButtons.push(
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`button ${page === currentPage ? "button-active" : ""} ${buttonClassName}`}
      >
        {page}
      </button>
    );
  }

  if (endPage < totalPages) {
    pageButtons.push(
      <button key="next-ellipsis" disabled className={`button-disabled ${buttonClassName}`}>
        ...
      </button>
    );
  }

  return (
    <div className={`pagination-container ${className}`}>
      <button
        onClick={handlePreviousGroup}
        disabled={startPage === 1}
        className={`button ${startPage === 1 ? "button-disabled" : ""} ${buttonClassName}`}
      >
        Prev
      </button>
      {pageButtons}
      <button
        onClick={handleNextGroup}
        disabled={endPage === totalPages}
        className={`button ${endPage === totalPages ? "button-disabled" : ""} ${buttonClassName}`}
      >
        Next
      </button>
    </div>
  );
};
