export class PagingInfo {
    constructor(
        public TotalItems?: number,
        public ItemsPerPage?: number,
        public CurrentPage?: number,
        public TotalPages?: number
    ) { }
    
}