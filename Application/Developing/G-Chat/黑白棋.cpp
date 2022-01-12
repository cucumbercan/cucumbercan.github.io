#include<bits/stdc++.h>
#include<stdio.h>
using namespace std;

int land[8][8];					//x,y
int x,y;


char trance(int c)
{
	if(c%2==0 && c!=0) c=2;
	else if(c==0) c=0;
	else c=1;

	if(c==0) return '#';
	if(c==1) return 'O';
	if(c==2) return '@';
}


void getxy()
{
	cout<<"列 坐标: "; 
	cin>>x;
	cout<<"行 坐标: ";
	cin>>y;
}


bool refresh(int player)
{
	bool rt=false;
	//(y-)
	for(int i=y-1;i>=0;i--)
	{
		if(land[x][i]==0) break;

		if(land[x][i]==player)
		{
			if(y-i==1) break;
			else
			{
				rt=true;
				for(int j=i;j<y;j++)
				{
					land[x][j]=player+1;
				}
				break;
			}
		}
	}

	//(y+)
	for(int i=y+1;i<=8;i++)
	{
		if(land[x][i]==0) break;

		if(land[x][i]==player)
		{
			if(i-y==1) break;
			else
			{
				rt=true;
				for(int j=i;j>y;j--)
				{
					land[x][j]=player+1;
				}
				break;
			}
		}
	}

	//(x-)
	for(int i=x-1;i>=0;i--)
	{
		if(land[i][y]==0) break;

		if(land[i][y]==player)
		{
			if(x-i==1) break;
			else
			{
				rt=true;
				for(int j=i;j<x;j++)
				{
					land[j][y]=player+1;
				}
				break;
			}
		}
	}

	//(x+)
	for(int i=x+1;i<=8;i++)
	{
		if(land[i][y]==0) break;

		if(land[i][y]==player)
		{
			if(i-x==1) break;
			else
			{
				rt=true;
				for(int j=i;j>x;j--)
				{
					land[j][y]=player+1;
				}
				break;
			}
		}
	}

	//(x,y++)
	int j=y;
	for(int i=x;i<=8;i++)
	{
		if(j>8) break;
		if(land[i][j]==0) break;
		if(land[i][j]==player
		{
			if(i-x==1) break;
			else
			{
				rt=true;
				int q=y
				for(int p=i;p>x;p--)
				{
					if(q<=y) break;
					land[p][q]=player+1;
					q++;
				}
				break;
			}
		}
		j++;
	}

		//(x,y--)			//TODO
	int j=y;
	for(int i=x;i<=8;i++)
	{
		if(j>8) break;
		if(land[i][j]==0) break;
		if(land[i][j]==player
		{
			if(i-x==1) break;
			else
			{
				rt=true;
				int q=y
				for(int p=i;p>x;p--)
				{
					if(q<=y) break;
					land[p][q]=player+1;
					q++;
				}
				break;
			}
		}
		j++;
	}
}


void pt()
{
	system("cls");
	
	cout<<" 行   0  1  2  3  4  5  6  7   列\n\n";
	cout<<"      -  -  -  -  -  -  -  -\n";
	cout<<" 0|   "<<land[0][0]<<"  "<<land[0][1]<<"  "<<land[0][2]<<"  "<<land[0][3]<<"  "<<land[0][4]<<"  "<<land[0][5]<<"  "<<land[0][6]<<"  "<<land[0][7]<<"  "<<endl;
	cout<<" 1|   "<<land[1][0]<<"  "<<land[1][1]<<"  "<<land[1][2]<<"  "<<land[1][3]<<"  "<<land[1][4]<<"  "<<land[1][5]<<"  "<<land[1][6]<<"  "<<land[1][7]<<"  "<<endl;
	cout<<" 2|   "<<land[2][2]<<"  "<<land[2][1]<<"  "<<land[2][2]<<"  "<<land[2][3]<<"  "<<land[2][4]<<"  "<<land[2][5]<<"  "<<land[2][6]<<"  "<<land[2][7]<<"  "<<endl;
	cout<<" 3|   "<<land[3][3]<<"  "<<land[3][1]<<"  "<<land[3][2]<<"  "<<land[3][3]<<"  "<<land[3][4]<<"  "<<land[3][5]<<"  "<<land[3][6]<<"  "<<land[3][7]<<"  "<<endl;
	cout<<" 4|   "<<land[4][4]<<"  "<<land[4][1]<<"  "<<land[4][2]<<"  "<<land[4][3]<<"  "<<land[4][4]<<"  "<<land[4][5]<<"  "<<land[4][6]<<"  "<<land[4][7]<<"  "<<endl;
	cout<<" 5|   "<<land[5][5]<<"  "<<land[5][1]<<"  "<<land[5][2]<<"  "<<land[5][3]<<"  "<<land[5][4]<<"  "<<land[5][5]<<"  "<<land[5][6]<<"  "<<land[5][7]<<"  "<<endl;
	cout<<" 6|   "<<land[6][6]<<"  "<<land[6][1]<<"  "<<land[6][2]<<"  "<<land[6][3]<<"  "<<land[6][4]<<"  "<<land[6][5]<<"  "<<land[6][6]<<"  "<<land[6][7]<<"  "<<endl;
	cout<<" 7|   "<<land[7][7]<<"  "<<land[7][1]<<"  "<<land[7][2]<<"  "<<land[7][3]<<"  "<<land[7][4]<<"  "<<land[7][5]<<"  "<<land[7][6]<<"  "<<land[7][7]<<"  "<<endl;
	cout<<"\n";
}


int main()
{
	system("cls");					//初始化屏幕  
	
	for(int i=0;i<10;i++)			//初始化land  
	{
		for(int j=0;j<10;j++)
		{
			land[i][j]=0;
		}
	}
	
	while(1)
	{
        system("cls");              //清屏  
		for(int i=1;i<=2;i++)
		{
			pt();
			cout<<"玩家 "<<i<<" :\n"; 
			getxy();
			land[y][x]=i;
			refresh(i);
		}
	}
	
}
