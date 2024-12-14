import React, { useState } from "react";

export const Pagination = ({ totalItems, itemsPerPage, pagesPerGroup, onPageChange }) => {
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

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (startPage > 1) {
      pageNumbers.push(<li key="prev-ellipsis"><span className="delimeter">...</span></li>);
    }
    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(
        <li key={page} className={page === currentPage ? "active" : ""}>
          <a href="#" onClick={() => handlePageChange(page)}>
            {page}
          </a>
        </li>
      );
    }
    if (endPage < totalPages) {
      pageNumbers.push(<li key="next-ellipsis"><span className="delimeter">...</span></li>);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        {/* Nút Prev */}
        <li className={`prev ${startPage === 1 ? "disabled" : ""}`}>
          <a href="#" onClick={handlePreviousGroup}>
            <i className="la la-long-arrow-left"></i> Prev
          </a>
        </li>
        {/* Render số trang */}
        {renderPageNumbers()}
        {/* Nút Next */}
        <li className={`next ${endPage === totalPages ? "disabled" : ""}`}>
          <a href="#" onClick={handleNextGroup}>
            Next <i className="la la-long-arrow-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

