import React from "react";
import css from "./Codecopm.module.css";
import { useState } from "react";
export default function Code({item}) {
    const[ans,setans]=useState(null)
    console.log(item)
  return (
    <div key={item.id}>
      <div>
        {item.id}.{item.question}
      </div>
      <div className={css.tech_skills_codediv}>
        <code className={css.tech_skill_codeblack}>
          <div
            dangerouslySetInnerHTML={{ __html: item.code }}
            className={css.Codecopm}
          />{" "}
        </code>
      </div>
      <div>{ans}</div>
      <button onClick={() => setans(item.output)}>show ans</button>
    </div>
  );
}
