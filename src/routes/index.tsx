import { NavigationContainer} from '@react-navigation/native'
import { SignIn } from '../screens/signin'

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { AppRoutes } from './app.routes'
import { useState, useEffect } from 'react'
import { Loading } from '../components/loading'

export function Routes() {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState<FirebaseAuthTypes.User>()

    useEffect(()=>{
        const subscriber = auth()
        .onAuthStateChanged(resp => {
            setUser(resp)
            setIsLoading(false)
        })

        return subscriber
    }, [])

    if(isLoading){
        return <Loading />
    }
    return(
        <NavigationContainer>
            {user ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>
    )
}