import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
  title:{
    fontSize:"24px",
  },
  div:{
    backgroundColor:'#F1F3F6',
    minHeight:'100vh'
  },
  price:{
    fontSize: '20px',
    lineHeight: "36px",
    color: "#2c308b",
    fontWeight: "500",
    margin: "0px"
  },
  navbar:{
    backgroundColor:'#2c308b',
    '& a':{
      color:'#ffffff',
      marginLeft:10,
    },
  },
  main:{
    minHeight:'80vh',
  },
  footer:{
    textAlign:'center',
  }
})
export default useStyles;
