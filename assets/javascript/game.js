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
            attackPower: 8,
            counterAttackPower: 20
            },
            sidious: {
            name: "Darth Sidious",
            healthPoints: 150,
            attackPower: 8,
            counterAttackPower: 15
            },
            maul: {
            name: "Darth Maul",
            healthPoints: 180,
            attackPower: 8,
            counterAttackPower: 25
            },  
        };
         
        var playerAttackPower = 0;
        $(".allCharacter").find(".character").on("click", function() {
            var rest;
            $('.character').each(function() {
                rest += $(this).appendTo("#enemies").css("border-color", "red");
                
            });
            $(this).appendTo("#your_character").css("border-color", "green");
            $(this).removeClass("character");
            var idPlayer = $(this).attr("id");
            $(".allCharacter").empty();
            $(".character").unbind();
            var playerHealthPoints = characterCollection[idPlayer].healthPoints;
            
                
            $("#enemies").find(".character").on("click", function chooseEnemy() {
                $("#enemies").find(".character").unbind();
                $("#defender").empty();
                
                playerAttackPower = playerAttackPower + characterCollection[idPlayer].attackPower;
                
                $(this).appendTo("#defender").css("border-color", "purple");
                
                var idEnemy = $(this).attr("id");
                var enemyHealthPoints = characterCollection[idEnemy].healthPoints;
                
                
                $("#startFight").on("click", function fight() {
                    

                    playerHealthPoints = playerHealthPoints - characterCollection[idEnemy].counterAttackPower;
                    $("#" + idPlayer + " > p").html(playerHealthPoints);
                    enemyHealthPoints = enemyHealthPoints - playerAttackPower;
                    $("#" + idEnemy + " > p").html(enemyHealthPoints);
                    playerAttackPower = playerAttackPower + characterCollection[idPlayer].attackPower;

                    if (playerHealthPoints > 0 && enemyHealthPoints > 0) {
                        $("#result").html("You attacked " + characterCollection[idEnemy].name + " with " + playerAttackPower + " damages. " +
                        characterCollection[idEnemy].name + " attacked you with " + characterCollection[idEnemy].counterAttackPower + " damages." );
                    } else if (enemyHealthPoints <= 0 && playerHealthPoints > 0) {
                        $("#result").html("You have defeated " + characterCollection[idEnemy].name + ", you can choose to fight another enemy.");
                        $("#startFight").unbind();
                        // $("#enemies").find(".character").bind("click", chooseEnemy());
                        $("#startFight").on("click", function() {
                            $("#result").html("You need to choose another enemy.");
                        });  
                        
                    } else if (playerHealthPoints <= 0) {
                        $("#result").html("You have been defeated. GAME OVER!");
                        $("#restart").css("visibility", "visible");
                        $("#startFight").unbind();
                    }  

                });
            
            });
           
        });
        
    

        $("#restart").on("click", function() {
            location.reload();
       });
});