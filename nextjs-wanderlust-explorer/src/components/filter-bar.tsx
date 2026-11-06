type FilterBarProps = {
  category: string;
  destination: string;
  categories: readonly string[];
  destinations: readonly string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onClear: () => void;
  hasFilters: boolean;
};

export default function FilterBar({
  category,
  destination,
  categories,
  destinations,
  onCategoryChange,
  onDestinationChange,
  onClear,
  hasFilters,
}: FilterBarProps) {
  return (
    <div className="filter-row" aria-label="Experience filters">
      <label className="filter-control">
        <span className="control-label">Category</span>
        <select
          className="filter-select"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All categories</option>
          {categories.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>
      <label className="filter-control">
        <span className="control-label">Destination</span>
        <select
          className="filter-select"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          aria-label="Filter by destination"
        >
          <option value="">Anywhere</option>
          {destinations.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>
      {hasFilters && (
        <button className="clear-filters" type="button" onClick={onClear}>
          Clear all
        </button>
      )}
    </div>
  );
}