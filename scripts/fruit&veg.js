import header from "../components/header.js"
document.getElementById("header").innerHTML = header()


import {footer} from "../components/footer.js"
document.getElementById("AdiMainContainer").innerHTML = footer()


import {appendData, sort, filter,search} from "./fetch_pg.js";

