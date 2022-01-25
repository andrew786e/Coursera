#include <iostream>
#include <cmath>
using namespace std ;

int main(){  
    int any_nunmber  = 3 ;
    bool ans = false ;
    for(int i = 2 ; i < any_nunmber ; i++ ){
        if((any_nunmber % i) == 0){
            ans = true ;
            break ;
        }
    }

    if(ans == true){
        cout << "yes" << endl ;
    }else{
        cout << "no" << endl ;
    }
}