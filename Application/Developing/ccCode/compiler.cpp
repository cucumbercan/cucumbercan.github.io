#include<fstream>
#include<iostream>
using namespace std;
int main(int argc,char *argv[])
{
	ifstream gin;
	ofstream gout;
	gin.open(argv[1],ios::in);
	string s=argv[1];s+=".cpp";
	gout.open(s.c_str(),ios::out);
	ifstream ic;
	
	gin>>s;
	if(s=="include")
	{
		gin>>s;
		ic.open(s,ios::in);
	}
		
};
