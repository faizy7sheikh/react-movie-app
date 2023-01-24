import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
           <div>
                <ul>
                    <li><a href='#home'>Home</a> </li>
                    <li><a href='#movie'>Movie</a> </li>
                    <li><a href='#web'>Web Series</a> </li>
                    <li><a href='#trending'>Trending</a> </li>
                </ul>
                <form>
                    <input  type={'text'} placeholder='Search ...'></input>
                    <button className='btn sm btn-primary'>Search</button>
                </form>
            </div> 
        </>
    )
}

export default Header