import { useState } from 'react'
import css from './App.module.css'
import Header from './Components/Header'
import Codecopm from './Components/Codecopm'
import HeadTitle from './Components/HeadTitle'

function App() {
// const [count, setCount] = useState(0)

  return (
    <div className={css.App}>
       <Header />
       <div className={css.tech_skills_head}>
       <HeadTitle />
       <Codecopm />
       </div>
    </div>
  )
}

export default App
