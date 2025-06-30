
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'
import { CartItemsProvider } from './context/CartItemsContext'
import MenuDetail from './pages/MenuDetail'
import { AuthProvider } from './context/AuthContext'
import SignupPage from './pages/SignupPage'
import ListMenuPage from './pages/ListMenuPage'
import CartPage from './pages/CartPage'
import OderStatusPage from './pages/OderStatusPage'
import GalleryPage from './pages/GalleryPage'
import ProfilePage from './pages/ProfilePage'
import AddressPage from './pages/AddressPage'
import SavedCodePage from './pages/SavedCodePage'
import OrderListPage from './pages/OrderListPage'

function App() {
  

  return (
    <AuthProvider>
    <CartItemsProvider>
    <Routes>
      
      <Route path='/' element={
        
          <MainLayout />
        
        }>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/list-menu' element={<ListMenuPage />}/>
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order-status' element={<OderStatusPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/address' element={<AddressPage />} />
        <Route path='/saved' element={<SavedCodePage />} />
        <Route path='/order-list' element={<OrderListPage />} />
      </Route>

      <Route path='/Signup' element={<SignupPage />} />
    </Routes>
    </CartItemsProvider>
    </AuthProvider>
  )
}

export default App
