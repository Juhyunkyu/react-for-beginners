import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  // console.log(toDo)
  const onSubmit = (event) => {
    event.preventDefault() //sbmit이 기본적으로 새로고침 기능이 있어서 없애주는것
    if (toDo === '') {
      //input값이 빈값이면 리턴
      return
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    //...기존에 있는 배열에 추가 하는거 ... setToDos함수에 toDo(입력된 값)을 배열에 넣고 toDos(값)에 넣어준다
    // setToDos([...toDos, toDo]) //결국 위에 currentArray가 toDo이니 이렇게 써도 됨 food Array에 '5'라는 요소를 추가하고 싶음. // const food = [1,2,3,4] // [5, food] // 이런 식으로 요소를 추가한다면 아래와 같은 결과. // -> [5, food[]]// Array 안에 또 다른 Array가 중첩되는 결과.// 그래서 아래와 같이 추가하면 됨. // ★[5, ...food]// 앞에 [ ... ]을 추가하면 Array의 element 들을 돌려주게 됨.
    setToDo('') //서브밋을 하고 input을 빈값으로 만들기
  }
  // console.log(toDos)
  // console.log(toDos.map((item, index) => <li key={index}>{item}</li>)) // react ellement처럼 확인해볼수있다

  const deleteBtn = (index) =>
    setToDos((toDos) => toDos.filter((item, curIndex) => index !== curIndex))
  //x버튼을 눌렀을때 키값 index을 가져오고
  //setToDos 함수에 전달하면 값이 나오므로 toDos를 넣고 그 toDos값을 이용해 filter를 쓴다
  //toDos값 filter의 첫번째 요소는 값이고  두번째는 배열의요소(배열의 순번) 첫번째는 안쓰니 _,써도 된다 빈값이라는뜻
  //요소가 같지 않는걸 다시 배열로 뿌려주면 삭제가 된거 처럼된다

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        {/* form은 기본적으로 submit의 속성을 가지고 있다 */}
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your To do ....."
        />
        {/* 폼을 쓰는 이유 form 안에 버튼을 넣으면 onClick을 사용하지 않아도 엔터/마우스 클릭시 똑같은 기능/효과를 사용할 수 있고, 인풋의 경우도 form이 제공하는 자체 validation(아무것도 입력하지 않으면 알려줌 등) 기능도 사용할 수 있는 이점 */}
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>X{index}</button>
            {/* index값을 넘기기위해 {() => deleteBtn(index)} 이렇게 씀*/}
          </li>
        ))}
        {/* 밑에 적음 참고 map */}
      </ul>
    </div>
  )
}
// map() 함수
// -> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
// 즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
// 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
// -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
// 다만 기존의 배열에 접근할 수 없게됨
// 그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
// map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
// map((item) => item.toUpperCase())
// 로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌

// 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
// map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
// 그래서
// {toDos.map((item, index) => {item})}
// 만들어줌
// 즉,
// {{item},{item},{item}...}
// 배열을 만들어 각자 고유의 key를 가지게 함

export default App
