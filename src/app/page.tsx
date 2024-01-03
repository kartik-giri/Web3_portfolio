import About from "./about/page"
import Homepage from "./homepage/page"
import Skills from "./skills/page"
import Services from "./services/page"
import Projects from "./projects/page"
import Contacts from "./contacts/page"


export default function Home() {
  return (
    <main className=" h-screen w-full">
<div className=" overflow-x-hidden ">

    <Homepage/>
    <About/>
    <Services/>
    <Skills/>
    <Projects/>
    <Contacts/>
</div>
    </main>
  )
}
