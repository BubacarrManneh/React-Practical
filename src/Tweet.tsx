import React from 'react'
// import Tweets from './Tweets'


const Tweet = (props: any) => {
    return (
        <div>
           <h2>Name: {props.name}</h2>
           <h2>Titile: {props.title}</h2>
           <h2>Tweet: {props.tweet}</h2>
        </div>
    )
}

export default Tweet
