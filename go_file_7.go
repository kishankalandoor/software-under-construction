package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	data := []byte("Hello from Go!")
	err := ioutil.WriteFile("go_output.txt", data, 0644)
	if err != nil {
		panic(err)
	}
}
