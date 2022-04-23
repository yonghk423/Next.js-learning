
export default function Home() {
    return (
        <div>
          <h1 className="active">Hello</h1>
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

