import React, { Component } from 'react'
import Header from './Header'
import TeamClick from './TeamClick'

class App extends Component{

    render() {
        return (
           <div className="container text-center">
         <Header />
              <TeamClick/>  
                </div>
            
        )
    }
}

export default App