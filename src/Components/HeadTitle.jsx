import React from 'react'
import css from './HeadTitle.module.css'
import img from '../assets/tech_skills_guru.jpeg'
export default function HeadTitle() {
  return (
    <div className={css.tech_skills_head}>
        <img src={img} alt='tech_skills_guru'  className={css.tech_skills_img}/>
      
      <div className={css.tech_skills_name}>Tech Skills Guru</div>
    </div>
  )
}
