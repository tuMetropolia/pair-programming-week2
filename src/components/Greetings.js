import React from 'react'

const Greetings = (props) => {
    let greet = "";
    const language = props.lang;
    switch (language) {
        case "fi":
            greet = "Moi";
            break;
        case "de":
            greet = "Hallo";
            break;
        case "en":
            greet = "Hi";
            break;
        case "es":
            greet = "Hola";
            break;
        case "fr":
            greet = "Bonjour";
            break;
    }

  return (
    <div>
      <p>{greet}, {props.children}</p>
    </div>
  )
}

export default Greetings
