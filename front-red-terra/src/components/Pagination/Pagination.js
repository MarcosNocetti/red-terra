import React from "react";
import { PaginationView } from './styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationView>
      {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)}> <IoIosArrowBack style={{paddingTop:2}}/> </button>}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
      {currentPage !== pages.length && <button onClick={() => setCurrentPage(currentPage + 1)}> <IoIosArrowForward style={{paddingTop:2}}/> </button>}
    </PaginationView>
  );
};

export default Pagination;
