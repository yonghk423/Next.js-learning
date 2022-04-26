import Seo from "../../components/Seo";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

//'string | string[] | undefined' 형식은 배열 형식이 아닙니다.

// interface IServerSideParamsProps {
//   params: {
//     params: string | string[] | undefined;
//   };
// }

export default function Detail({params}:InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}



export function getServerSideProps({ params: { params }}:InferGetServerSidePropsType<GetServerSideProps> ) {
    console.log({ params })
  return {
    props: {
      params,
    },
  };
}