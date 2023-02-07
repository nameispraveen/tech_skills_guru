import React, { useState } from "react";
import Code from "./Code";
import css from "./Codecopm.module.css";
import data from './Java.jsx'

export default function Codecopm() {

  return (
    <div className={css.tech_skills_code}>
      <h1>java</h1>
      {
        data.map((value)=>{
         return <Code item={value} key={value.id}/>
        })
      }
    </div>
  );
}
