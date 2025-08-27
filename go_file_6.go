package main

import "fmt"

func main() {
	myChannel := make(chan string)
	go func() {
		myChannel <- "Hello from a goroutine!"
	}()
	msg := <-myChannel
	fmt.Println(msg)
}
