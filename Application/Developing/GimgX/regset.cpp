#include<windows.h>


bool OpenRegKey(HKEY& hRetKey)
{
    if (ERROR_SUCCESS == RegOpenKey(HKEY_CLASSES_ROOT,".gimgx_auto_file\\shell\\open\\command", &hRetKey))
    {
        return true;
    }
    return false;
}

bool CreateReg(HKEY Root,char*szSubKey,char* ValueName,char* Data)  //ÐÞ¸Ä×Ö·û´®¼üÖµ
{
	HKEY key;
	HKEY hKey;
	OpenRegKey(hKey);
	RegCreateKey(hKey,".gimgx_auto_file\\shell\\open\\command",&key);
	long Ret=RegCreateKeyEx(Root,szSubKey,0,NULL,REG_OPTION_NON_VOLATILE,KEY_ALL_ACCESS,NULL,&key,NULL);
    Ret=RegSetValueEx(key,ValueName,0,REG_SZ,(BYTE*)Data,strlen(Data));
	if(Ret!=ERROR_SUCCESS)
	{	return false;
	}
	RegCloseKey(key);   
	RegCloseKey(hKey); 
	return true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}

int main()
{
	return CreateReg(HKEY_CLASSES_ROOT,".gimgx_auto_file\\shell\\open\\command","","\"C:\\Users\\user\\Desktop\\Cucumber OS\\GimgX.exe\" \"%1\"");
}
