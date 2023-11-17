import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Movie({ id, coverImage, title, summary, genres }) {
  //props를 받아옴 이름 아무거나 적음됨
  return (
    <div>
      {/* 이미지를 넣을때 alt는 warning이 뜨는데 넣어주니 안뜸*/}
      <img src={coverImage} alt={title} />
      <h2>
        {/* title을 누르면 localhost:3000/movie로 간다 */}
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li> //map안에 map //map을 쓸때는 key값이 있어야한다
        ))}
      </ul>
    </div>
  )
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열은 이렇게
}

export default Movie
