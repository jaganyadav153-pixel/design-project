import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function RadarChart({ user=[5,4,4,2,3], required=[5,5,3,2,2] }){
  const ref=useRef(null)
  const chartRef=useRef(null)
  useEffect(()=>{
    if(!ref.current) return
    const ctx=ref.current.getContext('2d')
    if(chartRef.current) chartRef.current.destroy()
    chartRef.current=new Chart(ctx,{type:'radar', data:{labels:['Logic','Math','Data','Cloud','Security'], datasets:[{label:'You', data:user, fill:true, backgroundColor:'rgba(79,70,229,0.15)', borderColor:'#4F46E5'}]}, options:{scales:{r:{min:0,max:5,ticks:{display:false}}}, plugins:{legend:{display:false}}}})
    return()=> chartRef.current?.destroy()
  },[user,required])
  return <canvas ref={ref} height={150} aria-label="Skill radar chart" role="img"></canvas>
}
