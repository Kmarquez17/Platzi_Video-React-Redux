//Componente smart

import React,{Component} from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'


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
            categories={this.props.data.categories}
            handleOpenModal={this.handleOpenModal}//Aqui no va el props por que le mando el evento
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
export default Home
