import  './movieTile.css';
import Image from 'next/image';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MovieTile(props) {
    const editIcon = <FontAwesomeIcon icon={faEllipsisVertical} />;
    let genresArr = [props.movieInfo.genres].toString();
    const genreStr = genresArr.replaceAll(',', ', ');

    return (
        <div className='movieTile-container' >
            <div className='movieTile-imageContainer'>
                <Image className='movieTile-image' src={props.movieInfo?.imageUrl} width="322" height="486" alt='Movie'/>
                <i className="movieTile-editIcon" rotate="90">{editIcon}</i>
            </div>
            <div className='movieTile-info'>
                <div>
                    <p className='movieTile-name'>{props.movieInfo.name}</p>
                    <p className='movieTile-description'>{genreStr}</p>
                </div>
                <p className='movieTile-releaseYear'>{props.movieInfo.releaseYear}</p>
            </div>
        </div>
    )
};