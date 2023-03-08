import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import ListContainer from './ListContainer';
import EditIcon from '@mui/icons-material/Edit';
import ErrorMsg from './ErrorMsg';


function App() {

  let [visibility, setuserdvisibility] = useState(['invisible', 'border-light']);
  let [userInput, setuserInput] = useState();
  let [isEdit, setisEdit] = useState(true)
  let [userEdit, setuserEdit] = useState([]);
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
  // console.log(userEdit[0]);
  console.log(userVal);


  function Edit() {

    if (userEdit[0] === userVal.map((val, ind) => { return ind })[userEdit[0]] && userEdit[0] !== undefined) {
      console.log(userEdit[0] === userVal.map((val, ind) => { return ind })[userEdit[0]] && userEdit[0] !== undefined)
      setuserVal((oldv) => {
        let arr = [...oldv]
        arr[userEdit[0]] = userInput
        return arr;
      })

    }

    else {

    }
    setisEdit(isEdit = true)

    setuserInput('');
  }


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
        // console.log(preval)
        return [userInput, ...preval];
      });
    }


    setuserInput('');
  }


  function sendValBack(e) {
    // console.log(e);
    setuserInput(e.target.innerHTML);


    (userInput === "" || userInput === undefined) ? setuserdvisibility((preval) => {
      let oldVal = [...preval];
      oldVal[0] = 'invisible';
      oldVal[1] = 'border-light';
      return oldVal;
    }) : console.log('No value')

    // setuserEdit(e.target.id)
    setuserEdit((prval) => {
      let id = e.target.id
      return [Number(id)]
    })
    setisEdit(isEdit = false)

  }

  function deletIcon(val) {
    setuserVal((oldv) => {
      let arr = [...oldv]
      arr.splice(val, 1,);
      return arr

    })
  }



  return (
    <>
      {/* To Do List Start */}
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center mx-2'>
          <div className='col col-lg-5 col-xg-5 col-sm-6 col-md-6 shadow bg-dark bg-gradient mt-4 px-0 rounded'>
            <div className='row d-flex justify-content-center mt-3'>
              <div className='col-auto h3 myfont text-center text-opacity-50 text-light'>To Do App</div>
            </div>

            {/* Input and a button start */}

            <div className='row d-flex justify-content-center mt-2'>
              <div className='col-10  p-0 rounded'>
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0" value={userInput} onChange={userChange} placeholder="some words"
                    aria-label="Recipient's username" autoFocus />
                  {isEdit ? <button className="btn p-0 ps-3 text-info" type="button" id="button-addon2" onClick={addInList}><AddIcon className='fs-1' /></button>
                    : <button className="btn p-0 ps-3 text-info" type="button" id="button-addon2" onClick={Edit}><EditIcon /></button>}
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
                  return <ListContainer key={ind} value={val} IndexNum={ind} SendValBack={sendValBack} DeLetIcon={deletIcon} />
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


