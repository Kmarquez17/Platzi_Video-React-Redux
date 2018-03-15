import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'
class Media extends Component{
  // constructor(props){
  //   super(props)
  //   //(this.handleClick contexto del DOM).(bind(this) contexto de la clase)
  //   this.handleClick = this.handleClick.bind(this)
  // }

  handleClick = () => {
      console.log(this.props.title);
  }

  render(){
    // const styles = {
    //   container:{
    //     color: '#44546b',
    //     cursor:'pointer',
    //     width: 260,
    //     border: '1px solid red'
    //   }
    // }
    return (
      //La propiedad className es igual al atributo class en html, aqui cambia ya que el lenguaje cambia.
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.image}
            alt="Bitcoin"
            width={260}
            height={160}
            className="Media-imagen"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

//la dependencia prop-types valida el tipo de dato que se requiere en el body
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
};

export default Media;
