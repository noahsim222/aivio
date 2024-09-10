import Blogs from "./components/blogs"
import Features from "./components/features"
import Figures from "./components/figures"
import Intro from "./components/intro"

const Home = () => {
  return (
    <main className="bg-white">
      <Intro />
      <Features />
      <Figures />
      <Blogs />
    </main>
  )
}

export default Home