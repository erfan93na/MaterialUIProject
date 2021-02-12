import {theme} from "./muTheme"
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from "@material-ui/core"


// Configure JSS
 const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

 const RTLProvider = (props) => {
     return ( <StylesProvider jss={jss}>
         <ThemeProvider theme={theme}>
{props.children}
         </ThemeProvider>
     </StylesProvider> );
 }
  
 export default RTLProvider;