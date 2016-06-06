import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YT_API_KEY = 'AIzaSyDX5RsEr_ubv368d42tRMYWeyFruyRFYlM';


// Create new component. Should produce some HTML

// const App = function() { //Fat arrow
//     return <div>Hi!</div>; //JSX
// }

//ES6 syntax | identical function | "this" keyword are slightly different
//Always make one component per file
// const App = () => { //Fat arrow
//     return (
//     <div>
//         <SearchBar />
//     </div> //JSX
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: YT_API_KEY, term: term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                    videos={this.state.videos}/>
            </div>
        );
    }
}



// Need to insert component into DOM afterwards (Put component's generated HTML and put it on page)
// Need to make an instance of App to pass it to DOM
ReactDOM.render(<App />, document.querySelector(".container"));

