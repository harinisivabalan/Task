import React from 'react'

const Auth = (wrap => {
  return ({isAuth,...props})=>
  {
    if(!isAuth)
    {
        return <p>access denied.</p>
    }
    return<wrap {...prpos}/>
  }
    
  )
  
}

export default Auth