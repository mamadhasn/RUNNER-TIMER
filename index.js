
        const esmesh=document.getElementById("esmesh")
        const start=document.getElementById("start")
        const register=document.getElementById("register")
        const finish=document.getElementById("finish")
        const reset=document.getElementById("reset")
        const hh=document.getElementById("go")
        const sort=document.getElementById("SORT")
        let all_Arry=[];
       let mili=0;
        let sec=0;
        let min=0
        let hor=0;
       let every;
start.addEventListener("click",e=>{
        
       every= setInterval(() => { timer(); }, 10);  
})
register.addEventListener("click",e=>{
       
    const elem=document.createElement("li")
    elem.textContent=`${esmesh.value} time is${hor}:${min}:${sec}:${mili} `
    document.getElementById("add").append(elem)
    all_Arry.push({
        name:esmesh.value,
        time:parseInt(hor*24*60*60*1000+min*60*1000+sec*1000+mili)

    })
    console.log(all_Arry);
    esmesh.value="" 
})
finish.addEventListener("click",e=>{
      clearInterval(every) 

})
reset.addEventListener("click",e=>{
        sec=0;
         min=0
         hor=0;
    hh.innerHTML=`00:00:00` 
})


  
function timer(){
        mili+=10;
        if(mili==1000){
                sec++;
                sec=sec<10 ? "0"+sec:sec
                return mili=0
        }


if(sec===60){
  min++;
  min=min<10 ? "0"+min:min
  return sec=0
  
}
if(min===60){
  hor++;
  hor=hor<10 ? "0"+hor:hor
  return min=0
  
}




hh.innerHTML=`${hor}:${min}:${sec}:${mili}`
}

sort.addEventListener("click",e=>{
  let sorted= all_Arry.sort((a,b)=>{
       return  b.time-a.time
   })
   const dele=document.getElementById("add")
   dele.textContent=""
   sorted.forEach(e=>{
        let ms = e.time
        let  sanie= Math.floor((ms/1000/60) << 0)
        let dagig = Math.floor((ms/1000) % 60);

        const elem=document.createElement("li")
        elem.textContent=`${e.name} time is ${dagig}min and ${sanie}sec `
        document.getElementById("add").append(elem)
   })
   



})

