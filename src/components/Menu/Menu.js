import '../utils.css';
import './Menu.css';

function Menu({ menuRef }) {
    let register = [{ name: "Sign up", id: 1, signup: true }, { name: "Login", id: 2 }]
    let host = [{ name: "Host  your home", id: 1 }, { name: "Host an experience", id: 2 }, { name: "Help", id: 3 }]
    return (
        <div className='menu' ref={menuRef}>
            <ul className='register'>
                {register.map((ele) => {
                    return (<li className={` ${ele.signup ? "signup" : ""}`} key={ele.id}>{ele.name}</li>)
                })}
            </ul>
            <hr />
            <ul className='host'>
                {host.map((ele) => {
                    return (<li key={ele.id}>{ele.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default Menu;