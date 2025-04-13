"use client"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { useStore } from "@/store/store"

const FilterSection = () => {
    const { products, setFilters, sortProducts, clearFilters, filters } = useStore();

    useEffect(() => {
    }, [products]);

    const handleSortChange = (value: string) => {
        sortProducts(value);
    };

    const handleFilterChange = (newFilters: Partial<typeof filters>) => {
        console.log(newFilters)
        setFilters(newFilters);
    };

    const handleClearFilters = () => {
        clearFilters();
    };

    return (
        <Card className="p-6 rounded-2xl shadow-xl dark:bg-gray-900 bg-white lg:sticky lg:top-36 lg:w-full w-[80vw] m-auto ">
            <CardContent className="space-y-6 ">
                <div className="flex justify-center">
                    <button
                        onClick={handleClearFilters}
                        className="w-40 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 "
                    >
                        Clear ALL
                    </button>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sort by</label>
                    <Select onValueChange={handleSortChange}>
                        <SelectTrigger className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="price-low">Price: Low to High</SelectItem>
                            <SelectItem value="price-high">Price: High to Low</SelectItem>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="rating">Rating</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                    <select
                        onChange={(e) =>
                            handleFilterChange({ categories: [e.target.value] })
                        }
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm dark:text-white"
                    >
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's clothing</option>
                    </select>
                </div>

                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price Range</label>
                    <div className="flex items-center gap-4">
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            value={filters.priceRange[0]}
                            onChange={(e) =>
                                handleFilterChange({ priceRange: [+e.target.value, filters.priceRange[1]] })
                            }
                            className="w-full bg-slate-900"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">${filters.priceRange[0]}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            value={filters.priceRange[1]}
                            onChange={(e) =>
                                handleFilterChange({ priceRange: [filters.priceRange[0], +e.target.value] })
                            }
                            className="w-full bg-slate-800"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">${filters.priceRange[1]}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default FilterSection;
