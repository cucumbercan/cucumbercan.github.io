#ifndef GIMGX_H
#define GIMGX_H

#include<stdio.h>
#include<windows.h>
#include<math.h>
#include<iostream> 
#include<fstream>
#include<time.h>
#include"Gfunction.h"
using namespace std;

//Version 1.2-beta
//with GIMG-Agreement_1.2

class GIMG
{
	private:
		float version=1.1;
		int mode;
		string value;
	public:
		void set(string s)
		{
			string str=s.substr(0,s.find(" "));
			s=s.substr(s.find(" ")+1,s.length()-1);
			mode=toint(str);
			value=s;
			version=1.1;
		}
		void set(string s,float V)
		{
			string str=s.substr(0,s.find(" "));
			s=s.substr(s.find(" ")+1,s.length()-1);
			mode=toint(str);
			value=s;
			version=V;
		}
		void load(string path)
		{
			string s;
			float V;
			ifstream file(path.c_str());
			getline(file,path);
			file>>V;
			set(path,V);
		}
		void input()
		{
			string s;
			float V;
			getline(cin,s);
			cin>>V;
			set(s,V);
		}
		void print1_1()
		{
			{
				if(mode==0)
				{
					system("color 07");
					for(int i=0;i<value.length();i++)
					{
						if(value[i]=='/')
						{
							cout<<"\n";
							continue;
						}
						
						{//IOQT
							if(value[i]=='I')
							{
								i++;
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='O')
							{
								i++;
								for(int j=0;j<toint(value[i]);j++)
									cout<<"  ";
								continue;
							}
							if(value[i]=='Q')
							{
								i++;
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"  ";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='T')
							{
								i++;
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
						}
						
						if(toint(value[i])==0)
							cout<<"  ";
						else
							cout<<"¡ö";
					}
				}
				else if(mode==1)
				{
					for(int i=0;i<value.length();i++)
					{
						if(value[i]=='/')
						{
							cout<<"\n";
							continue;
						}
						{//CL-IOQT
							if(value[i]=='a')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='A')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}if(value[i]=='b')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='B')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}if(value[i]=='b')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='B')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}if(value[i]=='c')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='C')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='d')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='D')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='e')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='E')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='f')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='F')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='g')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='G')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='h')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='H')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='i')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='I')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
							if(value[i]=='j')
							{
								i++;color(value[i]-97);
								for(int j=0;j<toint(value[i]);j++)
									cout<<"¡ö";
								continue;
							}
							if(value[i]=='J')
							{
								i++;color(value[i]-65);
								for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
									cout<<"¡ö";
								i+=toint(value[i]);
								continue;
							}
						}
						color(toint(value[i])); 
						cout<<"¡ö";
					}
				}
				color(7);
				cout<<"\n";
			}
		}
		void print1_2()
		{
			string output_message="";
			for(int i=0;i<value.length();i++)
			{
				if(value[i]=='/')
				{
					output_message+="\n";
					continue;
				}
				
				{//IOQT
					if(value[i]=='I')
					{
						i++;
						for(int j=0;j<toint(value[i]);j++)
							output_message+="¡ö";
						continue;
					}
					if(value[i]=='O')
					{
						i++;
						for(int j=0;j<toint(value[i]);j++)
							output_message+="  ";
						continue;
					}
					if(value[i]=='Q')
					{
						i++;
						for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
							output_message+="  ";
						i+=toint(value[i]);
						continue;
					}
					if(value[i]=='T')
					{
						i++;
						for(int j=0;j<toint(value.substr(i,i+toint(value[i])));j++)
							output_message+="¡ö";
						i+=toint(value[i]);
						continue;
					}
				}
				
				if(toint(value[i])==0)
					output_message+="  ";
				else
					output_message+="¡ö";
			}
			MessageBox(0,output_message.c_str(),"GimgX 1.2-beta",MB_OK);
		}
		void print()
		{
			if(version==(float)1.1)	print1_1();
			if(version==(float)1.2)	print1_2();
		} 
};

#endif
