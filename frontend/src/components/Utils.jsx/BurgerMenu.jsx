import React from 'react'
// <!-- From Uiverse.io by Cevorob --> 

export const BurgerMenu = ({setIsChecked}) => {
  return (
    <>
<label className="burger" htmlFor="burger">
  <input onChange={(e)=>setIsChecked(e.target.checked)} type="checkbox" id="burger"/>
  <span></span>
  <span></span>
  <span></span>
</label>
</>
  )
}
