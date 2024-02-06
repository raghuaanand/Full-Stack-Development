import React from 'react'

const WrapperComp = () => {
  return (
    <div>
      <CardComponent innerText = {<InnerComp/>}/>
    </div>
  )
}


function InnerComp(){
    return(
        <div>Hi there</div>
    )
}


function CardComponent({innerText}){
    return(
        <div>
            {innerText}
        </div>
    )
}

export default WrapperComp
