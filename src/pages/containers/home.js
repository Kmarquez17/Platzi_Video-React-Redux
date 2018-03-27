//Componente smart

import React,{Component} from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'

class Home extends Component{
  //estados
  state = {
    modalVisible:false,
  }
  //Abre Modal
  handleOpenModal = () => {
    this.setState({
      modalVisible:true,
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
                <h1>Esto es un portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
    )
  }
}
export default Home
