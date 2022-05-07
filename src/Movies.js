import React, { Component } from 'react'
import Iconm from './Iconm'
import axios from 'axios'
export default class Movies extends Component {

    state={movieData:[],
    input:"",
    filterData:[]}
    componentDidMount(){
        axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        .then((res)=>{
            this.setState({movieData:res.data.Search})
            // console statement
            
            this.inputCh=this.inputCh.bind(this)
        })
    }
   
    inputCh(e){
        let input=e.target.value
        let filterData=this.state.movieData.filter((item,i)=>{
            if(item.Title.toLowerCase().includes(input.toLowerCase())
            )
            return true
        })
        this.setState({input,filterData})
        
    }
  render() {
    return (
      <div id='main'>
           <form action="/">
              
                <input type="text" placeholder="Enter Movie Name here..." onChange={this.inputCh} name="search-box" id="search-box" value={this.state.input} />
            </form>
            <div id='main-wrapper'>


        {
            this.state.input!==""?
            this.state.filterData.map((item,i)=>{
                
                return<Iconm
                Poster={item.Poster}
                Title={item.Title}
                Year={item.Year}
                />
            }):this.state.movieData.map((item,i)=>{
                
                return<Iconm
                Poster={item.Poster}
                Title={item.Title}
                Year={item.Year}
                />
            })

        }
            </div>
            <footer><span>Sudhir react third project</span></footer>
      </div>
    )
  }
}
