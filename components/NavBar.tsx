import Link from 'next/link';
import { useRouter } from 'next/router'; // Next.js로 부터 제공 받으며 따로 설치 할 필요가 없다.
//Link는 NextJS 어플의 클라이언트 사이드 네비게이션을 제공한다.
//웹사이트 새로고침 할 필요가 없어 졌다.
//styled jsx는 NectJS 고유의 방법이라고 할 수가 있다 한번 학습해 보도록 한다.
export default function NavBar() {
    const router = useRouter();
    return (
    <nav>
      <Link href="/">
       <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
    ) 
}

// Router를 설치하지 않아도 되는 큰 장점이 있다. 또한 Router를 rendering 할 필요도 없다.