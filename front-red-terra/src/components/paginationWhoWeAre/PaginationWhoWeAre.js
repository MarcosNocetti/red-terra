import React from "react";
import { PaginationView } from "./styled";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PaginationWhoWeAre = ({
  totalPosts,
  currentPage,
  prevSlide,
  nextSlide,
  postsPerPage,
}) => {
  return (
    <PaginationView>
      <button disabled={currentPage === 0} onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button
        disabled={currentPage === totalPosts - postsPerPage}
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </PaginationView>
  );
};

export default PaginationWhoWeAre;
