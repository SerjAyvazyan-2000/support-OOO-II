import "./pagination.scss";

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onChange }: Props) => {
  const pages = [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];

  const handlePrev = () => {
    if (currentPage > 1) onChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onChange(currentPage + 1);
  };
const isNumber = (v: string | number): v is number =>
  typeof v === "number";

  return (
    <div className="pagination-wrapper G-align-center">
      <i
        className={`icon icon-arrowRight2 pagination-arrow-right ${
          currentPage === 1 ? "inactive" : "active"
        }`}
        onClick={handlePrev}
      />

      <div className="pagination-items G-align-center">
     {pages.map((page, i) =>
  isNumber(page) ? (
    <button
      key={i}
      className={`pagination-item ${
        page === currentPage ? "active" : ""
      }`}
      onClick={() => onChange(page)}
    >
      {page}
    </button>
  ) : (
    <button key={i} className="pagination-point G-center" disabled>
      <i className="icon icon-point"></i>
    </button>
  )
)}
      </div>

      <i
        className={`icon icon-arrowRight2 pagination-arrow-left ${
          currentPage === totalPages ? "inactive" : "active"
        }`}
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
