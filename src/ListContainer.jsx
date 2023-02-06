import React from 'react'
import CheckboxIcons from './CheckboxIcon'
import DeleteIcon from './DeleteIcon'

function ListContainer(props) {
  return (
    <div className='row d-flex justify-content-center mt-2 mb-3'>
      <div className='col-10 text-secondary px-0 py-2 rounded bg-dark bg-gradient d-flex justify-content-between myListFont fs-5'>
        <CheckboxIcons /><div className='overflow-auto ContentScroll myfontHover' id={props.IndexNum} type='button' onClick={props.SendValBack}>{props.value}</div> <DeleteIcon DeLeticon={props.DeLetIcon} Id={props.IndexNum} />
      </div>
    </div>
  )
}

export default ListContainer
