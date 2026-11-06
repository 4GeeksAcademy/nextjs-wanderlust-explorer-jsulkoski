"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function useExplorerQuery() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateQuery(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set(key, value.trim());
    } else {
      params.delete(key);
    }

    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      query ? `${pathname}?${query}` : pathname,
    );
  }

  function clearFilters() {
    window.history.replaceState(null, "", pathname);
  }

  return {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
    updateQuery,
    clearFilters,
  };
}