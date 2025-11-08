import './globals.css'

export const metadata = {
  title: 'The Raven - A Deep Analysis',
  description: 'An in-depth exploration of Edgar Allan Poe\'s masterpiece',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
