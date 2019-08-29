import React from 'react'
import unsplash from './../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
class App extends React.Component {
    state = {images: []}
    onSearchSubmit = async (value) => {
        const response = await unsplash.get('search/photos/', {
            params:{
                query: value
            }
        })
        this.setState({images: response.data.results})
    }
    render() {
        return (
            <div className={`ui container`}>
                <SearchBar onSearchSubmit={(value) => this.onSearchSubmit(value)}/>
                <p>Found {this.state.images.length} images</p>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
export default App;