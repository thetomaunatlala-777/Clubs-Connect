import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Homepage.css';
import Footer from './Footer';
import Card from './Card';
import clubImage from '../images/clubs.png';
import events from '../images/event.jpg';
import collab from '../images/collab.jpg';
export default function Homepage() {
  const navigate = useNavigate()

  return (
    // <main>
    //   <h1>Homepage</h1>
    //   <button onClick={() => navigate('/auth')}>Go to Login / Signup</button>
    // </main>
    <>
      <header className="HomePageHeader">{/*Header for homepage, will change image to be the app logo then must fix link */}
        <img src="logo192.png" alt= "Clubs Connect" className="logo" />
        <nav>
          <ul>
            <li><a href="/auth">Sign Up</a></li>
            <li><a href="/auth">LogIn</a></li>
          </ul>
        </nav>

      </header>
      <main className="HomePageMain">
        <h1>Welcome to Clubs Connect</h1>
        <p>Your one-stop platform for all club activities and events.</p>
        <section className="card-container">
        {/**uses props to take and image associated with the description**/}
        <Card image={clubImage} description="Clubs for every interest—explore cultural, academic,business, political, religion and social groups to enrich your campus experience."/>
        <Card image={events} description="Stay informed about upcoming club events, important announcements, and the latest news."  />
        <Card image={collab} description="Collaborate with diverse clubs to create memorable experiences and foster lasting connections across campus." />
      </section>
        
      </main>
      
      <Footer/>{/*Footer for everything*/}
    
    </>
  )
}