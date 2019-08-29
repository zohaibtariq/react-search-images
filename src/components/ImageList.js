import './ImageList.css';
import React from 'react'
import ImageCard from "./ImageCard";
class ImageList extends React.Component{
    render = () => {
        console.log('recieved???')
        console.log(this.props.images)
        const images = this.props.images.map(({id, urls, description}) => {
            return (
                <ImageCard key={id} id={id} url={urls.regular} description={description}/>
            );
        });
        return (
            <div className={`image-list`}>{images}</div>
        );
    }
}
export default ImageList;