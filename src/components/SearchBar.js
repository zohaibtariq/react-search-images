import React from 'react'
class SearchBar extends React.Component{
    state = {searchTerm: ''}
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.searchTerm)
    }
    render(){
        return (
            <div className={`ui segment`}>
                <form action="" onSubmit={(event) => this.onFormSubmit(event)} className={`ui form`}>
                    <div className={`field`}>
                        <label>Image Search</label>
                        <input type="text" value={this.state.searchTerm} onChange={e => this.setState({searchTerm: e.target.value})} placeholder={`Type to search`} autoFocus={true}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar