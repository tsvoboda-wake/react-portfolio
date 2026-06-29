function ProjectCard({ title, description, technologies }) {
  return (
    <article className='project-card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Technologies:</strong> {technologies}
      </p>
    </article>
  );
}

export function Projects() {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <ProjectCard
        title='Responsive Website'
        description='A multi-page website created with HTML and CSS.'
        technologies='HTML, CSS'
      />
      <ProjectCard
        title='Responsive Website'
        description='A multi-page website created with HTML and CSS.'
        technologies='HTML, CSS'
      />
      <ProjectCard
        title='Responsive Website'
        description='A multi-page website created with HTML and CSS.'
        technologies='HTML, CSS'
      />
      <ProjectCard
        title='Responsive Website'
        description='A multi-page website created with HTML and CSS.'
        technologies='HTML, CSS'
      />
    </section>
  );
}
