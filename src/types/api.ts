export type ProductType = "Vaate" | "Lelu" | "Ruoka";

export interface Manufacturer {
    manufacturerId: number;
    name: string;
}

export interface Product {
    id: number;
    type: ProductType;
    name: string;
    color: string;
    size: string;
    price: number;
    manufacturer: Manufacturer;
}

export type NewProduct = Omit<Product, "id">;
export type NewManufacturer = Pick<Manufacturer, "name">;