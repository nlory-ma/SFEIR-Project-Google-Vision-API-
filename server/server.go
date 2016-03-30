package main

import (
    "io"
    "net/http"
    "log"
	"html/template"
)

func HelloServer(w http.ResponseWriter, req *http.Request) {
    io.WriteString(w, "pouet, world!\n")
}

func (w http.ResponseWriter, r *http.Request) {
    title := r.URL.Path[len("/"):]
    p, err := loadPage(title)
    if err != nil {
        p = &Page{Title: title}
    }
    t, _ := template.ParseFiles("../index.html")
    t.Execute(w, p)
}

func main() {
	http.HandleFunc("/", editHandler)
    http.HandleFunc("/hello", HelloServer)
    err := http.ListenAndServeTLS(":443", "cert.pem", "key.pem", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }


}
