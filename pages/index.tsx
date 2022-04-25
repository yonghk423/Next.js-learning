import Seo from './Seo';
import { useEffect, useState  } from 'react';

interface SetData {
  id:number;
  original_title:string;
  poster_path:string;
}
/*api요청으로 data를 받아온 값을 useState 값으로 받아서 사용하려면 
사용하고자하는 데이터들의 속성 타입을 지정해줘야 한다. useState의 타입을 지정할 때는 
제네릭을 사용한다 */ 


export default function Home() {
  const [movies, setMovies] = useState<SetData[]>([])
  useEffect(() => {
    (async () => {
      const { results } = await 
       (await fetch(`/api/movies`)).json();
      setMovies(results);
    })(); // ---> aysnc 부분이 익명 함수(재사용 불가)로 작성되었고, 익명 함수는 즉시 실행해야 하기 때문에 ()를 이용해 익명 함수를 바로 호출하는 것
  } ,[]) 
    return ( 
        <div className='container'>
          <Seo title="Home"/> 
          {!movies && <h4>Loading...</h4>}
          {movies?.map((movie) => (
            <div className="movie" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h4>{movie.original_title}</h4>
            </div>
          ))}
          <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: auto auto auto;              
              padding: 20px;
              gap: 20px;
            }
            .movie img {
              max-width: 100%;
              border-radius: 12px;
              transition: transform 0.2s ease-in-out;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
              transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
              font-size: 18px;
              text-align: center;
            }
          `}</style>

        </div>
    )        
}

/* create react-app만을 한다면, React router DOM을 다운 받아야하고 
router를 만들고 router를 설계하고 component를 import하고 router를 render하는 모든 과정을 
next.js는 이 모든 것들이 전부 되어있다 확실히 편하다. 

파일 이름 자체가 url로 들어가게 되기 때문에
component의 이름은 중요하지 않다.
중요한 것은 export default를 해야 한다는 것

nextjs의 가장 좋은 기능 중 하나는, 앱에 있는 페이지들이 미리 렌더링 된다는 것이다.
create react app과 next.js의 차이점은 create react app은 client-side render를 하는 앱을 만든다는 것이다.
client-side 렌더링이란 브라우저가 유저가 보는 UI를 만드는 모든것을 한다는 것을 의미한다.

next.js는 react.js를 백엔드에서 동작 시켜서 페이지를 미리 만드는데 그럼 component들을 render 시킨다 렌더링이 끝났을 때 HTML이 되고
next.js는 그 HTML을 페이지의 소스코드에 넣어준다. 그럼 유저는 자바스크립트와 react.js가 로딩 되지 않았더라도 컨텐츠를 볼 수 있게 된다.

이렇게 되면 유저가 웹사이트에 가면 초기 상태의 compoenet로 된 미리 생성된 HTML 페이지를 보게 되고 상호작용이 일어나면 react.js는 그것을 받아서 
잘 작동하게 된다.

이것은 SEO에 좋으며, 구글같은 검색엔진에도 너무나 좋다.
 
*/

