import { BrowserRouter } from 'react-router-dom';

import { UserRoutes } from './user.routes';
import { AuthRoutes } from './auth.routes';
import { AdminRoutes } from './admin.routes';

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      {/* <UserRoutes /> */}
      {/* <AdminRoutes /> */}
    </BrowserRouter>
  );
}
