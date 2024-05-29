import React from 'react'
import "../App.css";
export default function Result(props) {
  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <div className="resultHeading">
        <h2 className='font-monospace'>RESULT</h2>
    </div>{
        props.text?
        <img className={`${props.mode}`} id="resultQr" height={props.height} width={props.width} src={`https://image-charts.com/chart?chs=${props.width}x${props.height}&cht=${props.type}&chl=${props.text}&choe=${props.encoding}`} alt=""/>:<h2 className='m-5 p-5 text-muted text-center'>Fill Text Form to Convert to QR</h2>}
    </div>
    
    </>
  )
}
