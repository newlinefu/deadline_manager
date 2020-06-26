import React, {useEffect} from 'react'
import styles from './app.module.css'
import HeaderContainer from './components/header/HeaderContainer'
import Authorizate from './components/authorizare/Authorizate'
import {BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {initializeApplic} from './redux/reducers/init_app_reducer.js'
import {putUserToLS, setAuthorizateInStateAC} from './redux/reducers/auth_reducer.js'

function App({name, initialized, initializeApplic, countOfUsers, putUserToLS, arrayOfUsers, setAuthorizateInState}) {

  useEffect(() => {
      initializeApplic()
  }, [])

  if(!initialized)
    return <div>...loading</div>
  if(!name) 
    return <Authorizate 
            countOfUsers={countOfUsers} 
            putUserToLS = {putUserToLS}
            arrayOfUsers = {arrayOfUsers}
            setAuthorizateInState = {setAuthorizateInState}
            ></Authorizate>
  else
    return (
      <div className={styles.app_wrapper}>
        <BrowserRouter>
            <HeaderContainer></HeaderContainer>
        </BrowserRouter>
      </div>
    )

}

function mapStateToProps(state) {
  return {

    name: state.authorize.name,
    initialized: state.initialize.initialized,
    countOfUsers: state.authorize.countOfUsers,
    arrayOfUsers: state.authorize.arrayOfUsers

  }
}

export default connect(mapStateToProps, {

  initializeApplic,
  putUserToLS,
  setAuthorizateInState: setAuthorizateInStateAC

})(App)


