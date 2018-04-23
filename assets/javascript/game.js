$(document).ready(function () {
    //set variables
    var created = 0;
    var failures = 0;
    var gathered = 0;
    var random = 250;
    //create randomized number of materials needed on "get recipe" click.
    $(".getRecipe").on("click", ".scroll", function () {
        random = Math.floor(Math.random() * 250) + 1;
        $(".matsToGo").text(random);
        gathered = 0;
    });
    //user clicks ore buttons to add up their materal count.
    $("#mining").on("click", ".ore-button", function () {
        gathered = (gathered + parseInt($(this).val()));
        $(".matsGathered").text("Materials Gathered: " + gathered);

        //if material count is exactly the number required then show random created weapon and increase created tally by 1.
        if (gathered === random) {
            created++;
            $(".created").text("Weapons Created: " + created);
            gathered = 0;
            $(".matsGathered").text("Materials Gathered: " + gathered);
            random = Math.floor(Math.random() * 250) + 1;
        $(".matsToGo").text(random);
        };
        //if material count goes over required materials then add one to failed tally.
        if (gathered > random) {
            failures++;
            $(".failed").text("Failed Combinations: " + failures);
            gathered = 0;
            $(".matsGathered").text("Materials Gathered: " + gathered);
            random = Math.floor(Math.random() * 250) + 1;
        $(".matsToGo").text(random);

        };
        //if created score = 10, then show reset button and thumbs up blacksmith.
        if (created === 10) {
            $(".training").html("<img src='assets/images/complete.png'>");
        };

        //if failed score = 10, then reset button appears.
        if (failures === 10) {
            $(".training").html("<img src='assets/images/fail.png'>");
        };
    });
})