import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SearchChanged } from '@/components/sections/SearchChanged'
import { Mission } from '@/components/sections/Mission'
import { Solution } from '@/components/sections/Solution'
import { Cta } from '@/components/sections/Cta'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SearchChanged />
        <Mission />
        <Solution />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export default App
