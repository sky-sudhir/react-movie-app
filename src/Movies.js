import React, { Component } from 'react'
import Iconm from './Iconm'
import axios from 'axios'
export default class Movies extends Component {

    state={movieData:[],
    input:"",
    filterData:[]}
    componentDidMount(){
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
        .then((res)=>{
            this.setState({movieData:res.data.results})
            // console statement
            
            this.inputCh=this.inputCh.bind(this)
        })
    }
    componentDidUpdate(){
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.state.input}&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then((res)=>{
            
            let filterData=res.data.results.filter((item,i)=>{
                if(item.title.toLowerCase().includes(this.state.input.toLowerCase())
                )
                return true
            })
            this.setState({filterData})

        })
    }
   
    inputCh(e){
        let input=e.target.value
        // let filterData=this.state.movieData.filter((item,i)=>{
        //     if(item.Title.toLowerCase().includes(input.toLowerCase())
        //     )
        //     return true
        // })
        this.setState({input})
        
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
                Poster={item.poster_path}
                Title={item.title}
              
                />
            }):this.state.movieData.map((item,i)=>{
                
                return<Iconm
                Poster={item.poster_path}
                Title={item.title}
              
                />
            })

        }
            </div>
            <footer><span>Sudhir react third project</span></footer>
      </div>
    )
  }
}
