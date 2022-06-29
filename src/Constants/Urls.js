// const common_validationschema = require('../Validations/Common_Validation');
// const auth_validationschema = require('../Validations/Auth_Validation');
// const order_validationschema = require('../Validations/Order_Validation');
// const book_validationschema = require('../Validations/Books_Validation');

import common_validatedata from '../Validations/Common_Validation';
import auth_validatedata from '../Validations/Auth_Validation'
import order_validatedata from '../Validations/Order_Validation'
import book_validatedata from '../Validations/Books_Validation'

const Base_Url='http://localhost:3001/BookExchange';

const Url= {
    Auth:{
       Login: `${Base_Url}/Login`,
       Signup:`${Base_Url}/Signup`,
       PasswordReset:`${Base_Url}/PasswordReset`,
       Logout:`${Base_Url}/Logout`,
       Get_login_status:`${Base_Url}/Get_login_status`,
       Address_operation:`${Base_Url}/Address_operation`,
       Profilepic_Operations:`${Base_Url}/Profilepic_Operations`,
       auth_validationschema:auth_validatedata,
    },
    Books:{
        Book_Operations:`${Base_Url}/Bookpic_Operations`,
        Book_Filter:`${Base_Url}/Book_Filter`,
        Bookpic_Operations:`${Base_Url}/Bookpic_Operations`,
        book_validationschema:book_validatedata,
    },
    Orders:{
        Order_Operations:`${Base_Url}/Order_Operations`,
        Order_Filter:`${Base_Url}/Order_Filter`,
        Seller_Filter:`${Base_Url}/Seller_Filter`,
        order_validationschema:order_validatedata,
    },
    File_Routs:{
        get_file_:`${Base_Url}/get_file/:filename`,
        get_file:`${Base_Url}/get_file`,
        upload_file:`${Base_Url}/upload_file`,
        upload_files:`/upload_files`,
    },
    Common_Routs:{
        Notification:`${Base_Url}/Notification`,
        Submit_feedback: `${Base_Url}/Submit_feedback`,
        common_validationschema:common_validatedata,
    }
}

 export default Url