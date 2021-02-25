import React from 'react';
import languageContext from './../contexts/languageContext';
import LanguageContext from './../contexts/languageContext'
import colorContext from './../contexts/colorContext'

class Button extends React.Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context === 'english' ? 'submit' : 'voorleggen';
        return (
            <colorContext.Consumer>
                {
                    color => this.renderButton(color)
                }
            </colorContext.Consumer>

        )
    }

    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {value => value.language === 'english' ? 'submit' : 'voorleggen'}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button;