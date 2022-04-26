
        let now = new Date(); 
        document.write(now)
        document.write(now.getTime) 
        

        let future = new Date()
        

        let futureMinutes = future.getMinutes();
        future.setMinutes(futureMinutes + 15)
        document.write(future) 

        setInterval(function(){
            let s = new Date();
            document.querySelector("#secondi").innerHTML = s.getSeconds() 
         },1000)

         setInterval(function(){
            let m = new Date();
            document.querySelector("#minuti").innerHTML = m.getMinutes() 
         },1000)

         setInterval(function(){
            let h = new Date();
            document.querySelector("#ore").innerHTML = h.getMinutes() 
         },1000)


         