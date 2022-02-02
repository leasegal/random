import {Table,arr,isPrime} from './Table'


function App() {
  return (
      <div className='flex'>
        {arr.map((el,i)=>
          <Table key={i} classColor={isPrime(el)?"prime":el%2==0?"double":"odd"} num={el} /> 
                )
        }
      </div>    
  );
}

export default App;
