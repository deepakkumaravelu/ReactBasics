import React from 'react'

const Movie = (props) => {
    const rating = props.Rating || "Not Rated";
    const year=props.Year||"Not Mentioned";
  return (
    <>
    <div>Title = {props.Title}</div>
    <div>Year = {year}</div>
    <div>Rating = {rating}</div>
    </>
  )
}


export default Movie;