import React from 'react'
import Tweet from './Tweet'


const Tweets = (props: any) => {
    const tweets = [
        {name:  'Buba', title: 'JavaScript', tweet: 'JavaScript is one of the most powerful programing languages'}, 
        {name:  'Abu', title: 'React', tweet: 'React is one of the JavaScript Frontend frameworks'}, 
        {name:  'Alis', title: 'Typescript', tweet: 'Typescript is one of the programming languages '}, 
        {name:  'Seedik', title: 'Redux', tweet: 'Redux for state management'},
    ];
    return (
        <section>
            {tweets.map(tweet => (
              <Tweet key={tweet.title} name={tweet.name} title={tweet.title} tweet={tweet.tweet}/>
              
            ))}
        </section>
    )
}

export default Tweets
