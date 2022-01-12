#include<iostream>
#include<stdlib.h>
#include<fstream>
using namespace std;

void replay(string lg)
{
	cout<<endl;
	system("cls");
	system(lg.c_str());
}


void Wchat()
{
	string x;

	cout<<"Server Or Client: "; cin>>x;

	if(x=="Server")
	{
		system("cd ConsoleServer");
		system("Program.exe");
	}

	if(x=="Client")
	{
		system("cd ConsoleClient");
		system("Program.exe");
	}
}


int main()
{
	string a,b,mode;
	string last_game; 
	ofstream out("G_Chat.log",ios::app);

	system("color 02");
	system("cls");

	while(1)
	{
		cin>>a;
		
		if(a=="replay")		replay(last_game);
		else if(a=="sys")	system("cmd");
		else if(a=="cl") 	system("cls");
		else if(a=="time") 	system("time");
		else if(a=="exit") 	break;
		else if(a=="WChat")	Wchat();

		else if(a=="game")
		{
			cout<<"Name: ";
			cin>>b;
			last_game=b+".exe";
			system(last_game.c_str());
			system("cls");
		}
		
		else
		{
			out<<a<<"\n";
		}
	}
}



