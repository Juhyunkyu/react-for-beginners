import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [myCoins, setMyCoins] = useState(0)

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, []) //[] 빈값을 줘서 처음에 한번만 rendering한다
  //   // 코인 API 주소 가면 text로 쭉 나열되서 json뷰어 설치함 https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related?hl=ko
  //   // 너무 큰 사이즈면 Highlight할꺼냐고 물음 그럼 오케이 하면됨

  const onChange = (event) => setMyCoins(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    setCoins((coin) => coin.filter((item) => myCoins >= item.quotes.USD.price))
    // console.log(coins)
  }

  return (
    <div>
      <h1>My Coins! {loading ? '' : `(${coins.length})`}</h1>
      <form onSubmit={onSubmit}>
        <h1>내가 가지고 있는 달러로 살수있는 코인 검색</h1>
        <input
          onChange={onChange}
          value={myCoins}
          placeholder="내가 가지고 있는 $를 넣으시오!"
        />
        <button>USD</button>
      </form>

      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price} USD
            </option> // coins는 api에서 받아온 배열 배열안에 id가 있어서 map를 쓸때 index를 쓰지 않았다 api주소에 가보면 name과 symbol과 price가 있다 객체라 .으로 연결함 된다
          ))}
        </select>
      )}
    </div>
  )
}

export default App
