#include"GimgX.h"

int main(int argc,char *argv[])
{
	GIMG img;
	
/*=======open by cmd=======*/
	if(argc==2)
	{
		string path=argv[1];
		img.load(path);
		img.print();
		system("pause");
	}
	
/*=======open by exe=======*/
	else if(argc==1)
	{
		string s;
		img.input();
		img.print();
		system("pause");
	}
}
