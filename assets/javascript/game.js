$(document).ready(function() {
           
        var start = $("#game").html();

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
            $(".allCharacter").find(".character").unbind();
            var playerHealthPoints = characterCollection[idPlayer].healthPoints;
            
            
            console.log(playerAttackPower);
               
            
            $("#enemies").find(".character").on("click", function chooseEnemy() {
                
                if (playerHealthPoints < 0) {
                    $("#result").html("You have been defeated. GAME OVER!");
                } else if (enemyHealthPoints < 0) {
                    $("#result").html("You have defeated " + characterCollection[idEnemy].name + ", you can choose to fight another enemy.");
                    // $(".character").bind("click", chooseEnemy());
                    console.log(playerAttackPower);
                    $("#enemies").find(".character").on("click", chooseEnemy(playerAttackPower));
                    
                }
                playerAttackPower = playerAttackPower + characterCollection[idPlayer].attackPower;
                console.log(playerAttackPower);
                $("#defender").empty();
                $(this).appendTo("#defender").css("border-color", "purple");
                //$(".character").unbind();
                var idEnemy = $(this).attr("id");
            
                var enemyHealthPoints = characterCollection[idEnemy].healthPoints;
                $("#startFight").on("click", function fight() {

                    
                    playerHealthPoints = playerHealthPoints - characterCollection[idEnemy].counterAttackPower;
                    enemyHealthPoints = enemyHealthPoints - playerAttackPower;

                    $("#" + idEnemy + " > p").html(enemyHealthPoints);
                    $("#" + idPlayer + " > p").html(playerHealthPoints);
                    $("#result").html("You attacked " + characterCollection[idEnemy].name + " with " + playerAttackPower + " damages. " +
                    characterCollection[idEnemy].name + " attacked you with " + characterCollection[idEnemy].counterAttackPower + " damages." );

                    playerAttackPower = playerAttackPower + characterCollection[idPlayer].attackPower;
                    console.log(playerAttackPower);

                    if (playerHealthPoints < 0) {
                        $("#result").html("You have been defeated. GAME OVER!");
                    } else if (enemyHealthPoints < 0) {
                        $("#result").html("You have defeated " + characterCollection[idEnemy].name + ", you can choose to fight another enemy.");
                        // $(".character").bind("click", chooseEnemy());
                        console.log(playerAttackPower);
                        $("#enemies").find(".character").on("click", chooseEnemy());
                        
                    }

                    
                    
                });
            
            });
        
            
            
            
        });
        
    

















        $("#restart").on("click", function() {
            $("#game").html(start);
       });
});