import "./App.css";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

function App() {
  const [state, setState] = useState({
    authenticated: false,
    user: null,
  });

  async function loginWithGoogle() {
    await Auth.federatedSignIn({
      provider: "Google",
    });
  }

  async function loginWithFacebook() {
    await Auth.federatedSignIn({
      provider: "Facebook",
    });
  }

  async function logout() {
    await Auth.signOut();
  }

  useEffect(() => {
    (async () => {
      if (!state.authenticated) {
        try {
          const user = await Auth.currentAuthenticatedUser();
          setState({
            authenticated: true,
            user: { username: user.username, ...user.attributes },
          });
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, [state.authenticated]);

  return (
    <div>
      <main className="App-container">
        {state.user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <button onClick={loginWithGoogle}>Login With Google</button>
            <button onClick={loginWithFacebook}>Login With Facebook</button>
          </>
        )}
      </main>

      <pre>
        {JSON.stringify(
          { authenticated: state.authenticated, user: state.user },
          null,
          2
        )}
      </pre>
    </div>
  );
}

export default App;
