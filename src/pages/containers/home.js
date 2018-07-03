//Componente smart

import React,{Component} from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'

class Home extends Component{
  //estados
  state = {
    modalVisible:false,
  }
  //Abre Modal
  handleOpenModal = (media) => {
    this.setState({
      modalVisible:true,
      media
    })
  }
  //Cierra Modal
  handleCloseModal = (event) => {
    this.setState({
      modalVisible:false,
    })
  }
  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related/>
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}//Aqui no va el props por que le mando el evento
            search={this.props.search}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                    autoplay
                    src={this.state.media.src}
                    title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>

    )
  }
}

function mapStateToProps(state,props){
  return {
    categories: state.data.categories,
    search: state.search
  }
}

// mapStateToProps es una función que devuelve las propiedades necesarias, los datos que el componente utilizará
export default connect(mapStateToProps)(Home)
