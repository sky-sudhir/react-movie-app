import React, { Component } from 'react'

export default class Iconm extends Component {
  render() {
    return (
 
              <div className='card'>
              <img src={this.props.Poster} className="card-img" alt="movie-img" />
              <div className='tdiv'>

              <span className='title-name'>{this.props.Title}</span>
              </div>
              </div>


       
    )
  }
}
