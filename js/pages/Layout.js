import React from "react"
import $ from "jquery"

import Body from "../components/Body"
import Footer from "../components/Footer"
import Header from "../components/Header"

require('../../styles/index.scss')

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome !!!!",
      movieArr: []
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  componentWillMount(){
    this.connect();
  }

  connect(){
    var info = {
      "api_key": "",
      "base_uri": "http://api.themoviedb.org/3",
      "images_uri": "http://image.tmdb.org/t/p",
      "timeout": 5000,
      "key" : '?api_key=470fd2ec8853e25d2f8d86f685d2270e'
    };

    // 0aeb56f883f453e1f523338db440eb9e

    // http://image.tmdb.org/t/p/w185//cWWCWbsJa2t0FbQwsdQR27MRP3k.jpg


    var test = 'https://api.themoviedb.org/3/movie/550?api_key=0aeb56f883f453e1f523338db440eb9e';


    var test1 = info.base_uri +'/discover/movie?api_key=0aeb56f883f453e1f523338db440eb9e&sort_by=popularity.desc'+info.key



    $.get(test1, function(data){
      data.results.forEach(function(result, index){
          var imgPath = result.poster_path;

          result.poster_path = info.images_uri + '/w185/' +imgPath;
          this.state.movieArr.push(result);
      }.bind(this));
    }.bind(this));

  }

  render() {

    return (
      <div>
        <Header/>
        <main>
          {this.props.children}
          <Footer/>
        </main>
      </div>
    );
  }
}
