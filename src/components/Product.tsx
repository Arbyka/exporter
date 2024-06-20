import { client } from "@/utils/contentful";
import { TypeCompanyFields } from "@/types/contentful";
import Image from "next/image";
import Link from "next/link";

export async function fetchArticle() {
    try {
        const data = await client.getEntries<TypeCompanyFields>();
        return data?.items;
    } catch (err) {
        console.log(err);
    }
}

export default async function Product() {
    const articles = await fetchArticle();
    return (
        <div>
            <div>
                {articles?.map((article) => {
                    const { productImage1, product1, productImage2, product2, productImage3, product3 } = article.fields;
                    
                    return (
                        <div key={article.sys.id} className="bg-gray-100">
                            <h2 className="text-4xl font-bold text-center mb-12 pt-20">Our Product</h2>
                            <div className="lg:flex justify-center py-20 px-20 lg:space-x-10">
                                <div className="flex flex-col items-center sm:items-center sm:mb-5">
                                {/* {productImage1 && productImage1.fields && (
                                    <Image
                                        alt="Product Image 1"
                                        src={`https:${productImage1.fields.file.url}`}
                                        width={450}
                                        height={450}
                                    />
                                )} */}
                                <img src="/Kopi.jpg" alt="" />
                                <p className="text-justify text-gray-700">{product1}</p>
                                <Link href="/Services.tsx" className="text-gray-300 hover:text-yellow-500">See Product..</Link>
                                </div>
                                <div className="flex flex-col items-center sm:items-center sm:mb-5">
                                {/* {productImage2 && productImage2.fields && (
                                    <Image
                                        alt="Product Image 2"
                                        src={`https:${productImage2.fields.file.url}`}
                                        width={450}
                                        height={450}
                                    />
                                )} */}
                                <img src="/Teh.jpg" alt="" />
                                <p className="text-justify text-gray-700">{product2}</p>
                                <Link href="/Services.tsx" className="text-gray-300 hover:text-yellow-500">See Product..</Link>
                                </div>
                                <div className="flex flex-col items-center sm:items-center">
                                {/* {productImage3 && productImage3.fields && (
                                    <Image
                                        alt="Product Image 3"
                                        src={`https:${productImage3.fields.file.url}`}
                                        width={450}
                                        height={450}
                                    />
                                )} */}
                                <img src="/Coklat.jpg" alt="" />
                                <p className="text-justify text-gray-700">{product3}</p>
                                <Link href="/Services.tsx" className="text-gray-300 hover:text-yellow-500">See Product..</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
