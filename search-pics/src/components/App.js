import React from 'react';
import axios from 'axios'
import Searchbar from './Searchbar.js'
import ImageList from './imageList.js'

class App extends React.Component{
	state = {images: []};

	onSearchSubmit = async (term)=>{
		const response= await axios.get('https://api.unsplash.com/search/photos',{
			params: { query: term},
			headers:{
				Authorization: 'Client-ID ba872de4ec580c4824eba955b8d18772642cd50e0993ea895db1dc0d8c7e376a'
			}

		});

		this.setState({images: response.data.results});

	}
	
	render(){
	return (
		<div className="ui container" style={{ marginTop: '10px'}}>
		<Searchbar onSubmit={this.onSearchSubmit} />
		<ImageList images={this.state.images}/>
		</div>
		);
	}
}


export default App; 