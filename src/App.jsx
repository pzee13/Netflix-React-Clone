
// import Baner from "./Componets/Baner/Baner"
import Banner from "./Componets/Banner/Banner";
import Movies from "./Componets/Movies/Movies"
import NavBar from "./Componets/Navbar/NavBar"
import {actionUrl, popularUrl ,comedyUrl,romanceUrl,horrorUrl,documentary} from './Constants/constants';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Movies url={popularUrl} title='Popular on Netlix' color = 'Red'/>
      <Movies url={actionUrl} title='Action Movies' color = 'blue'/>
      <Movies url={documentary} title='Documentary on netflix' color='yellow'/>
      <Movies url={romanceUrl} title='Romance Movies' color='white'/>
      <Movies url={comedyUrl} title='Comedy Movies' color='green'/>
      <Movies url={horrorUrl} title='Horror Movies' color='black'/>
    </div>
  )
}

export default App