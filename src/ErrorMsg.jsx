import React from 'react'

function ErrorMsg(props) {

    // console.log(props.D_block);
    let visible = props.D_block
    return (
        <p className={`small my-0 text-warning  mytransition ${visible}`}>You didn't type anything...!!</p>
    )
}

export default ErrorMsg
