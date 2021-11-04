import { createMuiTheme } from "@material-ui/core/styles";
import { purple,orange } from "@material-ui/core/colors";


const theme = createMuiTheme({
palette: {
    primary: {
        main: '#194350'
    },
    secondary: {
        main: '#FF8882'
    },
    background: {
        default: '#FFC2B4'
    } ,
    text: {
        default: '#9DBEB9'
    }
}

})
export default theme;