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
type userTypes = {
    name: string,
    email: string,
    password: string
}
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
    cart: Producttype[]
    wishlist: Producttype[],
    additemcart: (product: Producttype) => void,
    removecart: (id: number) => void,
    additemwishlist: (product: Producttype) => void,
    removewishlist: (id: number) => void,
    setcart: (products: Producttype[]) => void;
    setwishlist: (products: Producttype[]) => void,
    user: userTypes,
    setuer: (user: userTypes) => void

}