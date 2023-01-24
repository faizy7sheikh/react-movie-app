import React from 'react'
import './Header.css'


const Header = () => {
    return (
        <>
           <div>
                <ul>
                    <li><a href='/'>Home</a> </li>
                    <li><a href='#movie'>Movie</a> </li>
                    <li><a href='web-series'>Web Series</a> </li>
                    <li><a href='#trending'>Trending</a> </li>
                </ul>
                <form>
                    <input  type={'text'} placeholder='Search ...'></input>
                    <button className='btn sm btn-primary'>Search</button>
                </form>
                <progress value="10" max="100"></progress>
            </div> 
        </>
    )
}

export default Header