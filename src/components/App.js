import React from 'react'
import axios from './../api/unsplash'
import SearchBar from './SearchBar'
class App extends React.Component {
    state = {images: []}
    onSearchSubmit = async (value) => {
        console.log('value from parent component');
        console.log(value);
        const response = await axios.get('search/photos/', {
            params:{
                query: value
            }
        })
        console.log(response.data.results);
        this.setState({images: response.data.results})
    }
    render() {
        return (
            <div className={`ui container`}>
                <SearchBar onSearchSubmit={(value) => this.onSearchSubmit(value)}/>
                <p>Found {this.state.images.length} images</p>
            </div>
        )
    }
}
export default App;