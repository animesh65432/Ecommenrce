export type Producttype = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};
export interface Store {
    products: Producttype[];
    filteredProducts: Producttype[];
    filters: {
        categories: string[];
        priceRange: [number, number];
        rating: number | null;
        inStock: boolean;
        onSale: boolean;
    };
    sortBy: string;

    setProducts: (products: Producttype[]) => void;
    setFilters: (filters: Partial<Store['filters']>) => void;
    clearFilters: () => void;
    sortProducts: (sortBy: string) => void;
}