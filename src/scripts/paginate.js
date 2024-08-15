export function paginate(data, currentPage, pageSize) {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const items = data.slice(start, end);
  
    return {
      currentPage,
      totalPages,
      items,
    };
  }
  