export interface PaginationData {
    total: number;
    skip: number;
    limit: number;
    totalPages?: number;  // Optional if you want to keep it for backward compatibility
    page?: number;  // Optional if you want to keep it for backward compatibility
  }
  