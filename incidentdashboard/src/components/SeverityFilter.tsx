import { SeverityLevel } from "../types";
import './severity.css'
type FilterOption = "All" | SeverityLevel;

interface SeverityFilterProps {
  selectedFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

export function SeverityFilter({ selectedFilter, onFilterChange }: SeverityFilterProps) {
  const filters: FilterOption[] = ["All", "Low", "Medium", "High"];

  return (
    <div className="severity-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}