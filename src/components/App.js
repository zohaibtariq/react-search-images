import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
class App extends React.Component {
    onSearchSubmit = (value) => {
        console.log('value from parent component');
        console.log(value);
        axios.get('https://api.unsplash.com/search/photos/', {
            params:{
                query: value
            },
            headers: {
                Authorization: 'Client-ID 1df2292b5c7c7d475695e6a530c2da981ea28c75d4b82a7cde4821e4721dbcdc'
            }
        });
    }
    render() {
        return (
            <div className={`ui container`}>
                <SearchBar onSearchSubmit={(value) => this.onSearchSubmit(value)}/>
            </div>
        )
    }
}
export default App;