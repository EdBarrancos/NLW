/* Server */
/* Express is a framework */
const express = require('express') /* Outputs all the information inside the file express as a module */
const server = express() /* Creates an express application */

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

/* Configurate nunjucks */
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

/* Beginning and configuration of the server */
server
/* Receive from req.body */
.use(express.urlencoded({ extended: true }))
/* Define static folder and files(css, scripts, images) */
.use(express.static("public")) 

/* Setup the urls linking them to the html pages */
/* Routes */
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

/* Start */
.listen(5500)