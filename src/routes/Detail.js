import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams() //useParams함수는 movie/:id를 알수있다
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(json)
    setData(json.data.movie)
    setLoading(false)
  }
  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
      {loading ? <h1>loading....</h1> : <h2>{data.title_long}</h2>}
      <img src={data.medium_cover_image} alt={data.title_long} />
    </div>
  )
}
export default Detail
