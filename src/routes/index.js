import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Routes không cần đăng nhập vẫn xem được
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
// Router phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
