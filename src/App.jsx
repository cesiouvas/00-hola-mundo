import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App () {
    return (
        <>
            <TwitterFollowCard 
                avatar="https://unavatar.io/elrichmc?ttl=1h"
                userName="ElRichMc"
                name="ElrichMC"
                isFollowing={ true }
            />

            <TwitterFollowCard 
                avatar="https://unavatar.io/folagor03?ttl=1h"
                userName="Yo"
                name="Yo"
                isFollowing={ false }
            />
        </>
    )
}