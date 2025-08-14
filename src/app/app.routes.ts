import { Routes } from '@angular/router';
import { Intro } from './pages/intro/intro';
import { Login } from './pages/login/login';
import { Interno } from './pages/interno/interno';

export const routes: Routes = [
    {
        path: "",
        component: Intro
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "interno",
        component: Interno
    }
];
// You can add your application routes here