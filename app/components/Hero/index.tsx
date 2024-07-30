import './Hero.css'

import { ButtonLink } from '../ButtonLink'

const Hero = () => {
    return(
        <section className='container__hero'>
            <div className='container__hero_logo'>
                <h1>Web School</h1>
            </div>
            <div className='container__hero_text'>
                <div>
                    <h3>Unlock Your Potential with Code</h3>
                </div>
                <div>
                    <p>Join Our Programming School
                    Master the skills you need to build the future. Learn from experts, work on real-world projects, and transform your passion for technology into a successful career.</p>
                </div>
                <div>
                    <ButtonLink href="pages/html" name="Get Started Today" />
                </div>
            </div>
        </section>
    )
}

export { Hero }