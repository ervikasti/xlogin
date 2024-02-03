import { useState } from 'react';
import styles from "./App.module.css";
function App() {

  
  const[form,setForm] = useState({
    username:'',
    password:'',
  })

  const[isLogin,setIsLogin] = useState(false);

  const[error,setError] = useState(false);

  // handling the onChange of input field
  const handleChange = (e) =>{
  
      setForm( {...form,[e.target.name]:e.target.value,
      })
  }

  // handling the onSubmit
  const handleSubmit = (e) => {

    e.preventDefault();
    if(form.username === 'user' && form.password === 'password'){
      setError(false);
      setIsLogin(true);
    }else{
      setError(true);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {error?<div className={styles.error}>Invalid username or password</div>:null}
      {isLogin?<div>Welcome, {form.username}</div>:
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' placeholder='username' value={form.username} onChange={handleChange}required/><br/>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' placeholder='password' value={form.password} onChange={handleChange}required/><br/>
        <button type='submit'>Submit</button>
      </form>}
    </div>
  );
}

export default App;
