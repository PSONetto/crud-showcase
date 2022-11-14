import { ILayout } from '../../interfaces'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: ILayout) {
  return (
    <div className="d-flex flex-column">
      <Header />
      <main className="p-3">{children}</main>
      <Footer />
    </div>
  )
}
