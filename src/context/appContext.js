import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [ cortes, setCortes ] = useState([]);
	const [ path, setPath ] = useState();

	const stateExport = {
		cortes,
		path,
		setCortes,
		setPath
	};

	return <AppContext.Provider value={stateExport}>{children}</AppContext.Provider>;
};
