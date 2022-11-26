import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Info } from './pages/Info';
import { Scheduling } from './pages/Scheduling';

interface PrivateRouteProps {
	children: ReactNode;
	isAuth: boolean;
	backTo: string;
}

export const PrivateRoute = ({ children, isAuth, backTo }: PrivateRouteProps) => {
	return isAuth ? children : <Navigate to={backTo} />;
};

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/agendamentos" element={<Scheduling />} />
			<Route path="/informacoes" element={<Info />} />
		</Routes>
	)
};
