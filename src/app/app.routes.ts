import { Routes } from '@angular/router';
import { Intro } from './pages/intro/intro';
import { Login } from './pages/login/login';
import { Interno } from './pages/interno/interno';
import { Agendamentos } from './pages/agendamentos/agendamentos';
import { Andamento } from './pages/andamento/andamento';
import { Vendas } from './pages/vendas/vendas';

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
    },
    {
        path: "agendamentos",
        component: Agendamentos
    },
    {
        path: "andamento",
        component: Andamento
    },
    {
        path: "vendas",
        component: Vendas
    }
];
// You can add your application routes here