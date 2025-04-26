import './sortdate.css'

type SortOption = "newest" | "oldest";

interface SortControlsProps {
  sortOrder: SortOption;
  onSortChange: (order: SortOption) => void;
}

export function SortDate({ sortOrder, onSortChange }: SortControlsProps) {
  return (
    <div className="sort-controls">
      <label>Sort by:</label>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="sort-select"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}