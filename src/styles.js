import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0),
    },
    icon: {
        marginRight: '0.8rem'
    },
    buttons: {
        marginTop: '1.5rem'
    },
    cardGrid: {
        padding: '2rem 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    footer: {
        padding: '2rem 0',
        backgroundColor: '#3f51b5',
        color: '#fff'
    }
}))

export default useStyles;