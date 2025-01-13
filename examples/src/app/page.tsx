import Link from 'next/link'

export default function Home() {
  const links = [
    { href: '/analytics', label: 'Analytics' },
    { href: '/auto', label: 'Auto' },
    { href: '/cargo_one', label: 'Cargo One' },
    { href: '/cargo_two', label: 'Cargo Two' },
    { href: '/cleaning', label: 'Cleaning' },
    { href: '/school', label: 'School' },
    { href: '/sneakers', label: 'Sneakers' },
    { href: '/tea', label: 'Tea' }
  ]

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
            >
              <span className="text-lg font-medium text-gray-800">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}