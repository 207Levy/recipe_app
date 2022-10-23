
class Model{
    static currentRecipes:Recipe[]

    async getRecipes(ingredient: string ,dairy: boolean, gluten: boolean): Promise<Recipe[]>{
       Model.currentRecipes =  await $.get(`/recipes/${ingredient}?dairy=${dairy}&gluten=${gluten}`)
       return Model.currentRecipes
    }
}