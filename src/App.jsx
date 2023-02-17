import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [{
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
},
{
    userName: 'billgates',
    name: 'Bill Gates',
    isFollowing: false
},
{
    userName: 'Notch',
    name: 'Markus',
    isFollowing: false

},
{
    userName: 'Faustouri',
    name: 'Fausto Uriarte',
    isFollowing: false
}]

export function App () {
    return (
        <section className='App'>
            {
                users.map(user =>{
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}