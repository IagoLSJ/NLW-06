import { serverHttp } from "./app"

serverHttp.listen(3000, () => {
    console.log("Rodando na porta 3000")
})