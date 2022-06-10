import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import CadCliente from './pages/CadCliente';
import CadProduto from './pages/CadProduto';
import Orçamento from './pages/Orçamento';
import Pesquisar from './pages/Pesquisar';
import PesquisarCliente from './pages/PesquisarCliente';
import PesquisarProduto from './pages/PesquisarProduto';
import PesquisarOrçamento from './pages/PesquisarOrçamento';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        CadCliente,
        CadProduto,
        Orçamento,
        Pesquisar,
        PesquisarCliente,
        PesquisarProduto,
        PesquisarOrçamento,
    })
);

export default Routes;