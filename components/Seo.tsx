import Head from "next/head"
//Next.js에 내장 되어 있는 Head 설정를 설정하여 react-helmet과 같은 역할을 할 수 있다.
//Head를 import 해오고 <Head></Head> 안에 감싸주기만 하면 된다. 굉장히 간단하다 
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