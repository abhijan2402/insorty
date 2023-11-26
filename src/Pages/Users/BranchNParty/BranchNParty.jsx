import React from 'react'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

function BranchNParty() {
    const token = localStorage.getItem("token")
  const shopType = jwtDecode(token).shopType

  return (
    <section className="py-4">
      <div>
        <h1 className="titleStyle text-center">{shopType==="SHOP" ? 'ब्रांच और पार्टी ' : "पार्टी"}</h1>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="flex justify-center items-center gap-4">
        <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/branchname">
            ब्रांच जोड़ें
          </Link>

          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/partyname">पार्टी जोड़ें
          </Link>
          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/branch">ब्रांच
          </Link>
          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/borrow">पार्टी 
          </Link>

          
          <Link className = {shopType==="BAR" ? "commonBtn" : "displayHidden"} to="/user/bearshop/partyname">
            पार्टी जोड़ें
          </Link>
          
          <Link className = {shopType==="BAR" ? "commonBtn" : "displayHidden"} to="/user/bearshop/borrow">
            पार्टी 
          </Link>
         
        </div>
      </div>
      
    </section>
  )
}

export default BranchNParty