export const loginCall = async (userCredentials,dispatch)=>{
  dispatch({type:"LOGIN_START"})
  try{
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    const res = await fetch('https://charlie-invoice.herokuapp.com/api/auth/login', options).then(res=>res.json())
    if (res.message === 'success login') {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.datas });
    } else {
      dispatch({type:"LOGIN_FAILURE", payload: res})
    }
  }catch (e){
    return e;
  }
}

export const registerCall = async (userCredentials,navigate)=>{
  try {
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    await fetch('https://charlie-invoice.herokuapp.com/api/auth/register',options)

    setTimeout(()=>{
      navigate('/login')
    },1000)
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const notePostCalls = async (userCredentials)=>{
  try {
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    await fetch(`https://charlie-invoice.herokuapp.com/api/invoice`,options)
  } catch (e) {
    console.log(e);
  }
}
