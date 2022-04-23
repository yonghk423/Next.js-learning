import Head from "next/head"

interface SeoTitle {
    title:string;
}

export default function Seo({ title }:SeoTitle) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}