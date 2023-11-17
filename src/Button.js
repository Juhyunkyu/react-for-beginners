import PropTypes from 'prop-types'
//npm i prop-types 설치함 보안이슈 설명이 나옴....
//참고 https://www.npmjs.com/package/prop-types

import styles from './Button.module.css' //파일을 만들때 module.css하면 하나의 모듈로 나타낸다

function Button({ text }) {
  return <button className={styles.Btn}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired, //isRequired는 해당 속성이 반드시 필요하다는 의미이며, 값이 없거나 undefined인 경우 경고가 발생
}

export default Button
