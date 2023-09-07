import React from 'react'

const ToDo = ({text,updateMode,deleteToDo}) => {
  return (
    <div className=''>{text}
    <div className=''>
        <BiEdit onclick={updateMode} />
        <AiFillDelete onclick={deleteToDo}/>
    </div>
    </div>
  )
}

export default ToDo