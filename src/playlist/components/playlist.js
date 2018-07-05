import React from 'react'
import MediaContainer from '../containers/media'
import './playlist.css'

function Playlist(props) {
    // const playlist = props.data.categories[0].playlist
    // console.log(props.data);
    return(
      <div className="Playlist">
        {
          props.playlist.map((mediaId) => {
            return <MediaContainer  handleOpenModal={props.handleOpenModal} id={mediaId} key={mediaId}/>
          })
        }
      </div>
    )
}
export default Playlist

// import React, { Component } from 'react'
// import Media from './media.js'
// import './playlist.css'
//
//
// class Playlist extends Component{
//   render() {
//     const { categories } = this.props.data
//     return (
//       <div>
//         {
//           categories.map(category =>
//             <div key={category.id}>
//               <h1>{category.title}</h1>
//               <h3>{category.description}</h3>
//               <div className="Playlist">
//                 {
//                   category.playlist.map(item =>
//                     <Media
//                       key={item.id}
//                       {...item}
//                     />)
//                 }
//               </div>
//             </div>
//           )
//         }
//       </div>
//     )
//   }
// }
//
// export default Playlist
