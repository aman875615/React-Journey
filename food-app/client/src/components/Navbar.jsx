import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext'; // Import from the correct path
import { ShoppingCart, User, LogOut } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-primary">FoodApp</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/menu" className="text-gray-700 hover:text-primary">Menu</Link>
                        {user ? (
                            <>
                                {user.isAdmin && <Link to="/admin" className="text-gray-700 hover:text-primary">Admin</Link>}
                                <Link to="/cart" className="text-gray-700 hover:text-primary relative">
                                    <ShoppingCart className="w-6 h-6" />
                                     {/* Add cart count badge here if needed */}
                                </Link>
                                <div className="relative group">
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary focus:outline-none">
                                        <User className="w-6 h-6" />
                                        <span>{user.name}</span>
                                    </button>
                                     <div className="absolute right-0 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-10">
                                         <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                                         <Link to="/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</Link>
                                         <button onClick={logout} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                                             <LogOut className="w-4 h-4 mr-2" /> Logout
                                         </button>
                                     </div>
                                </div>
                            </>
                        ) : (
                            <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
