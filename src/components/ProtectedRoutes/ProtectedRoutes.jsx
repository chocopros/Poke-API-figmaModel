import React from 'react'

const ProtectedRoutes = () => {

    const nameTrainer = useSelector(state => state.nameTrainer)

    if(nameTrainer) {
        return <Outlet /> 
    } else {
        return <Navigate to='/'/>
    }

}

export default ProtectedRoutes