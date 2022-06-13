import application from './app'
import config from './configuration/app.config'

application.listen(config.port, () => {
    console.log(`server listening on http://${config.host}:${config.port}${config.endpoint}...`);
})