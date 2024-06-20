import { client } from "@/utils/contentful";
import { TypeCompanyFields } from "@/types/contentful";

import Image from "next/image";



export async function fetchArticle() {
    try {
        const data = await client.getEntries<TypeCompanyFields>({
            content_type: 'company'
        });
        return data.items;
    } catch (err) {
        console.log(err);
    }
}

export default async function ArticleSection() {
    const articles = await fetchArticle();
    const { fields }: { fields: { file: { url: string } } } = articles ? articles[0].fields.aboutImage : { fields: { file: { url: "" } } };
return(
    <div className="bg-gray-100 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">About Us</h2>
        <div className="lg:flex lg:px-20 sm:px-2">
            <div>
            {articles?.map((article) => (
                <div key={article.sys.id} className="lg:flex">
                    <p className="mb-5 text-justify lg:pr-5">{article.fields.about}</p>
                    <Image
                        alt="image"
                        src={`https:${fields.file.url}`}
                        width={720}
                        height={720}
                    />
                </div>
            ))}  
            </div>

            {/* <img src="/Team.jpg" alt="" width={720} className="lg:pl-5"/> */}
        </div>
    </div>
)
}