import React from 'react';
import './ElementoVideo.css';


const ElementoVideo = ({id, url ,isAutoPlay=true, isLoop=true, isControles=false, estilosReproductorVideo, onEnded}) => {
    
    return (
        <React.Fragment>
            <div className="contenedorVideo">
                <video
                    id={id} 
                    className={estilosReproductorVideo} 
                    src={url} autoPlay={isAutoPlay} 
                    muted loop={isLoop} 
                    controls={isControles}
                    onEnded={onEnded}
                >
                </video>
            </div>        
        </React.Fragment>
    )
}
export default ElementoVideo;