import axios from 'axios'

const api = axios.create({
    baseURL: 'http://169.254.44.150:3333/'
})

export default api

/**
 * iOS com Emulador: localhost
 * iOS com Dispositivo Físico: IP da máquina
 * Android com Emulador: localhost (Executar: adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com Dispositivo Físoco: IP da máquina
 */