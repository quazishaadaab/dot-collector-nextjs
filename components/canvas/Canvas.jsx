import React from 'react'

function Canvas({url}) {
  //dfg
  const iframe =()=> {
    return {
      __html: `<iframe src=${url} width="2000px" height="2000px" border="0" frameborder="0"  ></iframe>`
    }
  }


  
return(
<>

<div id='dangerousHtml' className=' w-auto h-auto' dangerouslySetInnerHTML={ iframe() }   />
</>
)

}

export default Canvas