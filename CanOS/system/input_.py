import print_
import Command_language
import App


def command(string='print'):
    Comm = Command_language.com()
    if string == "print":
        value = input("Value:")
        print_.str_(value, Comm)

    elif string == 'open app':
        value = input("APP:")
        with open("application.txt", 'r') as app_file:
            app_list = app_file.readlines()
            if value + "\n" in app_list:

                App.search(value)
            else:
                print_.str_("no this app.", Comm)
