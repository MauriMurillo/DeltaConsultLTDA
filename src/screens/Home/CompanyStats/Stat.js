import React from 'react'

function Stat(props) {
  const content = props.contenido;

  return (
    <div className='stat'>
      <div className='logoContainer'>
        {/* <img src={content.icon} className='iconStat' alt='icon'/> */}
      </div>
      <p className='titleStat'> {content.title}</p>
      <p className="textStat">  {content.text}</p>
    </div>
  )
}

export {Stat}
