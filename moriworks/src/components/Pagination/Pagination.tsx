import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <nav aria-label="...">
        <ul >
          <li >
            <a  href="#"  aria-disabled="true">Previous</a>
          </li>
          <li ><a href="#">1</a></li>
          <li  aria-current="page">
            <a  href="#">2</a>
          </li>
          <li ><a href="#">3</a></li>
          <li>
            <a  href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
