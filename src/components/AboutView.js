import Hero from './Hero'

const AboutView = () => {
  return (
    <>
      <Hero text='About Us' />
      <div className='about-bg position-relative'>
        <div className='about-banner position-absolute top-50 start-50 translate-middle text-light'>
          <h2 className='mb-5'>We are the best movie library</h2>
          <p>
            What are you waiting for? Start searching for your favorite movie
            now!
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutView
