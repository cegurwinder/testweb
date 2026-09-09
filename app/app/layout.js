import './globals.css'

export const metadata = {
  title: 'Aurora AI — Build Faster with Intelligent Automation',
  description: 'A premium AI SaaS landing page starter built with Next.js.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
