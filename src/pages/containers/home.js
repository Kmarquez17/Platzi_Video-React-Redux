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
import {List as list} from 'immutable'
import {openModal,closeModal} from '../../actions/index'
class Home extends Component{
  //estados
  state = {
    modalVisible:false,
  }
  //Abre Modal
  handleOpenModal = (id) => {
    // this.setState({
    //   modalVisible:true,
    //   media
    // })
    this.props.dispatch(openModal(id))
  }
  //Cierra Modal
  handleCloseModal = (event) => {
    // this.setState({
    //   modalVisible:false,
    // })
    this.props.dispatch(closeModal())
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
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                    autoplay
                    id={this.props.modal.get('mediaId')}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>

    )
  }
}

function mapStateToProps(state, props) {
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.get('data').get('entities').get('categories').get(categoryId)
  })
  let searchResults = list()
  const search = state.get('data').get('search');
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return {
    categories: categories,
    search: searchResults,
    modal: state.get('modal')
  }

}

export default connect(mapStateToProps)(Home)