const localStorageApi = {
	loadCategories() {
		return new Promise((resolve, reject) => {
			let categories = JSON.parse(localStorage.categories || null);
			if (!categories) {
				categories = [
					{ id: 0, name: 'Todo', description: 'Add description of category' }
				];
			}
			return resolve(categories);
		});
	},
	modifyCategory(categories) {
		return new Promise((resolve, reject) => {
			localStorage.categories = JSON.stringify(categories);
			return resolve({ success: true });
		});
	},
	loadTodos() {
		return new Promise((resolve, reject) => {
			const todos = JSON.parse(localStorage.todos || '{}');
			return resolve(todos);
		});
	},
	modifyTodos(allTodos) {
		return new Promise((resolve, reject) => {
			localStorage.todos = JSON.stringify(allTodos);
			return resolve(allTodos);
		});
	}
};

export default localStorageApi;
