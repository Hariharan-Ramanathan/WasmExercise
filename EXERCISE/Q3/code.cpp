#include<iostream>
#include<emscripten/bind.h>

using namespace std;

void printArray(uintptr_t address, int length){
    int* arr =(int*)reinterpret_cast<uint8_t*>(address);
    cout<<"Total length = "<<length<<endl;
    for(int i=0;i<length;i++){
        cout<<arr[i]<<endl;
    }
}

EMSCRIPTEN_BINDINGS(my_module){
    emscripten::function("printArray", &printArray, emscripten::allow_raw_pointers());
}

