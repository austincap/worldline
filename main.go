package main
	
import {
   "fmt"
   "github.com/julienschmidt/httprouter"
   "github.com/kardianos/service"
   "sync"
   "time"	
}


func (p program) run() {
   router := httprouter.New()
   router.ServeFiles("/js/*filepath", http.Dir("js"))
   router.ServeFiles("/css/*filepath", http.Dir("css"))
   err := http.ListenAndServe(":81", router)
   if err != nil {
      fmt.Println("Problem starting web server: " + err.Error())
      os.Exit(-1)
   }
}

