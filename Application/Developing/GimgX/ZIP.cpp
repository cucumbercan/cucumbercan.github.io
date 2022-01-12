#include<fstream>
#include<iostream>
#include"Gfunction.h"
using namespace std;
int main()
{
	string rt="";
	string path;
	cin>>path;
	ifstream in(path.c_str());
	path+="_ZIP.gimgx";
	ofstream out(path.c_str());
	
	string mode;
	rt+=mode+" ";
	string value;
	int vl[value.length()][2]={0};
	in>>mode>>value;
	vl[0][0]=value[0];vl[0][1]=1;
	int j=0;
	for(int i=1;i<value.length();i++)
	{
		if(value[i]==value[i-1])
			vl[j][1]++;
		else
		{
			j++;vl[j][0]=value[i];vl[j][1]=1;
		}
	}
	if(mode=="0")
	{
		int i=0;
		while(vl[i][1]!=0)
		{
			if(vl[i][1]<=9 && vl[i][0]==0)	rt+="O"+tostr(vl[i][1]);
			if(vl[i][1]<=9 && vl[i][0]==1)	rt+="I"+tostr(vl[i][1]);
			if(vl[i][1]>9 && vl[i][0]==0)	rt+="Q"+tostr(tostr(vl[i][1]).length())+tostr(vl[i][1]);
			if(vl[i][1]>9 && vl[i][0]==1)	rt+="T"+tostr(tostr(vl[i][1]).length())+tostr(vl[i][1]);
			i++;
		}
		out<<rt;
	}
} 
