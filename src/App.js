import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import ListContainer from './ListContainer';
import ErrorMsg from './ErrorMsg';

function App() {


  let [visibility, setuserdvisibility] = useState('invisible');
  let [userInput, setuserInput] = useState();
  let [userVal, setuserVal] = useState(['Javascript', 'Flutter', 'Reactjs']);

  const userChange = (e) => {
    // console.log(e.target.value);
    let User_val = e.target.value;
    setuserInput(User_val)
    setuserdvisibility("invisible")
  }

  // console.log(userInput);
  // console.log(userVal);


  const addInList = () => {
    (userInput === "" || userInput === undefined) ? setuserdvisibility("visible")
      : setuserVal((preval) => {
        return [...preval, userInput]
      });

    setuserInput('');

  }


  return (
    <>
      {/* To Do List Start */}
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center mx-2'>
          <div className='col col-lg-5 col-xg-5 col-sm-6 col-md-6 shadow bg-white mt-5 px-0 rounded'>
            <div className='row d-flex justify-content-center mt-3'>
              <div className='col-auto h3 myfont text-center text-opacity-25 text-dark'>To Do App</div>
            </div>

            {/* Input and a button start */}

            <div className='row d-flex justify-content-center mt-2'>
              <div className='col-9  px-0 rounded'>
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0" value={userInput} onChange={userChange} placeholder="some words"
                    aria-label="Recipient's username" autoFocus />
                  <button className="btn bg-info px-3" type="button" id="button-addon2" onClick={addInList}><AddIcon /></button>
                </div>
                <ErrorMsg D_block={visibility} />

              </div>
            </div>
            {/* Input and a button end */}


            {/* underlined start */}

            <div className='row d-flex justify-content-center mt-2'>
              <div className='col-10 mb-2 text-danger border-bottom border-sacondary border-2'></div>
            </div>

            {/* underlined end */}


            {/* List Container start */}

            {userVal.map((val, ind) => {
              return <ListContainer key={ind} value={val} />

            })}

            {/* List Container end */}

          </div>
        </div>
      </div>

      {/* To Do List End */}
    </>
  )
}

export default App


