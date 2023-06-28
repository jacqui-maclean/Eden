import { useState } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
}
const Search = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Search by customer name"
        aria-label="Search by customer name"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            setSearchTerm("");
            onSearch("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Search;
