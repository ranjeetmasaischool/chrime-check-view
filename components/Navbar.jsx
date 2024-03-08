import './Navbar.css'
const Navbar=()=>{

    const navlinks=[{
        name:"Home",
        link:"/"
    },{
        name:"About",
        link:"/about"
    }
    ]


    return(
        <nav className='navbar'>
            <div className='logo'>
                <a href='/'>Arrest India</a>
            </div>
            <div className='navlink'>
                {navlinks.map((ele,i)=>{
              return  <a key={ele.name+i} href={ele.link}>{ele.name}</a>
                })}
            </div>
        </nav>
    )

}

export default Navbar