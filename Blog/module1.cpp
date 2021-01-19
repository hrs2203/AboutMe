#include <bits/stdc++.h>
using namespace std;

int checkPositivity(int x){
	assert(5>=x);
	return x*2;
}

int main(){
	cout << checkPositivity(10) << endl;
	return 0;
}