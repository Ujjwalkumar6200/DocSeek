import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Myprofile = () => {

 const {userData, setUserData, token, backendUrl, loadUserProfileData} = useContext(AppContext)

  const [isEdit,setIsEdit] = useState(false)
  const [image,setImage] = useState(false)

  const uploadUserProfileData = async ()=>{

  }

  return userData &&  (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      {
        isEdit
        ? <label htmlfor="image">
            <div>
              <img src={image ? URL.createObjectURL(image): userData.image} alt="" />
              <img src={image ? URL.createObjectURL(image): userData.image} alt="" />
            </div>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id="image"  hidden/>
        </label>
        :<img className='w-36 rounded' src={userData.image} alt="" />
      }
      { 
       isEdit
        ?<input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type = "text" value={userData.name} onChange={e => setUserData(prev =>({... prev,name:e.target.value }))} />
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
        <hr className='bg-zinc-400 h-[1px] border-none' />
        <div>
          <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email id:</p>
            <p className='text-blue-500'>{userData.email}</p>
            <p className='font-medium'>Phone:</p>
            { 
              isEdit
                ?<input className='bg-gray-100 max-w-52' type = "text" value={userData.phone} onChange={e => setUserData(prev =>({... prev,phone:e.target.value }))} />
                 : <p className='text-blue-400'>{userData.phone}</p>
             }
             <p className='font-medium'>Address:</p>
             {
              isEdit
              ? <p>
                <input className='bg-gray-50' type="text" onChange={e => setUserData(prev =>({... prev,address:{... prev.address,line1:e.target.value }}))} value={userData.address.line1}/>
                <br />
                <input className='bg-gray-50' onChange={e => setUserData(prev =>({... prev,address:{... prev.address,line2:e.target.value }}))} value={userData.address.line2} type="text" />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
             }
          </div>
        </div>
        <div>
          <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Gender:</p>
          { 
       isEdit
        ? <select className='max-w-28 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev,gender:e.target.vaalue}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        : <p className='text-gray-400'>{userData.gender}</p>
      }
      <p className='font-medium'>Birthday:</p>
      {
        isEdit ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({...prev,dob:e.target.vaalue}))} value={userData.dob}/> 
        : <p className='text-gray-400'>{userData.dob}</p>
      }

          </div>
        </div>
        <div className='mt-10'>
          {
            isEdit
            ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=> setIsEdit(false)}>Save Information</button>
            : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=> setIsEdit(true)}>Edit</button>
          }
        </div>
    </div>
  )
}

export default Myprofile