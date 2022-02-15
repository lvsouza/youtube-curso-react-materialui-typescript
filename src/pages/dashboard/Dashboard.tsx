import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';


export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo='Página inicial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe mostrarBotaoSalvarEFechar mostrarBotaoSalvarEFecharCarregando />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};
