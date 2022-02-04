import {Table, isPrime} from './Table'

const intitArray = () => {
  let arr = [];
  for (let i = 0; i < 32; i++) { arr.push(i) }
  return arr;
}

function App() {
  const array = intitArray();

  return (
    <div className='flex'>
      {array.map((el, i) =>
        <Table key={i} classColor={isPrime(el) ? "prime" : el % 2 == 0 ? "double" : "odd"} num={el} />
      )
      }
    </div>
  );
}

export default App;
