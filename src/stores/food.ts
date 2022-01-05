import { writable } from 'svelte/store';

export const foods = writable<Food[]>([{
	title: 'Shawarma',
	id: 1,
	tags: ['spicy', 'delicious'],
	description: 'Shawarma is a really healthy and good food',
	img_url: 'https://www.foxyfolksy.com/wp-content/uploads/2021/09/chicken-shawarma.jpg'
}]);

export const removeFood = (id: number) => {
	foods.update(oldFoods => {
		return oldFoods.filter(food => food.id !== id)
	})
}

export const addFood = (newFood: CreateFoodArgs) => {
	foods.update((oldFoods) => {
		const newFoodId = oldFoods[oldFoods.length - 1].id + 1;
		return [...oldFoods, { ...newFood, id: newFoodId }];
	});
};