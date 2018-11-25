import {StyleSheet} from "react-native"

export default style = StyleSheet.create({
    App : {
        textAlign : "center",
        alignItems: "center",
        justifyContent: "center",
    },
    AppHeader : {
        backgroundColor : "#1E90FF",
        padding: "1.0px",
        color: "white",
    },
    AppTitle : {
        fontSize : 1.5,
    },
    AppFooter : {
        backgroundColor : "#1E90FF",
        width: "100%",
        color: "white",
    //    position : "fixed",
    },
    FooterUl : {
        margin: "0px",
        padding: "10px"
    },
    FooterMenu : {
     //   list-style: none;
     //   display: "inline-block",
        width: "25%",
        fontSize: 0.5,
    },
    FooterMenuLi : {
     //   display: "block",
     //   textDecorationStyle:"none",
    },
    AppImage : {
        height:"30px",
    },
    Main : {
        margin : "10px",
        padding: "20px",
        color :  "#3f8afc"
    },
    DispArea : {
        height : "100%",
    },
    SingleArea : {
        color: "#3f8afc",
        backgroundColor: "#c6e0f8",
        borderBottomWidth : 1,
        borderBottomColor:"#7fb1fc",
        width: "100%",
        height: "auto",
        flex : 1,
        flexDirection: 'row'
    },
    DispDateText : {
        fontSize : 13,
        color: "#7fb1fc",
    },
    DispImage : {
        width : 30,
        height: 30,
    },
    DispContent : {
        textAlign: "center",
        justifyContent : "center",
        width:"20%",
        padding: 15,
        color: "#7fb1fc",
    },
    DispContentMain : {
        textAlign: "left",
        justifyContent: "center",
        width: "60%",
    },
    SearchTitle : {
        margin: "10px",
        padding: "2px",
        textAlign: "left",
    },
    SearchDate : {
        margin: "15px",
        padding: "1px",
        textAlign: "center",
        borderColor : "#afcdfa",
        borderWidth : 0.5,
//        border : "0.5px solid #afcdfa"
    },
    Search : {
        margin: "20px",
        padding: "5px",
        fontSize: 13,
    },
    Button : {
        margin: "30px",
//        display: "inline-block",
        padding: "0.5em 1em",
//        textDecorationStyle: "none",
        color: "white",
        borderColor : "#67c5ff",
        borderWidth: 2,
        backgroundColor: "#67c5ff",
        borderRadius: 3,
//        transition: ".4s"
    },
    Input : {
        margin: 5,
        padding: 3,
        borderWidth : 1,
        borderColor: "#afcdfa",
        width:200,
        alignItems: "center",
        justifyContent: "center",
    }
})