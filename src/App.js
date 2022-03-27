import './App.css';
import React from 'react'
import Shopping from './components/shoppingItem'
import Bucket from './components/bucketItem'

function App() {
  const[shopping,setShopping]=React.useState([{
    id:1,
    name:"milk",
    price:20,
    count:5
  },{
    id:2,
    name:"butter",
    price:35,
    count:3
  },
  {
    id:3,
    name:"bread",
    price:15,
    count:5,
  }])
  const[bucket,setBucket]=React.useState([])
  const[price,setPrice]=React.useState(0)
  function handleAddItems(id,Price,count){
    if(count===0){
      alert("the item is out of stock")
      return;
    }
    let idx=shopping.findIndex((e)=>e.id===id);
    let the_shopping=[...shopping]
    the_shopping[idx].count--;
    let the_price=price
    the_price=the_price+Price
    setPrice(the_price)
    setShopping(the_shopping);

    let bucketIdx=bucket.findIndex((e)=>e.id===id)
    //console.log(bucketIdx)

    if(bucketIdx!==-1){
      let the_bucket=[...bucket]
      the_bucket[bucketIdx].count++
      setBucket(the_bucket)
     // console.log("triggered")
    }else{
      let the_bucket=[...bucket]
      let new_el={...the_shopping[idx]}
      new_el.count=1;
      the_bucket.push(new_el)
      setBucket(the_bucket)
    }
  }
  function handleRemoveItems(id,Price,count){
    let idx=shopping.findIndex((e)=>e.id===id);
    let the_shopping=[...shopping]
    the_shopping[idx].count++;
    let the_price=price
    the_price=the_price-Price
    setPrice(the_price)
    setShopping(the_shopping);
    
    let the_bucket=[...bucket]
    let the_index=the_bucket.findIndex((e)=>e.id===id)
    if(count===1){
      the_bucket.splice(the_index,1)
    }else{
      the_bucket[the_index].count--
    }
    setBucket(the_bucket)
  }
  return (
    <div className="container">
     <div className="shopping-feed">
        shopping feed
        {shopping.map((e)=>(
          <Shopping
          key={e.id}
          id={e.id}
          name={e.name}
          price={e.price}
          count={e.count}
          addItems={handleAddItems}
          />
  ))}
     </div>
     <div className="bucket-List">
       Bucket List
       {bucket.map((e)=>(
          <Bucket
          key={e.id}
          id={e.id}
          name={e.name}
          price={e.price}
          count={e.count}
          removeItems={handleRemoveItems}
          />
  ))}
     </div>
     <div>Price:{price}</div>
    </div>
  );
}

export default App;
