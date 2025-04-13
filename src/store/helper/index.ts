
import { Producttype, Store } from "@/types"
export function applyFilters(products: Producttype[], filters: Store['filters']): Producttype[] {
    return products.filter(product => {
        if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
            return false;
        }

        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
            return false;
        }

        if (filters.rating !== null && product.rating.rate < filters.rating) {
            return false;
        }

        return true;
    });
}

export function sortProducts(products: Producttype[], sortBy: string): Producttype[] {
    const productsToSort = [...products];

    switch (sortBy) {
        case 'price-low':
            return productsToSort.sort((a, b) => a.price - b.price);
        case 'price-high':
            return productsToSort.sort((a, b) => b.price - a.price);
        case 'newest':
            return productsToSort.sort((a, b) => b.id - a.id);
        case 'rating':
            return productsToSort.sort((a, b) => b.rating.rate - a.rating.rate);
        case 'featured':
        default:
            return productsToSort.sort((a, b) =>
                (b.rating.rate * b.rating.count) - (a.rating.rate * a.rating.count)
            );
    }
}