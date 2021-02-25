import React from 'react';
import UserCreate from './userCreate'
import LanguageContext from './../contexts/languageContext'
import colorContext from './../contexts/colorContext'
import LanguageSelector from './../components/languageSelector'
import { LanguageStore } from './../contexts/languageContext'

class App extends React.Component{
   render(){
     return (
         <div className="ui container">
           <LanguageStore>
           <LanguageSelector/>
             <colorContext.Provider value='red'>
                   <UserCreate/>
             </colorContext.Provider>
           </LanguageStore>
         </div>
     )
   }
}

export default App;