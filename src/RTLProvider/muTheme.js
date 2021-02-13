import {createMuiTheme} from "@material-ui/core"
import { green } from "@material-ui/core/colors";

export const theme=createMuiTheme({
    palette:{
primary:green

    },
    direction:"rtl",
    typography:{
        fontFamily:'Shabnam,sans-serif'
    },
})

console.log(theme)