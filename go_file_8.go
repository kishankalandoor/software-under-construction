package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func main() {
	p := Person{Name: "Go", Age: 10}
	fmt.Printf("%+v\n", p)
}
