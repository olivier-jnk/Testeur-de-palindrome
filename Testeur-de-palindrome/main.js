        // Si le bouton qui à la classe 'verif est cliqué, appeller la fonction 'verification'
        document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById('verif').addEventListener('click', () => {
                verification();
            });
        });


        document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById('randomPalin').addEventListener('click', () => {
                rPalin();
            });
        });

        
        function isPalindrome (str) {
        //forcer le mot à se mettre en minuscules
            motC = mot.toLowerCase();
        //Eclater le mot dans un tableau
            motCS = motC.split("");
        //Retourner le tableau
            motCSR = motCS.reverse();
        //Reunir chq lettre du tableau pour former un mot
            motCSRC = motCSR.join("");
                //Si le mot à l'envers correspond à celui à l'endroit, alors c'est un palindrome, sinon ce n'en est pas un.
            if (motCSRC === motC){
                alert('Le mot est un palindrome: ' +motC+ " à l'envers, ça fait " + motCSRC)
            }else {
                alert("Le mot n'est pas un palindrome... " +motC+ " à l'envers ça fait " + motCSRC)
            };
            

        }
        // met un prompt pour que l'utilisateur puisse entrer son mot, et appele la fonction isPalindrome
        function verification () {
            mot = prompt("Entrez un mot")
            isPalindrome();
        }

        let Palindrome = [
            "kayak",
            "radar",
            "ressasser",
            "niveau",
            "saas",
            "elle",
            "élu par cette crapule",
            "laval",
            "radar",
            "réifier",
            "ressasser",
            "reviver",
            "ressasser",
            "rotor",
            ]
        function rPalin (){
            randomPalindrome ();
        }
        function randomPalindrome (){
            const indexAleatoire = Math.floor(Math.random() * Palindrome.length);
            const motAleatoire = Palindrome[indexAleatoire];
            var elementAffichage = document.getElementById('randompalindrome');
            elementAffichage.textContent = motAleatoire;
            return motAleatoire;
        }
