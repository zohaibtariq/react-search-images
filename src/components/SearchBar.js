import React from 'react';

class SearchBar extends React.Component{
    onInputChange(event){
        console.log('on input change');
        console.log('...value...');
        console.log(event.target.value);
        console.log(event);
    }
    onInputClick(event){
        console.log('on click');
        console.log('...value...');
        console.log(event.target.value);
        console.log(event);
    }
    onInputSubmit(event){
        console.log('on submit');
        console.log('...value...');
        console.log(event.target.value);
        console.log(event);
    }
    render(){
        return (
            <div className={`ui segment`}>
                <form action="" className={`ui form`}>
                    <div className={`field`}>
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} onClick={this.onInputClick} onSubmit={this.onInputSubmit}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;