#include<emscripten/bind.h>
using namespace emscripten;

int addition(int a, int b){
    return a+b;
}

EMSCRIPTEN_BINDINGS(my_module){
    function("addition", &addition);
}