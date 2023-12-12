const Pagination = ({ onPageChange, currentPage }) => {
  return (
    <>
      <button onClick={() => onPageChange(Math.max(currentPage - 1, 1))}>
        Previous
      </button>
      <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </>
  );
};

export { Pagination };
