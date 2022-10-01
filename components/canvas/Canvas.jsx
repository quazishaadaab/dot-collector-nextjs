import React from 'react'

function Canvas({url}) {
  const iframe =()=> {
    
    return {
      __html: `<iframe src=${url} width="1400px" height="780px" border="0" frameborder="0"  ></iframe>`
    }
  }

    
  
return(
<>
<div id='dangerousHtml' className=' w-auto' dangerouslySetInnerHTML={ iframe()} />
</>
)

}

export default Canvas