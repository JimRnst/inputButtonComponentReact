import { Link } from "react-router-dom"

const SideNav = () => {
  return (
    <div className='menu'>
        <div className="logo"><a target={'_blank' } rel="noopener noreferrer" href={'https://devchallenges.io/'}>devchallenges.io</a></div>
        <div className="menu-links">

          <Link to={'/buttons'}>
            <button className='buton-sidenav'>Buttons</button>
          </Link>

          <Link to={'/inputs'}>
            <button className='buton-sidenav'>Inputs</button>
          </Link>
        </div>
    </div>
  )
}

export default SideNav