import React from 'react'
import CheckboxIcons from './CheckboxIcon'
import DeleteIcon from './DeleteIcon'

function ListContainer(props) {
    return (
        <div className='row d-flex justify-content-center mt-2 mb-3'>
            <div className='col-10 text-success px-0 py-2 rounded bg-light d-flex justify-content-between myListFont fs-5'>
                <CheckboxIcons />{props.value} <DeleteIcon />
            </div>
        </div>
    )
}

export default ListContainer
