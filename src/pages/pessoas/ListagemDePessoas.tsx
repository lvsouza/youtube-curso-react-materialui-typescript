import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { useDebounce } from '../../shared/hooks';


export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(3000, false);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);


  useEffect(() => {

    debounce(() => {
      PessoasService.getAll(1, busca)
        .then((result) => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result);
          }
        });
    });
  }, [busca]);


  return (
    <LayoutBaseDePagina
      titulo='Listagem de pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo='Nova'
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >

    </LayoutBaseDePagina>
  );
};
