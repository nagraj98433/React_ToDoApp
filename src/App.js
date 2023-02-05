import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import ListContainer from './ListContainer';
import ErrorMsg from './ErrorMsg';

function App() {

  let [visibility, setuserdvisibility] = useState(['invisible', 'border-light']);
  let [userInput, setuserInput] = useState();
  let [userVal, setuserVal] = useState(['Javascript', 'Flutter', 'Reactjs',
    'Python', 'Angular', 'Wordpress', 'Vuejs']);

  const userChange = (e) => {
    // console.log(e.target.value);
    let User_val = e.target.value;
    setuserInput(User_val)
    setuserdvisibility((preval) => {
      let oldVal = [...preval]
      oldVal[0] = 'invisible'
      oldVal[1] = 'border-light'
      return oldVal
    })
  }

  // console.log(visibility);
  // console.log(userVal);


  function addInList() {

    if (userInput === "" || userInput === undefined) {
      setuserdvisibility((preval) => {
        let oldVal = [...preval];
        oldVal[0] = 'visible';
        oldVal[1] = 'border-danger';
        return oldVal;
      })
    }
    else {
      setuserVal((preval) => {
        return [userInput, ...preval];
      });
    }

    setuserInput('');
  }

  function sendValBack(e) {
    // console.log(e.target.innerHTML);
    setuserInput(e.target.innerHTML);

    (userInput === "" || userInput === undefined) ? setuserdvisibility((preval) => {
      let oldVal = [...preval];
      oldVal[0] = 'invisible';
      oldVal[1] = 'border-light';
      return oldVal;
    }) : console.log('No value')

  }


  return (
    <>
      {/* To Do List Start */}
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center mx-2'>
          <div className='col col-lg-5 col-xg-5 col-sm-6 col-md-6 shadow bg-dark bg-gradient mt-4 px-0 rounded'>
            <div className='row d-flex justify-content-center mt-3'>
              <div className='col-auto h3 myfont text-center text-opacity-25 text-dark-emphasis'>To Do App</div>
            </div>

            {/* Input and a button start */}

            <div className='row d-flex justify-content-center mt-2'>
              <div className='col-9  px-0 rounded'>
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0" value={userInput} onChange={userChange} placeholder="some words"
                    aria-label="Recipient's username" autoFocus />
                  <button className="btn bg-dark bg-gradient px-3 text-light" type="button" id="button-addon2" onClick={addInList}><AddIcon /></button>
                </div>
                <ErrorMsg D_block={visibility[0]} />

              </div>
            </div>
            {/* Input and a button end */}


            {/* underlined start */}

            <div className='row d-flex justify-content-center mt-2'>
              <div className={`col-10 mb-2  border-bottom ${visibility[1]} border-2 myBorderTransition`}></div>
            </div>

            {/* underlined end */}


            {/* List Container start */}
            <div className='py-2'>
              <div className='List_body_scoll'>
                {userVal.map((val, ind) => {
                  return <ListContainer key={ind} value={val} SendValBack={sendValBack} />
                })}
              </div>
            </div>


            {/* List Container end */}

          </div>
        </div>
      </div>

      {/* To Do List End */}
    </>
  )
}

export default App


