import React from 'react'
import languageContext from './../contexts/languageContext';
class Field extends React.Component{
    static contextType = languageContext
    render(){
        
        return(
            
            <div className="ui field">
                <label>
                    <languageContext.Consumer>
                        {(value)=> value.language==='english' ? 'Name' : 'Naam'}
                    </languageContext.Consumer>
                </label>
                <input />
            </div>
          )
    }
}

export default Field;