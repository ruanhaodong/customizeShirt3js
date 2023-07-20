import React from 'react'
import CustomButton from '../components/CustomButton'



const AIPicker = ({prompt,setPrompt,generatingImg, handleSubmit}) => {
  return (
    <div  className='aipicker-container'>
      <textarea
      className='aipicker-textarea'
    placeholder='Ask AI'
    rows={5}
    value={prompt}
    onChange={(e)=>setPrompt(e.target.value)}

      ></textarea>

      <div className='flex flex-wrap gap-3'>

        {
          generatingImg ? (
            <CustomButton type="outline" title="Asking AI" 
              customStyle='text-xs'
            ></CustomButton>
          ):(
            <>
              <CustomButton type="outline" title="AI logo" 
              customStyle='text-xs'
              handleClick={()=>handleSubmit('logo')}
              ></CustomButton>
              <CustomButton type="filled" title="AI Full" 
              customStyle='text-xs'
              handleClick={()=>handleSubmit('full')}
              ></CustomButton>

            </>
          )
        }
       
      </div>

    </div>
  )
}
export default AIPicker
