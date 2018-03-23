import React from 'react'
import Media from './media.js'
import Play from '../../icons/components/play'
import Volumen from '../../icons/components/volumen'
import Pause from '../../icons/components/pause'
import './playlist.css'

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    console.log(props.data);
    return(
      <div className="Playlist">
        <Play
            size={30}
            color="blue"
        />
        <Volumen
            size={30}
            color="red"
        />
        <Pause
            size={30}
            color="green"
        />
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id}/>
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
