import React, { useState } from 'react';

const Pagination = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
  };

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-between items-center lg:p-4">
      {/* Entries per page */}
      <div className="flex items-center ml-[20px]">
        <select
          className="border p-1 rounded-md"
          value={entriesPerPage}
          onChange={handleEntriesChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        <span className="ml-2 font-dm-sans text-[14px]">Entries per page</span>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-[20px] hidden lg:block">
        <button
          className="border p-1 px-[12px] rounded-md mx-1"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>{currentPage}</span>
        <button
          className="border p-1 px-[12px] rounded-md mx-1"
          onClick={handleNextPage}
        >
          &gt;
        </button>
      </div>

      {/* Page Number */}
      <div className="flex items-center mr-[20px]">
        <span>Page</span>
        <input
          type="number"
          className="border p-1 rounded-md mx-2 w-16"
          value={currentPage}
          onChange={handlePageChange}
          min={1}
        />
      </div>
    </div>
  );
};

export default Pagination;
