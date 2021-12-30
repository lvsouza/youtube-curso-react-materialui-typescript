import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Toggle theme</Button>} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}
