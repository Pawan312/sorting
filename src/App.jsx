import React, { useEffect, useState } from "react";
import Bar from "./Components/Bar";

function App() {
  const arr = [30, 1, 14, 20, 5];


  const [brr, setBrr] = useState(arr);

  const buttonClick = async() => {
    console.log('bubbleSort');
    const newarr = [...brr];
      
      let n = brr.length;
      for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n - i - 1; j++) {
          if (newarr[j] > newarr[j + 1]) {
            let temp = newarr[j + 1];
              newarr[j + 1] = newarr[j];
              newarr[j] = temp;
              const secarr = [...newarr];

              await new Promise(resolve => setTimeout(resolve, 1000));
              
              setBrr(secarr);
          }
        }
        
      }
      return;
      
  };

  

  const selectionSort = async() => {
    console.log('selectionSort');
      const newarr = [...brr];
      let n = brr.length;
      
      for (let i = 0; i < n; i++) {
        let x = Number.MAX_SAFE_INTEGER ;
        let k;
        for (let j = i; j < n ; j++) {
          if(newarr[j]<x){
            x = newarr[j];
            k = j;
          }
        }
        let temp = newarr[i];
        newarr[i] = newarr[k];
        newarr[k] = temp;

        const secarr = [...newarr];

        
        await new Promise(resolve => setTimeout(resolve, 2000));

        setBrr(secarr);
        
      }
      return;
  };


  

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center h-screen bg-orange-200">
        <div className="flex justify-center bg-red-800 px-5">
          {brr.map((num, idx) => (
            <Bar value={num} key={idx} />
          ))}
        </div>
        <div className="flex">
          <button
            onClick={() => (buttonClick())}
            className="border border-black px-2 py-2 bg-red-500"
          >
            BubbleSort
          </button>
          <button
            onClick={() => (selectionSort())}
            className="border border-black px-2 py-2 bg-red-500"
          >
            SelectionSort
          </button>
          <button
            onClick={() => (buttonClick())}
            className="border border-black px-2 py-2 bg-red-500"
          >
            BubbleSort
          </button>
          <button
            onClick={() => (buttonClick())}
            className="border border-black px-2 py-2 bg-red-500"
          >
            BubbleSort
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
