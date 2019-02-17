import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount = () => {
        this.onTermSubmit('puppy');
    }

    onTermSubmit = async term => {
        // make api call to get list of videos
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = video => {
        // update state so that VideoDetail updates
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui center aligned header">React Videos</h1>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
