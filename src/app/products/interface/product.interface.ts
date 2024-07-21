export interface ProductInterface {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: DimensionsInterface;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ReviewInterface[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: MetaInterface;
    thumbnail: string;
    images: string[];
}

export interface MetaInterface {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export interface DimensionsInterface {
    width: number;
    height: number;
    depth: number;
}


export interface ReviewInterface {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface ProductCategoryInterface{
    slug: string;
    name:string;
    url: string;
}