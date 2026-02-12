import goku from './assets/download.jpg'
import vegeta from './assets/download1.jpg'
import gohan from './assets/download2.jpg'
import broly from './assets/download3.jpg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  

  return (
    <div className='grid grid-cols-4 gap-3 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 p-[1rem]'>
      <UserCard name="Goku" img={goku} like="10M" comment="200K" share="800K"/>
      <UserCard name="Vegeta" img={vegeta} like="10M" comment="300K" share="500K"/>
      <UserCard name="Gohan" img={gohan} like="6M" comment="400K" share="600K"/>
      <UserCard name="Broly" img={broly} like="8M" comment="500K" share="300K"/>
    </div>
  )
}

export default App
