
import React, { useState, useEffect } from 'react';
import TopicInput from './components/cryptos/TopicInput';
import PublishTopic from './components/cryptos/PublishTopic';
import LoginScreen from './components/LoginScreen/LoginScreen'
import ErrorAlert from './components/UI/ErrorAlert';
import SuccessAlert from './components/UI/Success';
import SubscribedTopic from './components/cryptos/SubscribedTopic'
import UnsubscribeTopic from './components/cryptos/UnsubscribeTopic';
import RegisterScreen from './components/LoginScreen/RegisterScreen';
import Card from './components/UI/Card';

function App() {


  const [user, setEnteredUser] = useState({ email: "", pwd: "" });
  const [isSignup, setSignUp] = useState('Login');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [topicsSubscribed, setTopicsSubscribed] = useState([]);

  var topicsSubscribe = []
function isSignUp(){
  setSignUp('Signup')
}
function isLogout(){
  setEnteredUser({ email: "", pwd: "" })
  setSuccess('Successfullt Logged Out')
  setSignUp('Login')
  setTimeout(() => {
    setSuccess(false)
  }, 5000);

}
function isLogIn(){
  setSignUp('Login')
}
  async function subscribeTopic(userid, topicText) {

    if (topicText === 'Ethereum'||topicText === 'Electroneum') {
      try {
        const response = await fetch('http://0.0.0.0:80/topics', {
          method: 'POST',
          body: JSON.stringify({
            userid: userid,
            topic: topicText,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Subscribing the topic failed.');
        }
        else {
          setSuccess('Successfully subscribed to Topic')
          console.log('successfluyy subscribe')
           setTimeout(() => {
            setSuccess(false)
          }, 5000);

          notifyData(userid)
        }
      


      } catch (err) {
        setError(
          err.message ||
          'Adding a topic failed - the server responsed with an error.'
        );
        setTimeout(() => {
          setError(false)
        }, 5000); 
      }
    }
    if (topicText === 'Bitcoin'||topicText === 'Wanchain') {
      try {
        const response = await fetch('http://0.0.0.0:82/topics', {
          method: 'POST',
          body: JSON.stringify({
            userid: userid,
            topic: topicText,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Subscribing the topic failed.');
        }
        else {
          setSuccess('Successfully subscribed to Topic')
           setTimeout(() => {
            setSuccess(false)
          }, 5000);
          console.log('successfluyy subscribe')

          notifyData(userid)
        }
  

      } catch (err) {
        setError(
          err.message ||
          'Adding a topic failed - the server responsed with an error.'
        );
        setTimeout(() => {
          setError(false)
        }, 5000); 
      }
    }
    if (topicText === 'Tether'||topicText === 'Dock') {
      try {
        const response = await fetch('http://0.0.0.0:83/topics', {
          method: 'POST',
          body: JSON.stringify({
            userid: userid,
            topic: topicText,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Subscribing the topic failed.');
        }
        else {
          setSuccess('Successfully subscribed to Topic')
          console.log('successfluyy subscribe')
          setTimeout(() => {
            setSuccess(false)
          }, 5000);
          notifyData(userid)
        }
    


      } catch (err) {
        setError(
          err.message ||
          'Adding a topic failed - the server responsed with an error.'
        );
        setTimeout(() => {
          setError(false)
        }, 5000); 
      }
    }
  }
  async function unsubscribeTopic(userid, topicText) {

    if (topicText === 'Ethereum'||topicText === 'Electroneum'){
      try {
        const response = await fetch('http://0.0.0.0:80/deleteTopic', {
          method: 'POST',
          body: JSON.stringify({
            userid: userid,
            topic: topicText,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Deleting the topic failed.');
        }
        else {
          setSuccess('Successfully deleted to Topic')
           setTimeout(() => {
            setSuccess(false)
          }, 5000);
          console.log('successfluyy deleted')
          notifyData(userid)

        }
        setTimeout(() => {
          setError(null)
        }, 100);


      } catch (err) {
        setError(
          err.message ||
          'Adding a topic failed - the server responsed with an error.'
        );
        setTimeout(() => {
          setError(false)
        }, 5000); 
      }
    }
    if (topicText === 'Bitcoin'||topicText === 'Wanchain') {
      try {
        const response = await fetch('http://0.0.0.0:82/deleteTopic', {
          method: 'POST',
          body: JSON.stringify({
            userid: userid,
            topic: topicText,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Deleting the topic failed.');
        }
        else {
          setSuccess('Successfully deleted to Topic')
           setTimeout(() => {
            setSuccess(false)
          }, 5000);
          console.log('successfluyy deleted')
          notifyData(userid)

        }
  


      } catch (err) {
        setError(
          err.message ||
          'Adding a topic failed - the server responsed with an error.'
        );
        setTimeout(() => {
          setError(false)
        }, 5000); 
      }
    }
    if (topicText === 'Tether'||topicText === 'Dock') {
      try {
        const response = await fetch('http://0.0.0.0:83/deleteTopic', {
          method: 'POST',
          body: JSON.stringify({
            userid: userid,
            topic: topicText,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Deleting the topic failed.');
        }
        else {
          setSuccess('Successfully deleted to Topic')
        setTimeout(() => {
            setSuccess(false)
          }, 5000);
          console.log('successfluyy deleted')
          notifyData(userid)

        }
  
     


      } catch (err) {
        setError(
          err.message ||
          'Adding a topic failed - the server responsed with an error.'
        );
        setTimeout(() => {
          setError(false)
        }, 5000);  
      }
    }

  }

  async function Login(details) {

    try {
      console.log(details)
      const response = await fetch('http://0.0.0.0:8084/login',
        {
          method: 'POST',
          body: JSON.stringify({
            username: details.username,
            password: details.password,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || 'Invalid Details.');
      }
      else {
        setEnteredUser({
          email: details.username,
          pwd: details.password
        })
        setSignUp('Logout')
        try {

          const response11 = await
            fetch('http://0.0.0.0:80/filtertopic/topic11/' + details.username,
              {
                method: 'GET',
              });
          console.log(response11)
          const response12 = await
          fetch('http://0.0.0.0:80/filtertopic/topic12/' + details.username,
            {
              method: 'GET',
            });
        console.log(response12)
          const response21 = await
          fetch('http://0.0.0.0:82/filtertopic/topic21/' + details.username,
            {
              method: 'GET',
            });
        console.log(response21)
        const response22 = await
        fetch('http://0.0.0.0:82/filtertopic/topic22/' + details.username,
          {
            method: 'GET',
          });
      console.log(response22)
          const response31 = await
    
            fetch('http://0.0.0.0:83/filtertopic/topic31/' + details.username,
            {
              method: 'GET',
            });
        console.log(response31)
        const response32 = await
    
            fetch('http://0.0.0.0:83/filtertopic/topic32/' + details.username,
            {
              method: 'GET',
            });
        console.log(response32)
        // response=response1.concat(response2).concat(response3)
        response11.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"

         
        })
        response12.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"

         
        })
        response21.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"

         
        })
         response22.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"
         
        }) 
        response31.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"
         
         
        })
        response32.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"
          setTopicsSubscribed(topicsSubscribe)
         
        })
    
    
    
    
    
        } catch (err) {
          setError(
            err.message ||
            'Subscribing a topic failed - the server responsed with an error.'
          );
          setTimeout(() => {
            setError(false)
          }, 5000);  
        }
      }

    }
    catch (err) {
      setError(
        err.message ||
        'Subscribing a topic failed - the server responsed with an error.'
      );
      setTimeout(() => {
        setError(false)
      }, 5000);  
    }

  }
  async function Register(details) {

    try {
      console.log(details)
      const response = await fetch('http://0.0.0.0:8084/signup',
        {
          method: 'POST',
          body: JSON.stringify({
            username: details.username,
            password: details.password,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.message || 'Invalid Details.');
      }
      else {
        setEnteredUser({
          email: details.username,
          pwd: details.password
        })
        setSignUp('Logout')
        try {

          const response11 = await
            fetch('http://0.0.0.0:80/filtertopic/topic11/' + details.username,
              {
                method: 'GET',
              });
          console.log(response11)
          const response12 = await
          fetch('http://0.0.0.0:80/filtertopic/topic12/' + details.username,
            {
              method: 'GET',
            });
        console.log(response12)
          const response21 = await
          fetch('http://0.0.0.0:82/filtertopic/topic21/' + details.username,
            {
              method: 'GET',
            });
        console.log(response21)
        const response22 = await
        fetch('http://0.0.0.0:82/filtertopic/topic22/' + details.username,
          {
            method: 'GET',
          });
      console.log(response22)
          const response31 = await
    
            fetch('http://0.0.0.0:83/filtertopic/topic31/' + details.username,
            {
              method: 'GET',
            });
        console.log(response31)
        const response32 = await
    
            fetch('http://0.0.0.0:83/filtertopic/topic32/' + details.username,
            {
              method: 'GET',
            });
        console.log(response32)
        // response=response1.concat(response2).concat(response3)
        response11.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"

         
        })
        response12.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"

         
        })
        response21.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"

         
        })
         response22.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"
         
        }) 
        response31.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"
         
         
        })
        response32.json().then(function (result) {
    
           
          result.forEach(element => {
            console.log(element)
    
            topicsSubscribe.push(element)
    
    
            console.log('topicsssss' + topicsSubscribed)
          })// "Some User token"
          setTopicsSubscribed(topicsSubscribe)
         
        })
    
    
    
    
    
        } catch (err) {
          setError(
            err.message ||
            'Subscribing a topic failed - the server responsed with an error.'
          );
          setTimeout(() => {
            setError(false)
          }, 5000);  
        }
      }

    }
    catch (err) {
      setError(
        err.message ||
        'Subscribing a topic failed - the server responsed with an error.'
      );
      setTimeout(() => {
        setError(false)
      }, 5000);  
    }

  }
  async function notifyData(user) {
    try {

      const response11 = await
        fetch('http://0.0.0.0:80/filtertopic/topic11/' + user,
          {
            method: 'GET',
          });
      console.log(response11)
      const response12 = await
      fetch('http://0.0.0.0:80/filtertopic/topic12/' + user,
        {
          method: 'GET',
        });
    console.log(response12)
      const response21 = await
      fetch('http://0.0.0.0:82/filtertopic/topic21/' + user,
        {
          method: 'GET',
        });
    console.log(response21)
    const response22 = await
    fetch('http://0.0.0.0:82/filtertopic/topic22/' + user,
      {
        method: 'GET',
      });
  console.log(response22)
      const response31 = await

        fetch('http://0.0.0.0:83/filtertopic/topic31/' + user,
        {
          method: 'GET',
        });
    console.log(response31)
    const response32 = await

        fetch('http://0.0.0.0:83/filtertopic/topic32/' + user,
        {
          method: 'GET',
        });
    console.log(response32)
    // response=response1.concat(response2).concat(response3)
    response11.json().then(function (result) {

       
      result.forEach(element => {
        console.log(element)

        topicsSubscribe.push(element)


        console.log('topicsssss' + topicsSubscribed)
      })// "Some User token"

     
    })
    response12.json().then(function (result) {

       
      result.forEach(element => {
        console.log(element)

        topicsSubscribe.push(element)


        console.log('topicsssss' + topicsSubscribed)
      })// "Some User token"

     
    })
    response21.json().then(function (result) {

       
      result.forEach(element => {
        console.log(element)

        topicsSubscribe.push(element)


        console.log('topicsssss' + topicsSubscribed)
      })// "Some User token"

     
    })
     response22.json().then(function (result) {

       
      result.forEach(element => {
        console.log(element)

        topicsSubscribe.push(element)


        console.log('topicsssss' + topicsSubscribed)
      })// "Some User token"
     
    }) 
    response31.json().then(function (result) {

       
      result.forEach(element => {
        console.log(element)

        topicsSubscribe.push(element)


        console.log('topicsssss' + topicsSubscribed)
      })// "Some User token"
      
     
    })
    response32.json().then(function (result) {

       
      result.forEach(element => {
        console.log(element)

        topicsSubscribe.push(element)


        console.log('topicsssss' + topicsSubscribed)
      })// "Some User token"
      setTopicsSubscribed(topicsSubscribe)
     
    })





    }
     catch (err) {
      setError(
        err.message ||
        'Subscribing a topic failed - the server responsed with an error.'
      );
      setTimeout(() => {
        setError(false)
      }, 5000); 
    }
  }


  return (

   
    <main className="App">
      {error && <ErrorAlert errorText={error} />}
      {success && <SuccessAlert successText={success} />}
    
      {(user.email === ''&& isSignup=='Signup')?
      (<RegisterScreen Register={Register} e={error} />):
      (  (user.email === ''&& isSignup=='Login') ?
      <LoginScreen Login={Login} e={error} />
      :
      (
        <><TopicInput onAddTopic={subscribeTopic} user={user}
        />
          <UnsubscribeTopic onDeleteTopic={unsubscribeTopic} user={user}
          //  topics={topicsSubscribed.map(home => <><div>{home.name}</div>
          // </>)}
          topics={topicsSubscribed}
           />


          <SubscribedTopic
            user={topicsSubscribed.map(home => <><div>{home.name}</div>
              <div>Symbol
                {home.symbol}</div>
              <div>PriceUSD{home.priceUsd}</div>
              <div>PriceBTC{home.priceBtc}</div>
              <div>percentChange24hUsd{home.percentChange24hUsd}</div>
              <div>LastUpdated{home.lastUpdated}</div></>)} />
          <PublishTopic onPublishTopic={notifyData} user={user} />

        </>

      )
    )}
    <Card>
      {(isSignup=='Login'||isSignup=='Signup')?
    (<><button onClick={isSignUp}>SignUp</button><button onClick={isLogIn}>Login</button></>):
      <button onClick={isLogout}>Logout</button>}

      </Card>

    </main>

  );
}


export default App;



