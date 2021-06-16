import React from 'react';
import Header from './components/header'
import './style.css'
function Home(){
    return <div>
        <Header />
        <main className = 'main'>
            {/*NavBar*/}
            <div className = 'navbar'>

            </div >
            {/*Feed*/}
            <div className = 'feed'>

            </div>
        </main>
    </div>;
}

export default Home;