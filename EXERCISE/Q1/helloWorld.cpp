#include<iostream>
#include<emscripten/bind.h>

std::string helloWorld(){
    return "Hello World";
} 

EMSCRIPTEN_BINDINGS(my_modules){
    emscripten::function("helloWorld", &helloWorld);
}