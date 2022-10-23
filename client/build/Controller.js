"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Controller {
    constructor() {
        this.renderer = new Renderer();
        this.Model = new Model();
    }
    loadRecipes(ingredient, gluten, dairy) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipesToRender = yield this.Model.getRecipes(ingredient, dairy, gluten);
            this.renderer.render(recipesToRender);
        });
    }
}
const controller = new Controller();
$('#search-btn').on('click', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const gluten = $('#gluten-free').is(':checked');
        const dairy = $('#dairy-free').is(':checked');
        const ingredient = $("#ingredient").val();
        if (typeof ingredient === 'string') {
            yield controller.loadRecipes(ingredient, gluten, dairy);
        }
    });
});
$('#container').on('click', '.recipe-image', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const ingredientElement = $(this).closest('.recipe').find('.ingredient');
        alert(ingredientElement[0].innerHTML);
    });
});
