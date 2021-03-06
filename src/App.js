import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Header from './raw/header'
import Footer from './raw/footer'
import Pagenotfound from './raw/pageNotFound'
// import Adver from './raw/Ad'

import Downloads from './views/FAZLAN/indexDownloads'
import Forum from './views/ASHANSA/indexForum'
import Home from './views/NETHU/indexHome'
import Subtitles from './views/NIPUNA/subtitlesMainPage'
import Faq from './views/NIPUNI/indexFAQ'


import SubtitleTVseries from './views/FAZLAN/SubtitlesTvSeries' 
import MainDownload from './views/FAZLAN/mainDownload'
import VideoLsit from './views/FAZLAN/videoList'
import AudioList from './views/FAZLAN/AudioList'
import OriginalAudio from './views/FAZLAN/OriginalAudio'

import moviePage from './views/NIPUNA/moviePage'
import englishMoviePg from './views/NIPUNA/englishMoviePage'

import genaralLink1 from './views/NIPUNI/genaralLink1'
import subtitlesLink1 from './views/NIPUNI/subtitlesLink1'



import zoomlkforum from './views/ASHANSA/zoomlkforum'
import announcements from './views/ASHANSA/announcements'
import rulescomment from './views/ASHANSA/rulescomment'

import moviePage_ from './views/NETHU/moviePage_'
import movie from './views/NETHU/movie'
import login_ from './views/NETHU/login_'
import Register_ from './views/NETHU/Register_'
import latestmovie from './views/NETHU/latestmovie'
import tvseries from './views/NETHU/tvseries'
import requestmovie from './views/NETHU/requestmovie'
//import searchmovies from './views/NETHU/searchmovies'


export default class App extends Component {

  render() {
    return (
      <div>       
        <Router>
          <div >
          <Header />
              <div style={{ margin: "0 auto",
                  width:"90%",
                  clear: "both"}}>
                  <Switch>
                      <Route path="/Home" exact static component = {Home} />
                      <Route path="/Downloads" exact static component = {Downloads} />
                      <Route path="/Subtitles" exact static component = {Subtitles} />
                      <Route path="/Forum" exact static component = {Forum} />
                      <Route path="/Faq" exact static component = {Faq} />
                      <Route path="/SubtitleTVseries" exact static component = {SubtitleTVseries} />
                      <Route path="/MainDownload" exact static component = {MainDownload} />
                      <Route path="/GenaralAnswer" exact static component = {genaralLink1} />
                      <Route path="/AudioOriginal" exact static component = {Faq} />
                      <Route path="/AudioRemix" exact static component = {Faq} />
                      <Route path="/zoomlkforum" exact static component = {zoomlkforum} />
                      <Route path="/announcements" exact static component = {announcements} />
                      <Route path="/rulescomment" exact static component = {rulescomment} />
                      <Route path="/englishMoviePage" exact static component = {englishMoviePg}/>

                      <Route path="/GenaralAnswer" exact static component = {genaralLink1} />
                      <Route path="/SubAnswer" exact static component = {subtitlesLink1} />


                      <Route path="/VideoLsit" exact static component = {VideoLsit} />
                      <Route path="/AudioList" exact static component = {AudioList} />
                      <Route path="/OriginalAudioList" exact static component = {OriginalAudio} />
                      <Route path="/MoviePage" exact static component = {moviePage} />
                      <Route path="/MainDownload" exact static component = {MainDownload} />
                      <Route path="/moviePage_" exact static component = {moviePage_}/>
                      <Route path="/movie" exact static component = {movie}/>
                      <Route path="/login_" exact static component = {login_} />
                      <Route path="/Register_" exact static component = {Register_} />
                      <Route path="/latestmovie" exact static component = {latestmovie} />
                      <Route path="/tvseries" exact static component = {tvseries} />
                      <Route path="/requestmovie" exact static component = {requestmovie} />

                      
                      <Route path="**" exact static component = {Pagenotfound} />
                      
                  </Switch>
                  </div>
          <Footer />
        </div>
        </Router>
      </div>
    );
  }
}

