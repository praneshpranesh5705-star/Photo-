"use client";
import {useState} from "react";

const findings=[
 ["WARNING","Strengthen visual hierarchy","Increase contrast between page title, supporting copy and primary action.","Design"],
 ["WARNING","Reduce component duplication","Three UI patterns can be consolidated into one reusable component.","Code"],
 ["GOOD","Responsive structure detected","Flexible containers adapt well to smaller screens.","Design"],
 ["GOOD","Native browser APIs available","A custom utility can be replaced with a simpler platform API.","Code"],
 ["WARNING","Improve keyboard focus states","Interactive controls need a more visible focus indicator.","Accessibility"]
];

export default function Home(){
 const [repo,setRepo]=useState("");
 const [analyzed,setAnalyzed]=useState(false);
 const [busy,setBusy]=useState(false);
 const [tab,setTab]=useState("Overview");
 const [question,setQuestion]=useState("");
 const [answer,setAnswer]=useState("");
 function analyze(){setBusy(true);setTimeout(()=>{setAnalyzed(true);setBusy(false)},700)}
 function ask(){if(!question.trim())return;setAnswer("WebCraft recommends starting with the highest-impact accessibility and complexity issues, then validating the visual hierarchy.");setQuestion("")}
 return <main>
  <aside className="sidebar">
   <div className="brand"><b>W</b><span>WebCraft<small>AI WORKSPACE</small></span></div>
   {["Overview","Design Audit","Code Audit","AI Plan","Preview","Code Diff","History"].map(x=><button key={x} onClick={()=>setTab(x)} className={tab===x?"nav active":"nav"}>{x}</button>)}
   <div className="ready">● Analysis engine ready</div>
  </aside>
  <section className="content">
   <header><div><label>DESIGN × CODE INTELLIGENCE</label><h1>Build better websites, <i>automatically.</i></h1></div><button className="command">⌘ K</button></header>
   <section className="hero">
    <div><span>✦ WEBCRAFT AI</span><h2>Turn any project into a cleaner, smarter product.</h2><p>Analyze UI and code together. Find design issues, unnecessary complexity, accessibility gaps and high-impact improvements in one workspace.</p></div>
    <div className="analyzer"><small>PROJECT SOURCE</small><div className="input"><b>⌁</b><input value={repo} onChange={e=>setRepo(e.target.value)} placeholder="GitHub repository or website URL"/><button onClick={analyze}>{busy?"Analyzing…":"Analyze"}</button></div><div className="or">or</div><button className="upload" onClick={()=>setRepo("Uploaded project")}>＋ Upload project <small>ZIP / folder</small></button></div>
   </section>
   {!analyzed?<section className="empty"><div>✦</div><h3>Your engineering cockpit is ready.</h3><p>Connect a project above to generate design, code, accessibility and simplicity insights.</p><aside><span>◎ Visual hierarchy</span><span>⌘ Code complexity</span><span>◈ Accessibility</span><span>↗ Performance</span></aside></section>:
   <>
    <section className="metrics">{[["Overall","92"],["Design","94"],["Code quality","89"],["Accessibility","91"],["Simplicity","87"]].map((m,i)=><div className="metric" key={m[0]}><small>{m[0]}</small><strong>{m[1]}<em>/100</em></strong><div><i style={{width:m[1]+"%"}}/></div></div>)}</section>
    <section className="tabs">{["Overview","Design Audit","Code Audit","AI Plan","Preview","Code Diff","History"].map(x=><button onClick={()=>setTab(x)} className={tab===x?"selected":""} key={x}>{x}</button>)}</section>
    <section className="grid">
     <article className="panel findings"><h3>{tab==="Overview"?"Priority findings":tab}</h3>{findings.map((f,i)=><div className="finding" key={i}><span className={f[0].toLowerCase()}>{f[0]}</span><div><b>{f[1]}</b><p>{f[2]}</p></div><small>{f[3]}</small></div>)}</article>
     <article className="panel"><h3>AI improvement plan <small>PRIORITIZED</small></h3><ol><li>Fix focus visibility <small>Accessibility · 5 min</small></li><li>Consolidate UI primitives <small>Code · 15 min</small></li><li>Refine typography scale <small>Design · 10 min</small></li><li>Remove unused utility <small>Simplicity · 8 min</small></li></ol><button className="primary" onClick={()=>setTab("AI Plan")}>Open AI plan →</button></article>
     <article className="panel wide"><h3>Before → After preview <small>INTERACTIVE</small></h3><div className="preview"><div className="mock"><label>BEFORE</label><h4>Dashboard</h4><i/><i/><i/></div><b>→</b><div className="mock improved"><label>WEBCRAFT</label><h4>Dashboard</h4><i/><i/><i/></div></div></article>
    </section>
   </>}
   <section className="ask"><div><b>✦ Ask WebCraft</b><small>Describe a design or code problem</small></div><div className="askbox"><input value={question} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>e.key==="Enter"&&ask()} placeholder="e.g. Why does my landing page feel cluttered?"/><button onClick={ask}>↑</button></div>{answer&&<p><b>WebCraft:</b> {answer}</p>}</section>
   <footer>WebCraft AI · Design intelligence + code simplicity</footer>
  </section>
 </main>
}