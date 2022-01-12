import Application.cmd
import Application.gif


def search(string):
    if string == "cmd":
        Application.cmd.play()
        print("cmd")
    elif string == "gif":
        Application.gif.play()