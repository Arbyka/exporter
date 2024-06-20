import { client } from "@/utils/contentful";
import { TypeCompanyFields } from "@/types/contentful";

import Image from "next/image";

export async function fetchArticle() {
    try {
        const data = await client.getEntries<TypeCompanyFields>();
        return data?.items;
    } catch (err) {
        console.log(err);
    }
}

export default async function About() {
    const articles = await fetchArticle();
    return (
        <div>
            <div>
                {articles?.map((article) => {
                    const { aboutImage, about } = article.fields;
                    if (aboutImage && aboutImage.fields) {
                        const { fields }: { fields: { file: { url: string } } } = aboutImage;
                        return (
                            <div key={article.sys.id} className=" bg-gray-100">
                                <h2 className="text-4xl font-bold text-center mb-12 pt-20">About Us</h2>
                                <div className="lg:flex lg:px-20 py-10">
                                    <p className="text-justify text-gray-700 lg:pr-5 sm:px-2">{about}</p>
                                    <Image
                                        alt="Team"
                                        src={`https:${fields.file.url}`}
                                        width={720}
                                        height={720}
                                        className="lg:pl-5 sm:px-2"
                                    />
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
