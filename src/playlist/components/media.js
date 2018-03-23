import React, { /*Component*/ PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'
class Media extends PureComponent{
  state = {
    author: ''
  }
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     author: props.author,
  //   }
  //   //(this.handleClick contexto del DOM).(bind(this) contexto de la clase)
  //   //this.handleClick = this.handleClick.bind(this)
  // }

  handleClick = () => {
      //console.log(this.props.title);
      this.setState({
        author: 'Ricardo Celis',
      })
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
            src={this.props.cover}
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
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
};

export default Media;


/*
  --Ciclo de vida de un componentes
    Los métodos de los Componentes son llamados en momentos específicos:

  -----------------------------------------------------------------
    Montado: El momento en que el componente entra en escena.
  -----------------------------------------------------------------

    ** Constructor: método llamado antes de que el componente sea montado (componente aun no se ve).
      ->Podemos iniciar el estado
      ->Enlazar eventos (bind).
      ->Es el primer metodo que se llama al instanciar un componente.

   ** componentWillMount: método llamado inmediatamente antes de que el componente se vaya a montar (componente aun no se ve).
      ->Podemos hacer un setState()
      ->No hacer llamados a un API o suscripción a eventos.

    ** Render: método que contiene todos los elementos a renderizar (estructura del componente).
      ->Contiene JSX en el return.
      ->Puedes calcular propiedades nCompleto = name + lastName.

    ** componentDidMount: Método llamado luego de montarse el componente (el componente ya esta en la pantalla).
      ->Solo se lanza una vez.
      ->Enlazar (bind) de eventos.
      ->Es el primer método que se llama al instanciar un componente.
      ->Aqui podemos utilizar APIs (Navegador o Datos Externos).

  -----------------------------------------------------------------
    Actualización
  -----------------------------------------------------------------

    ** componentWillReceiveProps: método llamado al recibir nuevas propiedades que sirve para actualizar el estado con base a las nuevas propiedades.
    ** shouldComponentUpdate: método que condiciona si el componente se debe volver a renderizar, es utilizado para optimizar el rendimiento.
    ** componentWillUpdate: método llamado antes de re-renderizar un componente, es utilizado para optimizar el rendimiento.
    ** Render: método que realiza el re-render.
    ** componentDidUpdate: método llamado luego del re-render.
  -----------------------------------------------------------------
    Desmontado
  -----------------------------------------------------------------
    **  componentWillUnmount: método llamado antes de que el componente sea retirado de la aplicación.
  -----------------------------------------------------------------
    Manejo de Errores
  -----------------------------------------------------------------
    ** componentDidCatch: método llamado cuando ocurre un error al renderizar el componente, el manejo de errores solamente ocurre en componentes hijos.
*/
