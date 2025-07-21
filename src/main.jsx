
import { createRoot } from 'react-dom/client'
import { Menu } from './menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Product } from './product';
import { Product2 } from './Product2';
import { User } from './User';
import { Todo } from './Todo';
import { Addproduct } from './Addproduct';
import { Productdetail } from './Productdetail';
import { Student } from './Student';
import { Studentdata } from './Studentdata';
import { Editproduct } from './Editproduct';
import { Register } from './Register';
import { RegisterUser } from './RegisterUser';
import { LoginApi } from './LoginApi';
import { Categorys } from './Categorys';
import { MyArticle } from './MyArticle';
import { Article } from './Article';


createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/product/' element={<Product/>}></Route>
        <Route path='/product2' element={<Product2/>}></Route>
        <Route path='/todos' element={<Todo/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/addproduct' element={<Addproduct/>}></Route>
        <Route path='/editproduct/:id' element={<Editproduct/>}></Route>
        <Route path='/productdetail/:pname/:price/:qun/:pid' element={<Productdetail/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/registeruser' element={<RegisterUser/>}></Route>
        <Route path='/studentdata' element={<Studentdata/>}></Route>
        <Route path='/login' element={<LoginApi/>}></Route>
        <Route path='/category' element={<Categorys/>}></Route>
        <Route path='/article' element={<Article/>}></Route>
        <Route path='/myarticle' element={<MyArticle/>}></Route>





      </Routes>
  </BrowserRouter>
  
  
  </>
)
