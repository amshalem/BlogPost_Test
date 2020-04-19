import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
import { Search } from 'react-feather';


class Header extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    const scrollBottom = window.pageYOffset
  
    if (scrollTop > 20) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  } 
  
  render(){
    return (
      <div className={this.state.hasScrolled ? 'HeaderNav HeaderScrolled' : 'HeaderNav'}>
        <div className="MainHeader">
            <Link to="/"><img src={require('../images/The Guild_Logo.svg')} width="110" /></Link>
          <div className={this.state.hasScrolled ? 'SubHeader SubHeaderDown' : 'SubHeader'}><h1>Stay tuned to our articles and meet our new projects.</h1></div>
        </div>
        <div className="TabNavigation">
            <Link to="/" className="SearchBlog"><Search className="SearchButton" /></Link>
            <Link to="/" className="FilterButton ActiveFilter">All Topics</Link>
            <Link to="/" className="FilterButton">Announcments</Link>
            <Link to="/" className="FilterButton">Updates</Link>
            <Link to="/" className="FilterButton">Thoughts & Ideas</Link>
            <Link to="/" className="FilterButton">Community</Link>
        </div>
      </div>
    )
  }
}
  
export default Header
