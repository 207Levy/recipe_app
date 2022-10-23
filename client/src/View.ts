class Renderer{
    recipesTemplate: HandlebarsTemplateDelegate<any>


    constructor() {
        this.recipesTemplate = Handlebars.compile($("#recipes-template").html());
    }

    render(data:Recipe[]){
        this.emptyAll();
        this.renderRecipes(data);
    }


    private renderRecipes(recipes: Recipe[]):void {
        const inject = this.recipesTemplate({"recipe": recipes});
        $("#container").append(inject);
        
    }
    
    private emptyAll():void {
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
