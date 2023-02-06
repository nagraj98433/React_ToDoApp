import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function DeleteIcon(props) {
    return (
        <span type="button" className='text-opacity-25 text-light ps-1 deletIcon' ><DeleteOutlineIcon onClick={() => { props.DeLeticon(props.Id) }} /></span>
    )
}

export default DeleteIcon
