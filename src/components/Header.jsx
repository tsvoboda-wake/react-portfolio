export function Header() {
  return (
    <header>
      <img src="./assets/ts-logo.png" alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="./about">About</a></li>
          <li><a href="./projects">Projects</a></li>
          <li><a href="./skills">Skills</a></li>
          <li><a href="./experience">Experience</a></li>
        </ul>
      </nav>
    </header>
  );
}