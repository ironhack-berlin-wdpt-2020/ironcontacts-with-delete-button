import React from 'react';

function Contact(props) {

  // props.removeContact(props.id)

  let callsDeleteHandlerWithParameters = () => {
    props.removeContact(props.id)
  }

  return (
    <ul>
      <img src={props.picture} alt="" srcSet="" width="200px" />
      <li>{props.name}</li>
      <li>{props.popularity}</li>
      <button onClick={callsDeleteHandlerWithParameters}> DELETE </button>
    </ul>
  )
}

export default Contact;