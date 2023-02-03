import React from 'react'

function ErrorMsg(props) {

    // console.log(props.D_block);
    let visible = props.D_block
    return (
        <p className={`small my-0 text-danger mytransition ${visible}`}>You did not type anything! type first!</p>
    )
}

export default ErrorMsg
