import eel
import sys

eel.init("src")

@eel.expose
def say_hello_py(_from):
    print(f"hello from {_from}!")
    
say_hello_py("Python world")
eel.say_hello_js("Python calling to JS")

# @TODO: diff't path for Windows/Mac/Linux
# for Win might be `electron.cmd` instead of `electron`
electron_path = "electron-vite"

eel.start(
    mode="custom",
    host="localhost",
    port=8080,
    cmdline_args=[electron_path],
)