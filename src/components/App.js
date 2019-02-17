import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async term => {
        // make api call to get list of videos
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items});
    }

    onVideoSelect = video => {
        // update state so that VideoDetail updates
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        );
    }
}

export default App;
