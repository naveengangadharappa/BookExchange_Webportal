import {useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DataCard from '../components/DataCard';
import NavDrawer from '../components/NavDrawer'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Urls from '../Constants/Urls';
import {Postdatanew,Postdata,PostdataToken,Getdata} from '../Api/RestServices';
import validatedata from '../Validations/Books_Validation';


const theme = createTheme();

export default function SignIn(props) {
  const [book_list,set_booklist]=useState([]);
  const [datacard_flg,setDatacard_flg]=useState(false);
  const [drawer_status,set_DrawerStatus]=useState(false);
  
  useEffect(async() => {
    try{
      await Get_BookList({option:''});
    }catch(err){
      console.log(err);
    }
  },[]);

  const Get_BookList=async(params)=>{
    try{
      let req_params={ 
        choice:params.choice
      }
      setDatacard_flg(false);
      switch(params.choice){
        case 'title':req_params.book_name=params.data;
            break;
        case 'id':req_params.book_id=params.data
            break;
        case 'sector':req_params.section=params.data
           break;
        case 'branch':req_params.book_branch=params.data
            break;
        case 'university':req_params.book_university=params.data
            break;
        case 'sem':req_params.book_sem=params.data
            break;
        case 'edition':req_params.book_edition=params.data
            break;
        case 'author':req_params.book_author=params.data
            break;
        default : req_params.choice='all'
            break;
        }
        console.log("APi request = ",req_params);
        let validation_result = await validatedata(req_params, 'book_filter',{})
        if (validation_result.status) {
          let result = await Postdata(Urls.Books.Book_Filter,JSON.stringify(req_params));
          console.log(result);
          if(result.status){
            set_booklist(result.data);
            setDatacard_flg(true);
          }else{
            set_booklist([]);
            setDatacard_flg(true);
          }
        }else{
          console.log("validation_result = ",validation_result);
        }   
    }catch(err){
      console.log(err);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // const handle_Drawer=(status)=>{
  //   set_DrawerStatus(status);
  //   console.log("drawer status = ",drawer_status);
  // }

  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      {/* <NavBar handle_Drawer={handle_Drawer} />
      <NavDrawer drawer_status={drawer_status}/> */}
      <center><br></br><SearchBar Get_BookList={Get_BookList}/> 
      <br></br><Filters/></center>
      {/* Dash board for displaying data */}
      <Box sx={{ flexGrow: 1,margin:'5%'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {datacard_flg && book_list && book_list.length>0 && book_list.map((data, index) => (
            <Grid item xs={2} sm={2} md={3} key={index}>
              <DataCard data={data}/>
            </Grid>))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}