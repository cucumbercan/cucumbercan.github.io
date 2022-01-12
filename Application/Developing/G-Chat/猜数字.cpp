#include<iostream>
#include<stdlib.h>
#include<time.h>
using namespace std;


int main()
{
	
	int x,a,seed;
	cout<<"请输入种子：";
	cin>>seed;
	if(seed<=0)
	{
		srand(time(0));
		seed=time(0)/10000;
	}
	else
	{
		srand(seed/20);
	}
	x=seed%rand();
	
	cout<<"\n\n\n它在0~"<<seed<<"之间\n\n";
	while(1)
	{	
		cout<<"\n请输入: " ;
		cin>>a;
		if(a>x) cout<<"\n大了！\n";
		if(a<x) cout<<"\n小了！\n";
		if(a==x) {cout<<"\n\n\n\n恭喜你，猜对了！\n\n\n";	break;}
		if(a<=0) {cout<<"\n\nExit!\n\n";	return 0;}
	}
}
