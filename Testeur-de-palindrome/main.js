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
            motC = mot.toLowerCase();
            motCS = motC.split("");
            motCSR = motCS.reverse();
            motCSRC = motCSR.join("");

            if (motCSRC === motC){
                alert('Le mot est un palindrome: ' +motC+ " à l'envers, ça fait " + motCSRC)
            }else {
                alert("Le mot n'est pas un palindrome... " +motC+ " à l'envers ça fait " + motCSRC)
            };
            

        }
        // Appele la fonction isPalindrome (seulement), donc pour l'instant pas nécessaire.
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