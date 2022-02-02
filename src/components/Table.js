import useState from "react";

let arr =[]
for(let i=0;i<32;i++){arr.push(i)}

function isPrime(num) {
    if(num==0||num==1){return false}
    for(var i = 2; i < num; i++)
      if(num % i === 0) {return false};
      return true;
  }


  function getRandomInteger() {
    console.log(1222)
    return Math.floor(Math.random() * (10) ) + 1;
  }

/* const random=(el,i,arr)=>{
   arr[i]=parseInt(el)+(getRandomInteger())
  console.log('el'+el+'random'+getRandomInteger() ) 
  console.log(getRandomInteger())
  
}  */

const Table = ({classColor, num}) => { 

 const[stateNumber,setStateNumber]=useState(0)

  const laasot = () => {
    setStateNumber(stateNumber+getRandomInteger())
  }  
 return (
    <div className={classColor} onClick={laasot} >
        {stateNumber}
    </div>
    )
}

 export  {Table,arr,isPrime};