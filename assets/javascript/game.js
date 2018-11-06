$(document).ready(function() {

    var characterCollection = {
        kenobi: {
        name: "Obi-Wan Kenobi",
        healthPoints: 120,
        attackPower: 8,
        counterAttackPower: 25
        },
        skywalker: {
        name: "Luke Skywalker",
        healthPoints: 100,
        attackPower: 21,
        counterAttackPower: 5
        },
        sidious: {
        name: "Darth Sidious",
        healthPoints: 150,
        attackPower: 15,
        counterAttackPower: 20
        },
        maul: {
        name: "Darth Maul",
        healthPoints: 180,
        attackPower: 18,
        counterAttackPower: 15
        },  
    };
        
    var playerAttackPower = 0;
    $(".allCharacter").find(".character").on("click", function() {

        var restOfCharacters;
        $('.character').each(function() {

            restOfCharacters += $(this).appendTo("#enemies").css("border-color", "red");   
        });
        $(this).appendTo("#your_character").css("border-color", "green");
        $(this).removeClass("character");
        var idPlayer = $(this).attr("id");
        $(".allCharacter").empty();
        $(".character").unbind();
        var playerHealthPoints = characterCollection[idPlayer].healthPoints;
        
            
        $("#enemies").find(".character").on("click", function chooseEnemy() {
            $("#defender").empty();
            $("#result").html("");
            $("#enemies").find(".character").unbind();
            $("#startFight").unbind();
            
            playerAttackPower = playerAttackPower + characterCollection[idPlayer].attackPower;
            $(this).appendTo("#defender").css("border-color", "purple");
            var idEnemy = $(this).attr("id");
            var enemyHealthPoints = characterCollection[idEnemy].healthPoints;
            
            
            $("#startFight").on("click", function fight() {
                
                playerHealthPoints = playerHealthPoints - characterCollection[idEnemy].counterAttackPower;
                $("#" + idPlayer + " > p").html(playerHealthPoints);
                enemyHealthPoints = enemyHealthPoints - playerAttackPower;
                $("#" + idEnemy + " > p").html(enemyHealthPoints);
                
                
                if (playerHealthPoints > 0 && enemyHealthPoints > 0) {
                    $("#result").html("You attacked " + characterCollection[idEnemy].name + " for " + playerAttackPower + " damage. " +
                    characterCollection[idEnemy].name + " attacked you back for " + characterCollection[idEnemy].counterAttackPower + " damage.");

                } else if (playerHealthPoints > 0 && enemyHealthPoints <= 0 && $("#enemies").contents().length == 0) {
                    $("#result").html("You won and defeated all the enemies!!!");
                    $("#restart").css("visibility", "visible");
                    $("#startFight").unbind();
                
                } else if (enemyHealthPoints <= 0 && playerHealthPoints > 0) {
                    $("#result").html("You have defeated " + characterCollection[idEnemy].name + ", you can choose to fight another enemy.");
                    $("#startFight").unbind();
                    $("#startFight").on("click", function() {
                        $("#defender").empty();
                        $("#result").html("You need to choose another enemy.");    
                    });
                    $("#enemies").find(".character").on("click", chooseEnemy);
                    
                } else if (playerHealthPoints <= 0) {
                    $("#result").html("You have been defeated. GAME OVER!");
                    $("#restart").css("visibility", "visible");
                    $("#startFight").unbind();
                }
                playerAttackPower = playerAttackPower + characterCollection[idPlayer].attackPower;
            });
        });  
    });
    $("#restart").on("click", function() {
        location.reload();
    });
});