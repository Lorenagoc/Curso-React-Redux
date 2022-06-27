/* Funções que vão gerar as ações que serão disparadas 
para atualizar o estado da aplicação a partir do reducers */

export function selectTab(tabId) {
	console.log(tabId);
	return {
		type: "TAB_SELECTED",
		payload: tabId,
	};
}

export function showTabs(...tabIds) {
	const tabsToShow = {};
	tabIds.forEach((e) => (tabsToShow[e] = true));
	return {
		type: "TAB_SHOWED",
		payload: tabsToShow,
	};
}
