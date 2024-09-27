import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../modules/landing/pages/HomePage.vue";
import NotFound404 from "../modules/common/pages/NotFound404.vue";
import isAuthenticatedGuard from "../modules/auth/guards/is-authenticated.guard";


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //landing
 {
    path:'/',
    name: 'landing',
    component:() => import('@/modules/landing/layouts/LandingLayout.vue'),
    children:[
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },

        {
            path: '/features',
            name: 'features',
            component: ()=> import('@/modules/landing/pages/FeaturesPages.vue'),
        },

        {
            path: '/pricing',
            name: 'pricing',
            component: ()=> import('@/modules/landing/pages/PricingPage.vue'),
        },

        {
            path: '/contact',
            name: 'contact',
            component: ()=> import('@/modules/landing/pages/ContactPage.vue'),
        },

        {
path:'/pokemon/:id',
name: 'pokemon',
beforeEnter:[
//console.log('temporal')
//console.log({to,from,next});
//    return next()
isAuthenticatedGuard
],

props: (route)=>{
// console.log({route});

const id = +route.params.id;
console.log({id});

return isNaN(id) ?{id:1}: {id};

},

component: ()=> import('@/modules/pokemons/pages/PokemonPage.vue')
        },
    ],
 },

//Auth 

{
    path: '/auth',
    redirect: {name: 'login'},// '/login',
    component: ()=> import('../modules/auth/layouts/AuthLayout.vue'),
            children:[
                {
path: 'login',
name: 'login',
component: ()=> import('../modules/auth/pages/LoginPage.vue'),
            },

            {
                path: 'register',
                name: 'register',
                component: ()=> import('../modules/auth/pages/RegisterPage.vue'),
                            },
    ],
},


//Not Found

{
    path: '/:pathMatch(.*)*', 
    //redirect: '/'
    component:NotFound404,
}



    ],
});

export default router;