import Logo from '../assets/logo-money-cut.png';
export const Header = () => {
	return (
		<div className="header">
			<div className="header-box">
				<div className="logo-box">
					<img src={Logo} className="logo" />
				</div>
			</div>
		</div>
	);
};
