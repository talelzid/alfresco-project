/**
 * XPath Validator - Validation et feedback des exercices
 */

// Données des indices pour chaque exercice
const hints = {
    1: [
        "Commencez par //span pour sélectionner tous les span",
        "Utilisez [@id='...'] pour filtrer par l'attribut id",
        "L'id du logo est 'main-logo'"
    ],
    2: [
        "Commencez par //h3 pour sélectionner tous les h3",
        "Utilisez [text()='...'] pour filtrer par le texte exact",
        "Le texte recherché est 'Smartphone X12'"
    ],
    3: [
        "Commencez par //a pour sélectionner tous les liens",
        "Vous devez combiner DEUX conditions avec 'and'",
        "Utilisez contains(@class, 'cart-link') car l'élément a plusieurs classes"
    ],
    4: [
        "Cherchez un div avec plusieurs classes",
        "Quand il y a plusieurs classes, elles sont séparées par un espace",
        "Vous pouvez utiliser @class='product-card featured' ou contains(@class, 'featured')"
    ],
    5: [
        "Cherchez un button avec deux attributs",
        "Combinez @class et @id avec 'and'",
        "L'id est 'add-P002'"
    ],
    6: [
        "Cherchez un span avec une classe spécifique",
        "Ajoutez une condition sur le texte avec text()='...'",
        "Le prix recherché est '1799$'"
    ],
    // Exercice 2
    7: [
        "Commencez par //a pour sélectionner tous les liens",
        "Utilisez [text()='...'] pour filtrer par le texte exact",
        "Le texte recherché est 'Services'"
    ],
    8: [
        "Commencez par //button pour sélectionner tous les boutons",
        "Utilisez [text()='...'] pour le texte exact",
        "Le texte est 'Créer un compte'"
    ],
    9: [
        "Cherchez un h3",
        "Utilisez text()='...' pour le contenu exact",
        "Le titre est 'Nos Services'"
    ],
    10: [
        "Il faut cibler le span avec la classe 'breadcrumb-current'",
        "Combinez [@class='...'] et [text()='...']",
        "Cela évite de sélectionner 'Formation' dans le sous-menu"
    ],
    11: [
        "Cherchez un h4",
        "Le texte exact est 'Support'",
        "XPath: //h4[text()='Support']"
    ],
    12: [
        "Le texte n'est pas seul, il y a une icône avant",
        "Utilisez contains(text(), '...') au lieu de text()='...'",
        "Le texte à chercher est 'Développement sur mesure'"
    ],
    // Exercice 3
    13: [
        "Combinez text()='Voir' avec starts-with(@href, '...')",
        "Utilisez 'and' pour lier les deux conditions",
        "Le href commence par '/projects/PRJ-001'"
    ],
    14: [
        "Vous devez combiner 3 conditions avec 'and'",
        "contains(@class, 'btn-edit') and @data-action='edit' and starts-with(@href, ...)",
        "Le href commence par '/projects/PRJ-002'"
    ],
    15: [
        "Cherchez un div avec deux attributs",
        "contains(@class, 'project-card') and @data-status='pending'",
        "Utilisez contains() car il y a plusieurs classes"
    ],
    16: [
        "Cherchez un button avec deux conditions",
        "contains(@class, 'primary') and @data-tool='create'",
        "Le bouton a plusieurs classes, d'où contains()"
    ],
    17: [
        "Combinez contains(@class, ...) et text()='...'",
        "La classe est 'project-name' et le texte 'Application Mobile'",
        "XPath: //h3[contains(@class, 'project-name') and text()='Application Mobile']"
    ],
    18: [
        "Combinez deux contains() pour les classes ET text()='Terminé'",
        "Vous pouvez vérifier 'badge-completed' seulement si unique",
        "XPath: //span[contains(@class, 'badge-completed') and text()='Terminé']"
    ],
    // Exercice 4 - Fonctions de texte
    19: [
        "Combinez starts-with() et contains() dans le même prédicat",
        "Utilisez 'and' pour lier les conditions : starts-with(., 'Introduction') and contains(., 'Python')",
        "La cible est h3[@class='book-title']"
    ],
    20: [
        "Cherchez un span avec @class='book-category'",
        "Utilisez text()='Histoire' pour le texte exact",
        "XPath: //span[@class='book-category' and text()='Histoire']"
    ],
    21: [
        "normalize-space() supprime les espaces avant/après le texte",
        "Utilisez normalize-space(.)='45.99 $'",
        "La cible est span[@class='book-price']"
    ],
    22: [
        "Combinez starts-with(@data-isbn, '978-2') avec contains(@class, 'featured')",
        "L'élément est un article",
        "XPath: //article[starts-with(@data-isbn, '978-2') and contains(@class, 'featured')]"
    ],
    23: [
        "Cherchez un p[@class='book-description']",
        "Utilisez contains(., 'techniques') pour chercher dans le texte",
        "XPath: //p[@class='book-description' and contains(., 'techniques')]"
    ],
    24: [
        "Combinez starts-with(@href, '/books/python') avec une recherche dans l'ancêtre",
        "Utilisez ancestor::article pour remonter à la carte du livre",
        "XPath: //a[starts-with(@href, '/books/python') and contains(ancestor::article, 'Avancé')]"
    ],
    // Exercice 5 - Axes ascendants
    25: [
        "Partez du lien //a[@href='/issues/78']",
        "Utilisez ancestor::tr pour remonter à la ligne",
        "Puis descendez vers le bouton avec //button[@class='btn-action']"
    ],
    26: [
        "Cherchez td[@class='priority' and text()='High']",
        "Utilisez ancestor::tr pour remonter à la ligne",
        "XPath: //td[@class='priority' and text()='High']/ancestor::tr"
    ],
    27: [
        "Partez du lien //a[@href='/issues/78']",
        "Utilisez ancestor::table pour remonter au tableau",
        "XPath: //a[@href='/issues/78']/ancestor::table"
    ],
    28: [
        "Cherchez d'abord td[@class='tracker' and text()='Bug']",
        "Remontez au tr avec parent::tr",
        "Ajoutez un prédicat [.//td[@class='priority' and text()='Urgent']]"
    ],
    29: [
        "Partez du lien //a[@href='/projects/ecommerce']",
        "Utilisez parent::td pour remonter à la cellule",
        "XPath: //a[@href='/projects/ecommerce']/parent::td"
    ],
    30: [
        "Cherchez td[@class='status' and text()='Resolved']",
        "Utilisez ancestor::tr[@id='issue-77']",
        "Cela combine l'axe ascendant avec un prédicat sur l'ancêtre"
    ],
    // Exercice 6 - Axes siblings
    31: [
        "Partez du label //label[text()='Prénom']",
        "Utilisez following-sibling::input",
        "XPath: //label[text()='Prénom']/following-sibling::input"
    ],
    32: [
        "Partez de //div[@id='personal-info']",
        "Utilisez following-sibling::div[@class='form-section']",
        "XPath: //div[@id='personal-info']/following-sibling::div[@class='form-section']"
    ],
    33: [
        "Partez de //input[@id='street']",
        "Utilisez following-sibling::span[@class='help-text']",
        "XPath: //input[@id='street']/following-sibling::span[@class='help-text']"
    ],
    34: [
        "Partez de //div[@id='preferences']",
        "Utilisez preceding-sibling::div[@class='form-section'][1]",
        "Le [1] sélectionne le premier frère précédent"
    ],
    35: [
        "Partez du bouton //button[@type='reset']",
        "Utilisez following-sibling::button",
        "XPath: //button[@type='reset']/following-sibling::button"
    ],
    36: [
        "Cherchez //input[@id='notifications']",
        "Ajoutez le prédicat [preceding-sibling::input[@type='checkbox']]",
        "XPath: //input[@id='notifications' and preceding-sibling::input[@type='checkbox']]"
    ],
    // Exercice 7 - Prédicats imbriqués
    37: [
        "Partez de //article[@data-id='P005']",
        "Ajoutez des prédicats imbriqués avec and",
        "Vérifiez la présence d'un badge promo ET d'un stock disponible"
    ],
    38: [
        "Cherchez //article avec un prédicat sur le badge de catégorie",
        "Utilisez contains(text(), 'Mobilier') pour la catégorie",
        "Ajoutez un prédicat sur le rating exact: .//span[@class='rating' and text()='⭐ 4.8']"
    ],
    39: [
        "Cherchez //article avec deux conditions",
        "Un span.price.original indique un prix réduit",
        "ET un span.stock.unavailable indique la rupture"
    ],
    40: [
        "Partez du badge: //span[@class='badge promo' and text()='-25%']",
        "Utilisez ancestor::article pour remonter",
        "Ajoutez un prédicat [.//span[contains(text(), 'Audio')]]"
    ],
    41: [
        "Partez de l'article contenant 412 avis",
        "Cherchez le span.price.current",
        "Utilisez number(translate(., ' $', '')) < 100 pour la condition de prix"
    ],
    42: [
        "Cherchez //article avec catégorie Électronique",
        "Ajoutez un prédicat sur le badge promo",
        "Vérifiez que la quantité < 10 avec number(translate(., ' unités', '')) < 10"
    ],
    // Exercice 8 - Axes complexes
    43: [
        "Partez de //h3[text()='📦 Installation']",
        "Utilisez following:: pour tous les éléments suivants (pas juste siblings)",
        "Ajoutez un prédicat pour trouver la première div.note.warning spécifique"
    ],
    44: [
        "Partez de //code[contains(text(), 'npm run test:integration')]",
        "Utilisez following::div[@class='note danger']",
        "Ajoutez un prédicat sur le contenu du message"
    ],
    45: [
        "Partez de la div.note.danger contenant 'Ne committez jamais'",
        "Utilisez preceding::h4 pour tous les h4 précédents",
        "Filtrez par [text()='Étape 3 : Configuration']"
    ],
    46: [
        "Partez de //section[@id='installation']",
        "Utilisez following::div[@class='note info']",
        "Identifiez celle avec le message sur l'installation"
    ],
    47: [
        "Partez de la div.note.warning avec 'Modifiez ces valeurs'",
        "Utilisez following::pre[@class='code']",
        "Filtrez par le contenu contenant 'PORT=3000'"
    ],
    48: [
        "Partez de la dernière div.note.danger (base de données active)",
        "Utilisez following::div[@class='note success']",
        "C'est la seule note success après toutes les notes danger"
    ],
    // Exercice 9 - Cas réels
    49: [
        "Cherchez la ligne //tr avec Thomas Bernard",
        "Ajoutez un prédicat sur le statut pending",
        "Puis descendez vers //button[@data-action='process']"
    ],
    50: [
        "Utilisez //tr[@data-order-id='ORD-2024-1588']",
        "Descendez vers //td[@class='order-amount']",
        "Ou utilisez ancestor depuis le lien vers la td"
    ],
    51: [
        "Cherchez //tr avec badge status-shipped",
        "Ajoutez un prédicat sur le nom du client 'Jean Martin'",
        "Combinez les deux conditions avec and"
    ],
    52: [
        "Cherchez //div[@class='alert warning']",
        "Ajoutez un prédicat sur le message avec contains()",
        "Descendez vers //button[@class='alert-action']"
    ],
    53: [
        "Cherchez //div[@data-metric='revenue']",
        "Ajoutez un prédicat vérifiant .//span[@class='stat-change positive']",
        "Utilisez and pour combiner les conditions"
    ],
    54: [
        "Cherchez //tr avec badge status-shipped",
        "Ajoutez une condition numérique sur le montant > 1000",
        "Utilisez number(translate(., ' $', '')) pour convertir le prix"
    ]
};

// Compteur d'indices affichés
let hintCounts = {};

/**
 * Normalise une expression XPath pour la comparaison
 */
function normalizeXPath(xpath) {
    return xpath
        .trim()
        .replace(/\s+/g, ' ')           // Normaliser les espaces multiples
        .replace(/"/g, "'")              // Remplacer guillemets doubles par simples
        .replace(/\s*,\s*/g, ',')        // Supprimer espaces autour des virgules
        .replace(/\s*\(\s*/g, '(')       // Supprimer espaces après parenthèses ouvrantes
        .replace(/\s*\)\s*/g, ')')       // Supprimer espaces avant parenthèses fermantes
        .replace(/\s*=\s*/g, '=')        // Supprimer espaces autour du signe égal
        .replace(/\s+and\s+/g, ' and ')  // Normaliser les espaces autour de 'and'
        .replace(/\s+or\s+/g, ' or ');   // Normaliser les espaces autour de 'or'
}

/**
 * Valide la réponse d'un exercice
 */
function validateAnswer(exerciseNum) {
    const input = document.getElementById(`answer-${exerciseNum}`);
    const feedback = document.getElementById(`feedback-${exerciseNum}`);
    const userAnswer = input.value.trim();

    if (!userAnswer) {
        showFeedback(feedback, 'error', '❌ Veuillez entrer une expression XPath');
        return;
    }

    const solution = input.getAttribute('data-solution');
    const alternatives = JSON.parse(input.getAttribute('data-alternatives') || '[]');
    
    const normalizedAnswer = normalizeXPath(userAnswer);
    const normalizedSolution = normalizeXPath(solution);
    const normalizedAlternatives = alternatives.map(alt => normalizeXPath(alt));

    // Vérifier si la réponse correspond à la solution ou à une alternative
    if (normalizedAnswer === normalizedSolution || normalizedAlternatives.includes(normalizedAnswer)) {
        showFeedback(feedback, 'success', '✅ Excellent ! Votre XPath est correct.');
        input.style.borderColor = 'var(--success-color)';
        
        // Optionnel : marquer l'exercice comme résolu
        const exerciseItem = input.closest('.exercise-item');
        exerciseItem.style.opacity = '0.7';
    } else {
        // Vérifications supplémentaires pour donner des indices
        let errorMessage = '❌ Ce n\'est pas correct. ';
        
        if (!userAnswer.startsWith('//') && !userAnswer.startsWith('/')) {
            errorMessage += 'Un XPath commence généralement par // ou /';
        } else if (!userAnswer.includes('[') && solution.includes('[')) {
            errorMessage += 'Avez-vous pensé à utiliser des prédicats [ ] ?';
        } else if (userAnswer.includes('[') && !userAnswer.includes('@')) {
            errorMessage += 'N\'oubliez pas le symbole @ pour les attributs.';
        } else {
            errorMessage += 'Vérifiez la syntaxe et les valeurs des attributs.';
        }
        
        showFeedback(feedback, 'error', errorMessage);
        input.style.borderColor = 'var(--accent-color)';
    }
}

/**
 * Affiche un indice pour un exercice
 */
function showHint(exerciseNum) {
    const feedback = document.getElementById(`feedback-${exerciseNum}`);
    
    if (!hintCounts[exerciseNum]) {
        hintCounts[exerciseNum] = 0;
    }
    
    const exerciseHints = hints[exerciseNum];
    if (!exerciseHints) {
        showFeedback(feedback, 'hint', '💡 Aucun indice disponible pour cet exercice.');
        return;
    }
    
    const currentHint = exerciseHints[hintCounts[exerciseNum]];
    
    if (currentHint) {
        showFeedback(feedback, 'hint', `💡 Indice ${hintCounts[exerciseNum] + 1}/${exerciseHints.length} : ${currentHint}`);
        hintCounts[exerciseNum]++;
        
        // Réinitialiser après le dernier indice
        if (hintCounts[exerciseNum] >= exerciseHints.length) {
            hintCounts[exerciseNum] = 0;
        }
    }
}

/**
 * Affiche la solution d'un exercice
 */
function showSolution(exerciseNum) {
    const input = document.getElementById(`answer-${exerciseNum}`);
    const feedback = document.getElementById(`feedback-${exerciseNum}`);
    const solution = input.getAttribute('data-solution');
    
    input.value = solution;
    input.style.borderColor = 'var(--warning-color)';
    showFeedback(feedback, 'hint', `👁 Solution : ${solution}`);
}

/**
 * Affiche un message de feedback
 */
function showFeedback(element, type, message) {
    element.className = `feedback ${type}`;
    element.textContent = message;
    element.style.display = 'block';
    
    // Auto-masquer après 10 secondes pour les messages de succès
    if (type === 'success') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 10000);
    }
}

/**
 * Permet la validation avec la touche Entrée
 */
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[id^="answer-"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const exerciseNum = this.id.split('-')[1];
                validateAnswer(parseInt(exerciseNum));
            }
        });
        
        // Réinitialiser la bordure quand l'utilisateur tape
        input.addEventListener('input', function() {
            this.style.borderColor = '';
        });
    });
    
    console.log('✅ Validateur XPath chargé avec succès');
    console.log('💡 Astuce : Appuyez sur Entrée pour valider votre réponse');
});

/**
 * Fonction utilitaire pour tester un XPath dans la console
 * Usage : testXPath('//img[@id="main-logo"]')
 */
function testXPath(xpath) {
    try {
        const targetDOM = document.getElementById('targetDOM');
        const result = document.evaluate(
            xpath, 
            targetDOM, 
            null, 
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, 
            null
        );
        
        console.log(`XPath: ${xpath}`);
        console.log(`Nombre d'éléments trouvés: ${result.snapshotLength}`);
        
        for (let i = 0; i < result.snapshotLength; i++) {
            console.log(`Élément ${i + 1}:`, result.snapshotItem(i));
        }
        
        return result;
    } catch (error) {
        console.error('Erreur XPath:', error.message);
        return null;
    }
}

// Rendre testXPath accessible globalement pour le débogage
window.testXPath = testXPath;
