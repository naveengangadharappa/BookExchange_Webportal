import React from 'react';

const SignUp = React.lazy(() => import('../Screens/SignUp'));
const SignIn = React.lazy(() => import('../Screens/SignIn'));

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: SignIn }
];

export default route;