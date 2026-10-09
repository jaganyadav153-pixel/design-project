import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

function chartPalette(){
  const css = (n, fb)=>{ try{ const v=getComputedStyle(document.documentElement).getPropertyValue(n).trim(); return v||fb }catch{ return fb } };
  const dark = typeof document!=='undefined' && document.documentElement.classList.contains('dark');
  if(dark) return { border:css('--chart-1','#A5B4FC'), fill:'rgba(165,180,252,0.35)', tick:css('--chart-tick','#CBD5E1'), grid:css('--chart-grid','#475569') };
  return { border:css('--chart-1','#4338CA'), fill:'rgba(67,56,202,0.28)', tick:css('--chart-tick','#334155'), grid:css('--chart-grid','#CBD5E1') };
}

export default function RadarChart({ user=[5,4,4,2,3], required=[5,5,3,2,2] }){
  const ref=useRef(null)
  const chartRef=useRef(null)
  useEffect(()=>{
    if(!ref.current) return
    const build=()=>{
      const ctx=ref.current.getContext('2d')
      if(chartRef.current) chartRef.current.destroy()
      const pal=chartPalette();
      chartRef.current=new Chart(ctx,{type:'radar', data:{labels:['Logic','Math','Data','Cloud','Security'], datasets:[{label:'You', data:user, fill:true, backgroundColor:pal.fill, borderColor:pal.border, borderWidth:2.5, pointBackgroundColor:pal.border, pointRadius:4}]}, options:{scales:{r:{min:0,max:5,ticks:{display:false}, grid:{color:pal.grid}, angleLines:{color:pal.grid}, pointLabels:{color:pal.tick}}}, plugins:{legend:{display:false}}}})
    };
    build();
    const obs=new MutationObserver(build);
    obs.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
    return()=>{ obs.disconnect(); chartRef.current?.destroy() };
  },[user,required])
  return <canvas ref={ref} height={150} aria-label="Skill radar chart" role="img"></canvas>
}
