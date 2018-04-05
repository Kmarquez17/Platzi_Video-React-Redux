import React,{Component} from 'react'
import './video.css'

class Video extends Component {
  togglePlay(){
    if(this.props.pause){
      this.video.play()
    }else{
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.pause !== this.props.pause){
      this.togglePlay()
    }
  }

  setRef = element => {
    this.video = element
  }
    render(){
      /*Esta condicion trabaja igual que uno ponga this.props.ejemplo, lo
       que hace es simplicar el trabajo es decir solo se pondriera ejemplo en ves de
       this.props.ejemplo*/
      const{
        handleLoadedMetadata,
        autoplay,
        src,
        handleTimeUpdate,
        handleSeeking,
        handleSeeked,
      }= this.props
      return(
        <div className="Video">
            <video
              autoPlay={autoplay}
              src={src}
              ref={this.setRef}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onSeeking={handleSeeking}
              onSeeked={handleSeeked}
            />
        </div>
      )
    }
}

export default Video
