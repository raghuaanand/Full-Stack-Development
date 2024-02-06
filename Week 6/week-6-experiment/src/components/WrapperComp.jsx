import React from 'react'

const WrapperComp = () => {
  return (
    <div>
      {/* <CardComponent innerText = {<InnerComp/>}/> */}
      <CardComponent>
            hi there Raghu
      </CardComponent>
    </div>
  )
}


// function InnerComp(){
//     return(
//         <div>Hi there</div>
//     )
// }


function CardComponent({children}){
    return(
        <div>
            {children}
        </div>
    )
}

export default WrapperComp
