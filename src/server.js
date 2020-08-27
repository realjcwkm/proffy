//servidor
const express = require("express");
const server = express();

const {
	pageLanding,
	pageStudy,
	pageGiveClasses,
	saveClasses,
} = require("./pages");

//configurando nunjucks (template engine - facilita envio de dados pro frontend)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
	express: server,
	noCache: true,
});

//inicio e configuracao do servidor
server
	//receber os dados do req body
	.use(
		express.urlencoded({
			extended: true,
		})
	)
	.use(express.static("public")) //configura arquivos estaticos (css, scripts, images)
	.get("/", pageLanding)
	.get("/study", pageStudy)
	.get("/give-classes", pageGiveClasses)
	.post("/save-classes", saveClasses)
	.listen(5500);
