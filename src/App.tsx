import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './shared/contexts';
import { MenuLateral } from './shared/components';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>

        <MenuLateral>
          <AppRoutes />
        </MenuLateral>

      </BrowserRouter>
    </AppThemeProvider>
  );
};
