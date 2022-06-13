import React, { useState } from 'react'
import './Form.css'

const Form = ({form,setForm}) => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [title, setTitle] = useState("")
    const [gender, setGender] = useState("")
    const [photo, setPhoto] = useState("")
    

    const handleSubmit = (event) => {
        event.preventDefault()
        
        setName('');
        setSurname('');
        setTitle('');
        setPhoto('');

        setForm ([...form,{
            photo: photo,
            title: title,
            name: name,
            surname: surname,
            gender: gender
        }])
        
    }


  return (
    <>
    <div id='form' className='container-fluid d-flex justify-content-center border form-container field'>
        <form className='my-5 p-5 text-white' onSubmit={handleSubmit}>
            <h2>Personnel Adding Form</h2>
            <div className='input-group mb-3'>
                <label>Name 
                <input 
                    type="text"
                    className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </label>
            </div>
            <div className='input-group mb-3'>
                <label>Surname 
                <input 
                    type="text"
                    className='form-control'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                />
                </label>
            </div>
            <div className='input-group mb-3'>
                <label>Title 
                <input 
                    type="text"
                    className='form-control'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            </div>
            
            <div className='form-check'>
                <input 
                    type="radio"
                    className='form-check-input'
                    name='radio-btn-gender'
                    id='male'
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                />
                <label className='form-check-label' htmlFor='male'>Male
                </label>

            </div>
            
            <div className='form-check'>
                <input 
                    type="radio"
                    className='form-check-input'
                    name='radio-btn-gender'
                    id='female'
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                />
                <label className='form-check-label' htmlFor='female'>Female
                </label>
            </div>

            <div className='form-check mb-3'>
                <input 
                    type="radio"
                    className='form-check-input'
                    name='radio-btn-gender'
                    id='other'
                    value="Other"
                    onChange={(e) => setGender(e.target.value)}
                />
                <label className='form-check-label' htmlFor='other'>Other
                </label>
            </div>

            <div className='input-group mb-3'>
                <input 
                    type="text"
                    className='form-control'
                    id='choose-photo'
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Add your photo url"
                    required
                />
                <label className='input-group-text' htmlFor='choose-photo'>Profile Photo</label>
            </div>
            
            <div className='d-grid gap-2 col-6 mx-auto'>
                <button type="submit" className="btn btn-outline-success mt-5">Submit</button>
            </div>
            
        </form>
    </div>
    
    </>
    
  )
}

export default Form;
