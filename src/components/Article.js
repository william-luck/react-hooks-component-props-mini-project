import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes}) {

    let emoji = ''

    if (minutes < 30) {
        emoji = '☕️' // Sets default value of emoji
        let emojiNumber = ~~(minutes/5) // Calculates base number of repeats
        emoji = `${emoji.repeat(emojiNumber)}` // repeats the emoji according to emojiNumber
        let rem = minutes % 5; // determines if there is a remainer
        if (rem > 0 ) { //if there's a remainder, add on another cofee to emoji
            emoji = emoji + '☕️'
        }
    } else {
        emoji = '🍱'
        let emojiNumber = ~~(minutes/10)
        emoji = `${emoji.repeat(emojiNumber)}`
        let rem = minutes % 10;
        if (rem > 0 ) { 
            emoji = emoji + '🍱'
        }
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} ~ 
             {emoji} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;