import { client } from "@/sanity/lib/client";

 interface Obj {
    title: string;
    description: string;
    price: number;
    tags: string[];
    dicountPercentage: number;
    isNew: boolean;
    image: any;
    id: string;
}
export interface  Product extends Obj {
    quantity:number
}



async function getData() {
    const response = await client.fetch(`*[_type == "product"]{title, description, price, "id" : _id, tags, dicountPercentage, isNew, "image": productImage.asset->url}`,{}, {cache: "no-store"});
    return response;
}

export const data:Product[] = await  getData();