import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true) // 로딩을 뿌려주고 다되면 없어지는거
  const [movies, setMovies] = useState([])
  const key = 'cdb0b382a2f5f9abc0bc12e7bb17ca9e' // 발급받은 키
  const targetDt = '20231114' // 조회하고자 하는 날짜를 'yyyymmdd' 형식으로 입력 오늘 날짜로 적어서 헤맴 어제 날짜전 적어줘야 나옴
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`
  //백틱을 주는 경우 >문자열 안에 변수를 넣어야 하는 경우 ''${variable}을(를) 수행할 수 있도록 사용합니다
  //한국에서 제공해주는 무료 api  https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
  const getMovies = async () => {
    const json = await (await fetch(url)).json()
    setMovies(json.boxOfficeResult.dailyBoxOfficeList)
    setLoading(false)
  } // const response = await fetch(url); const json = await response.json(); setMovies(json......); setLoading(false) 랑같음
  useEffect(() => {
    getMovies()
  }, [])

  //위에 내용과 같다
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json)
  //       setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //       setLoading(false)
  //     })
  // }, [])
  console.log(movies) // 참고해서 boxOfficeResult.dailyBoxOfficeList 이렇게 데이터를 찾을수있다
  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <h1> 영화 박스 오피스 </h1>
          {movies.map((
            movie, //map를 쓸땐 key값을 줘야한다
          ) => (
            <div key={movie.movieCd}>
              <h2>
                {movie.rank}위 {movie.movieNm}
              </h2>
              <ul>
                <li>{}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default App

//키발급 cdb0b382a2f5f9abc0bc12e7bb17ca9e
