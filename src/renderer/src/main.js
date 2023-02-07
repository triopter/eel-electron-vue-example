import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

export const eel = window.eel
eel.set_host( 'ws://localhost:8080' )

function say_hello_js(_from) {
    console.log("Hello from " + _from)
}

eel.expose(say_hello_js)
say_hello_js("Javascript world!")
eel.say_hello_py("Javascript calling to Python!")

export const clientArgh = (arg) => {
    console.log('electron client process says: ' + arg)
    return 'logged from client'
}

window.api.serverArgh('hello from client to server')
window.api.logServerText((event, text) => {
    clientArgh(text)
})
