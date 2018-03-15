import React, { Component } from 'react'
import './media.css'
class Media extends Component{
  render(){
    const styles = {
      container:{
        color: '#44546b',
        cursor:'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media">
        <div>
          <img
            src="./images/covers/bitcoin.jpg"
            alt="Bitcoin"
            width={260}
            height={160}
          />
          <h3>Hola Mundo</h3>
          <p>Kevin Márquez</p>
        </div>
      </div>
    )
  }
}

export default Media;
