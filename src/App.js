  import './App.css';
  import React, { useState } from 'react'
  function App() {

    const [no ,setno] = useState('')
    const [s ,sets] = useState('')
    const [no1 ,setno1] = useState('')
   
    function btn(e){
      // alert(e.target.value)
      setno(no => no+e.target .value);
      console.log(no)
    }

    function sign(a)
    {
      sets(a.target.value)
      console.log(s)
      setno1(no)
      setno('')
    }

    function del(){
      // alert(no)
      // var d = no.length;
      // var s = ;
      // alert(d)
      setno(no.slice(0,-1));
    }
    function total(){
      if(s === '+')
      {
          var sum = parseFloat(no1) + parseFloat(no);
          setno(sum.toString())
      }
      if(s === '*')
      {
          var multi = parseFloat(no1) * parseFloat(no);
          setno(multi.toString())
      }
      if(s === '-')
      {
          var sub = parseFloat(no1) - parseFloat(no);
          setno(sub.toString())
      }
      if(s === '/')
      {
          var div = parseFloat(no1) / parseFloat(no);
          setno(div.toString())
      }
      
    }
    function Ac(){
      setno('')
    }
    
    function per(){
      if(s === '*')
      {var percentage = parseFloat(no1) * parseFloat(no) /100
      setno(percentage + '%');
    }
    }
    return (
        <div className="container">
        <div className="calculator">
          <input type="text" value={no} placeholder="0" disabled />
          <div >
            <button className="button operator" onClick={Ac}>AC</button>
            <button className="button operator" onClick={del}>DEL</button>
            <button className="button operator" value={'%'} onClick={per}>%</button>
            <button className="button equalBtn" value={'/'} onClick={sign}>/</button>
          </div>
          <div>
            <button className="button" value={'7'} onClick={btn}>7</button>
            <button className="button" value={'8'} onClick={btn}>8</button>
            <button className="button" value={'9'} onClick={btn}>9</button>
            <button className="button equalBtn" value={'*'} onClick={sign}>*</button>
          </div>
          <div>
            <button className="button" value={'4'} onClick={btn}>4</button>
            <button className="button" value={'5'} onClick={btn}>5</button>
            <button className="button" value={'6'} onClick={btn}>6</button>
            <button className="button equalBtn" value={'-'} onClick={sign}>-</button>
          </div>
          <div>
            <button className="button" value={'1'} onClick={btn}>1</button>
            <button className="button" value={'2'} onClick={btn}>2</button>
            <button className="button" value={'3'} onClick={btn}>3</button>
            <button className="button equalBtn" value={'+'} onClick={sign}>+</button>
          </div>
          <div>
            <button className="button" value={'00'} onClick={btn}>00</button>
            <button className="button" value={'0'} onClick={btn}>0</button>
            <button className="button" value={'.'} onClick={btn}>.</button>
            <button className="button equalBtn" onClick={total}>=</button>
          </div>
        </div>
      </div>
    );
  }

  export default App;
