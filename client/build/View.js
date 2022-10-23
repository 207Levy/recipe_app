"use strict";
class Renderer {
    constructor() {
        this.recipesTemplate = Handlebars.compile($("#recipes-template").html());
    }
    render(data) {
        this.emptyAll();
        this.renderRecipes(data);
    }
    renderRecipes(recipes) {
        const inject = this.recipesTemplate({ "recipe": recipes });
        $("#container").append(inject);
    }
    emptyAll() {
        $("#container").empty();
    }
}
//                  *nice slide*
// public renderStats(stats: Statistics, player: JQuery<HTMLElement>): void {
//         const inject = this.statisticsTemplate(stats);
//         player.append(inject);
//         player.find('.statistics').hide()
//         player.find('.statistics').slideDown()
// }
