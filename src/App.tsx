import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home, About, Gear, Projects, MovingImages, Thoughts, BlogPost, Contact } from './pages'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/gear', label: 'Gear' },
  { path: '/projects', label: 'Projects' },
  { path: '/videos', label: 'Videos' },
  { path: '/thoughts', label: 'Thoughts' },
  { path: '/contact', label: 'Contact' },
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
    case '/videos':
      return 'Videos'
    case '/thoughts':
      return 'Thoughts'
    case '/contact':
      return 'Contact'
    default:
      if (pathname.startsWith('/thoughts/')) {
        return 'Thoughts'
      }
      return 'J. Kwon'
  }
}

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isGear = location.pathname === '/gear'
  const pageTitle = getPageTitle(location.pathname)

  const getMainClassName = () => {
    if (isHome) return ''
    if (isGear) return 'page-content full-height'
    return 'page-content'
  }

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

        <main className={getMainClassName()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/videos" element={<MovingImages />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/thoughts/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
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
