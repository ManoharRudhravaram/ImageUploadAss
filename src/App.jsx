import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { commonHandler, fileHandler, submitHandler } from './Action/actionCreator';

function App() {
  let dispatch = useDispatch();
  let arr = useSelector((data) => {
    return data.arr
  })

  return (
    <>
      <form>
        <input type="text" name='text' onChange={(e) => { dispatch(commonHandler(e)) }} /><br /><br />
        <input type="password" name='password' onChange={(e) => { dispatch(commonHandler(e)) }} /><br /><br />
        <input type="file" name="file" onChange={(e) => { dispatch(fileHandler(e)) }} /> <br />
        <input type="submit" name='submit' onClick={(e) => {
          dispatch(submitHandler(e))
        }} />
      </form>
        {
          arr.map((item, i) => {
            return <div key={i} style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
              <h1>{item.text}</h1>
              <h1>{item.password}</h1>
              <img src={item.file} alt="x" style={{ height: '150px' }} />
            </div>
          })
        }
    </>
  )
}

export default App