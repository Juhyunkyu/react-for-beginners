import Button from './Button'
import styles from './App.module.css'
import { useState, useEffect } from 'react'

function Hello() {
  useEffect(() => {
    console.log("I'm Created :)")
    return () => console.log('destroyed :(')
  }, [])
  //위에 코드랑 같은말 function을 쓰고 안쓰고
  // useEffect(function () {
  //   console.log("I'm Created :)")
  //   return function () {
  //     console.log('destroyed :(')
  //   }
  // }, [])

  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')

  const onChange = (event) => setKeyword(event.target.value)
  const onClick = () => setValue((prev) => prev + 1)

  const onClickShow = () => setShowing((prev) => !prev) //버튼을 누르면 false는 true로 true는 false로

  console.log('i run all the time')
  // const iRunOnlyOnce = () => {
  //   console.log('i run only once')
  // }
  // useEffect(iRunOnlyOnce, [])

  // useEffect는 랜더링할때 한번만 랜더링하게 하는법

  //시작점에서 랜더링하고 말기 (한번만 랜더링)
  useEffect(() => {
    console.log('i run Only once. 한번만 실행이 되요')
  }, [])
  //위에꺼라 같은말 화살표 함수 참고
  // useEffect(함수, []) []에 빈값을 주면 한번만 실행된다

  //뭔가가 update가 되었을때 랜더링하기
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      //input의 value값 keyword가 빈값이 아니거나 길이가 5이상일때 실행
      console.log(
        'i run when "keyword" changes. 인풋창에 글씨가 5개이상이면 바뀌어요',
        keyword,
      )
    }
  }, [keyword]) //[]에 keyword를 넣어주면 keyword가 변화할때마다 실행시킨다

  useEffect(() => {
    console.log(
      'i run when "counter" changes. 버튼을 누를때마다 바뀌어요',
      counter,
    )
  }, [counter]) //[]에 keyword를 넣어주면 keyword가 변화할때마다 실행시킨다

  useEffect(() => {
    console.log('i run when "counter" and "keyword" changes.', counter)
  }, [counter, keyword]) //[]안에 2개를 넣을수도 있다 counter나 keyword가 변화가 오면 실행

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={'Wellcome back'} />
      <button onClick={onClick}>click me</button>

      <button onClick={onClickShow}>{showing ? 'hide' : 'show'}</button>
      {showing ? <Hello /> : null}
      {/* 자바스크립트를 바로쓰려면 {}를 써야함  */}
    </div>
  )
}

// export default App
