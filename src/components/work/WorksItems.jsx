import React from 'react'

function WorksItems({items}) {
  return (
    <div className='work__card' key={items.id}>
      <img src={items.image} alt="" className='work__img'/>
      <h3 className='work__title'>{items.title}</h3>
      <a href={items.Demo} className='work__button'>
        demo <i className='bx bx-right-arrow=alt work__button-icon'></i>
      </a>
    </div>
  )
}

export default WorksItems
