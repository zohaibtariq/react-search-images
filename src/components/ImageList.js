import React from 'react'
class ImageList extends React.Component{
    render = () => {
        const images = this.props.images.map(({id, urls, description}) => {
            return (
                <div key={id}>
                    <img src={urls.regular} alt={description}/>
                </div>
            );
        });
        return (
            <div>{images}</div>
        );
    }
}
export default ImageList;