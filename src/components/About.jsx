import taylor from '../assets/taylor.jpg'

export default function About() {
  return (
    <section id='about'>
      <h2>
        <b>My name is Taylor Svoboda.</b>
      </h2>
      <p>
        {' '}
        I&apos;m a front-end developer who creates clean, accessible, and
        user-focused interfaces for intuitive digital experiences. I&apos;m
        passionate about security, accessibility, thoughtful design, and writing
        maintainable code that scales. I aim to create impactful products for
        real people&apos;s needs.{' '}
      </p>
      <p>
        When I&apos;m not working, you can find me exploring the Raleigh area
        for the perfect cup of coffee or going on nature walks.
      </p>
      <img
        src={taylor}
        alt='Profile photo'
        className='profile-photo'
      />
    </section>
  );
}
