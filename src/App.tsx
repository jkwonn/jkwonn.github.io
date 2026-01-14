import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home, About, Gear, Projects, StillImages, MovingImages } from './pages'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/gear', label: 'Gear' },
  { path: '/projects', label: 'Projects' },
  { path: '/still-images', label: 'Still Images' },
  { path: '/moving-images', label: 'Moving Images' },
  { path: '#', label: 'Thoughts' },
  { path: '#', label: 'Contact' },
]

const newsItems = [
  { date: '2.25.25', text: 'website born!', link: '/' },
  { date: 'XX.XX.XX', text: 'XXX', link: '#', suffix: 'XXX' },
  { date: 'XX.XX.XX', text: 'XXX', link: '#', suffix: 'XXX' },
  { date: 'XX.XX.XX', text: 'XXX', link: '#', suffix: 'XXX' },
  { date: 'XX.XX.XX', text: 'XXX', link: '#', suffix: 'XXX' },
]

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case '/about':
      return 'About'
    case '/gear':
      return 'Gear'
    case '/projects':
      return 'Projects'
    case '/still-images':
      return 'Still\nImages'
    case '/moving-images':
      return 'Moving\nImages'
    default:
      return 'J. Kwon'
  }
}

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const pageTitle = getPageTitle(location.pathname)

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="sidebar">
          <header>
            <h1>
              <Link to="/">{pageTitle}</Link>
            </h1>
          </header>
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.path.startsWith('#') ? (
                    <a href={item.path}>{item.label}</a>
                  ) : (
                    <Link
                      to={item.path}
                      className={location.pathname === item.path ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <main className={isHome ? '' : 'page-content'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/still-images" element={<StillImages />} />
            <Route path="/moving-images" element={<MovingImages />} />
          </Routes>
        </main>

        <aside className="news">
          <h2>News</h2>
          <ul>
            {newsItems.map((item, index) => (
              <li key={index}>
                <strong>{item.date}</strong> -{' '}
                {item.link === '/' ? (
                  <Link to={item.link}>{item.text}</Link>
                ) : (
                  <a href={item.link}>{item.text}</a>
                )}
                {item.suffix && ` ${item.suffix}`}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default App
