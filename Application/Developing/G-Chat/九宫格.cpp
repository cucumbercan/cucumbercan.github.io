#include<iostream>
using namespace std;

int main()
{	
	cout<<"\n\n\n\n";
	char a1='@',a2='@',a3='@',b1='@',b2='@',b3='@',c1='@',c2='@',c3='@',n1,n2,n3;
	{
		
		for(int i=0;i<3;i++)
		{
			switch(i)
			{
				case 0: n1=a1;n2=b1;n3=c1;break;
				case 1: n1=a2;n2=b2;n3=c2;break;
				case 2: n1=a3;n2=b3;n3=c3;break;
			}
			cout<<" "<<i+1<<"|   "<<n1<<"  "<<n2<<"  "<<n3<<endl;
		}
		cout<<"      _  _  _\n      a  b  c\n\n";
	}
	while(1)
	{
		for(int j=0;j<2;j++)
		{
			string cmd;
			char py;
			py=65+j;
			
			cout<<"玩家 "<<py<<" ,请输入坐标(如：3a)：";
			cin>>cmd;
			
			if(cmd=="exit") {system("cls");return 0;}
			
			if(cmd=="1a"&&a1=='@') {a1=42+j;cmd="";}
			if(cmd=="2a"&&a2=='@') {a2=42+j;cmd="";}
			if(cmd=="3a"&&a3=='@') {a3=42+j;cmd="";}
			if(cmd=="1b"&&b1=='@') {b1=42+j;cmd="";}
			if(cmd=="2b"&&b2=='@') {b2=42+j;cmd="";}
			if(cmd=="3b"&&b3=='@') {b3=42+j;cmd="";}
			if(cmd=="1c"&&c1=='@') {c1=42+j;cmd="";}
			if(cmd=="2c"&&c2=='@') {c2=42+j;cmd="";}
			if(cmd=="3c"&&c3=='@') {c3=42+j;cmd="";}
			
			system("cls");
			
			{
		
				for(int i=0;i<3;i++)
				{
					switch(i)
					{
						case 0: n1=a1;n2=b1;n3=c1;break;
						case 1: n1=a2;n2=b2;n3=c2;break;
						case 2: n1=a3;n2=b3;n3=c3;break;
					}
					cout<<" "<<i+1<<"|   "<<n1<<"  "<<n2<<"  "<<n3<<endl;
				}
				cout<<"      _  _  _\n      a  b  c\n\n";
			}
			
			{

				if(a1==b1&&b1==c1&&a1!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				}
				if(a2==b2&&b2==c2&&a2!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				}
				if(a3==b3&&b3==c3&&a3!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				} 
				if(a1==a2&&a2==a3&&a1!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				}
				if(b1==b2&&b2==b3&&b1!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				}
				if(c1==c2&&c2==c3&&c1!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				}
				if(a1==b2&&b2==c3&&a1!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				}
				if(a3==b2&&b2==c1&&a3!='@')
				{
					cout<<"玩家 "<<py<<" 胜利！\n\n游戏结束。"<<endl; 
					return 0;
				}
			}
						
			if(a1!='@'&&a2!='@'&&a3!='@'&&b1!='@'&&b2!='@'&&b3!='@'&&c1!='@'&&c2!='@'&&c3!='@') 
			{
				cout<<"平局！"<<endl; 
				return 0;
			}	
		}
	}
} 

