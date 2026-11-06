type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-field">
      <span className="control-label">Find an experience</span>
      <span className="search-input-wrap">
        <span className="search-symbol" aria-hidden="true">⌕</span>
        <input
          className="search-input"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Try sailing, street food, slow mornings..."
          aria-label="Search experiences by title"
        />
      </span>
    </label>
  );
}