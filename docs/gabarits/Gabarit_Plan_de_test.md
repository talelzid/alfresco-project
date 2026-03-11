# Plan de test — Gabarit (ISO 29119-3)

## 1. Identifiants et références
- **ID du plan:** PdT-[PROJET]-v[X.Y]
- **Version:** X.Y
- **Date:** YYYY-MM-DD
- **Auteur(s):** [Nom(s)]
- **Documents de référence:**
  - Spécifications: [Référence]
  - User stories: [Référence]
  - Architecture: [Référence]

---

## 2. Introduction
### Contexte
[Description du projet, release concernée, environnement]

### Objectifs du plan de test
- Valider les exigences fonctionnelles et non-fonctionnelles
- Détecter et documenter les anomalies
- Assurer la traçabilité exigences ⇄ tests ⇄ anomalies
- Fournir une base objective pour la décision de mise en production

---

## 3. Objets de test
**Application / Système:**
- Nom: [Ex: Alfresco Community 7.0]
- Version: [X.Y.Z]

**Modules principaux:**
- [Module 1: Gestion documentaire]
- [Module 2: Recherche]
- [Module 3: Workflow]

**APIs:**
- [API REST de gestion de contenu]
- [API de recherche]

**Interfaces:**
- [Interface Web]
- [Interface mobile (si applicable)]

---

## 4. Éléments à tester
Liste détaillée des fonctionnalités à tester:

### Fonctionnalités critiques:
- [ ] Upload de documents (tous formats)
- [ ] Recherche avancée (full-text, métadonnées, filtres)
- [ ] Gestion des permissions (lecture, écriture, admin)
- [ ] Workflows d'approbation

### APIs:
- [ ] CRUD documents
- [ ] Recherche
- [ ] Gestion utilisateurs

### Performance:
- [ ] Temps de réponse upload
- [ ] Temps de réponse recherche
- [ ] Navigation

### Sécurité:
- [ ] Authentification
- [ ] Autorisation
- [ ] Gestion des sessions

---

## 5. Éléments non testés
Éléments explicitement exclus du périmètre:

- Composants tiers non fournis (plugins externes)
- Intégrations planifiées pour phases ultérieures (ERP, CRM)
- Fonctionnalités dépréciées
- Navigateurs obsolètes (IE11, etc.)
- Modules non livrés dans cette release

---

## 6. Approche de test
### Stratégie globale
- **Priorisation:** Risk-Based Testing (focus sur fonctionnalités critiques)
- **Combinaison:** Tests manuels + automatisés

### Types de tests:
- **Fonctionnels:** Validation des exigences utilisateur
- **Non-fonctionnels:** Performance, sécurité, utilisabilité
- **Régression:** Vérification de non-régression après corrections
- **Exploratoires:** Découverte de défauts non anticipés

### Niveaux de test:
- Unitaire (responsabilité dev)
- Intégration
- Système
- Acceptation

### Automatisation:
- **UI:** Robot Framework + Selenium
- **API:** Postman / Robot Framework
- **Performance:** JMeter
- **Exécution parallèle:** Pabot

---

## 7. Critères d'entrée / sortie / suspension / reprise

### 7.1 Critères d'entrée
Conditions requises pour démarrer les tests:

- [ ] Spécifications validées et baseline documentaire figée
- [ ] Version cible livrée et déployée en environnement de test
- [ ] Jeux de données de test préparés et importés
- [ ] Cas de test revus et approuvés
- [ ] Environnement de test opérationnel et accessible

### 7.2 Critères de sortie
Conditions pour considérer les tests terminés:

- [ ] 100% des cas de test critiques exécutés avec succès
- [ ] ≥ 95% des cas de test haute priorité passés
- [ ] Aucune anomalie bloquante ou critique non résolue
- [ ] Couverture des exigences ≥ 90%
- [ ] Rapport de test validé par Chef QA et approuvé

### 7.3 Critères de suspension
Conditions déclenchant la suspension immédiate:

- Défaillance critique de l'environnement (DB inaccessible, backend down, réseau HS)
- Blocage majeur empêchant > 50% des cas de test
- Incidents de sécurité majeurs (fuite de données, accès non autorisé)
- Taux d'échec > 30% sur cas critiques sans correctif prévu

### 7.4 Critères de reprise
Conditions pour reprendre après suspension:

- [ ] Incident documenté et cause racine identifiée
- [ ] Correctif appliqué et vérifié (test de non-régression minimal)
- [ ] Environnement restauré et jeux de données validés
- [ ] Autorisation formelle du Chef QA

---

## 8. Livrables de test
Documents et artefacts produits:

- [ ] **Plan de test:** PdT-[Projet]-[Version].md
- [ ] **Spécifications de test:** Cas de test détaillés (Xray / Robot files)
- [ ] **Scripts automatisés:** Repository Git avec suites Robot Framework
- [ ] **Rapports d'exécution:** Résultats quotidiens / hebdomadaires (log.html, report.html)
- [ ] **Rapports d'anomalies:** Tickets Jira avec captures, logs, repro steps
- [ ] **Matrice de traçabilité:** Exigences ↔ Tests ↔ Anomalies
- [ ] **Rapport final:** Synthèse, métriques, recommandations Go/NoGo

---

## 9. Tâches de test
Activités à réaliser pendant le cycle:

- [ ] Analyser les exigences et identifier les scénarios de test
- [ ] Concevoir les cas de test (manuels et automatisés)
- [ ] Préparer les données de test et configurer les environnements
- [ ] Développer les scripts d'automatisation
- [ ] Exécuter les tests (manuels et automatisés)
- [ ] Enregistrer et suivre les anomalies (Jira)
- [ ] Effectuer les tests de régression après corrections
- [ ] Générer et diffuser les rapports d'avancement
- [ ] Conduire les revues de défauts et réunions de statut
- [ ] Préparer et présenter le rapport final de test

---

## 10. Environnement de test
Configuration technique:

### Environnements:
- **DEV:** https://[projet]-dev.example.com (tests unitaires / intégration)
- **QA:** https://[projet]-qa.example.com (tests système / acceptation)
- **STAGING:** https://[projet]-staging.example.com (tests pré-production)

### Infrastructure:
- **Base de données:** [PostgreSQL 13.x / MySQL 8.x] (snapshots quotidiens)
- **Serveur d'application:** [Tomcat 9.x / Node.js 18.x]

### Navigateurs / OS:
- Chrome (dernière version)
- Firefox
- Edge
- Tests sur: Windows 10/11, Ubuntu 20.04 LTS

### Outils d'automatisation:
- Robot Framework 6.x + SeleniumLibrary
- Postman / Newman (tests API)
- JMeter 5.x (tests de charge)

### Comptes de test:
- user_admin (droits admin)
- user_contributor (écriture)
- user_consumer (lecture seule)

---

## 11. Ressources et responsabilités

| Rôle | Nom | Responsabilités |
|---|---|---|
| Chef QA / Test Manager | [Nom] | Pilotage du plan, coordination, reporting, Go/NoGo |
| Testeur fonctionnel | [Nom] | Conception et exécution tests manuels, validation métier |
| Testeur automatisation | [Nom] | Développement et maintenance scripts Robot Framework |
| Testeur performance | [Nom] | Tests de charge JMeter, analyse métriques |
| DevOps / Admin système | [Nom] | Gestion environnements, déploiements, snapshots DB |

---

## 12. Planning

| Tâche | Responsable | Durée | Échéance |
|---|---|---:|---|
| Rédaction plan de test | Chef QA | 3 j | YYYY-MM-DD |
| Conception cas de test | Équipe QA | 5 j | YYYY-MM-DD |
| Préparation environnements et données | DevOps | 3 j | YYYY-MM-DD |
| Exécution tests manuels | Testeurs | 7 j | YYYY-MM-DD |
| Développement scripts automatisation | Testeur Aut. | 10 j | YYYY-MM-DD |
| Tests de régression | Équipe QA | 5 j | YYYY-MM-DD |
| Tests de performance | Testeur perf. | 4 j | YYYY-MM-DD |
| Rapport final & clôture | Chef QA | 2 j | YYYY-MM-DD |

---

## 13. Risques et contingences

| Risque | Probabilité | Impact | Mesure préventive / Contingence |
|---|:---:|:---:|---|
| Retard livraison composant | Moyenne | Élevé | Plan B: réduire périmètre ou mock service |
| Jeux de données invalides | Élevée | Moyen | Scripts génération auto + snapshots réguliers |
| Montée en charge non évaluée | Moyenne | Élevé | Tests performance précoces (JMeter dès sprint 2) |
| Instabilité environnement | Élevée | Élevé | Infrastructure as Code (Docker), monitoring |
| Départ membre clé équipe | Faible | Élevé | Documentation, binômage, formation croisée |

---

## 14. Besoins en formation

- [ ] **Xray / Jira:** Gestion cas de test (1 jour) — testeurs fonctionnels
- [ ] **Robot Framework:** Bonnes pratiques POM, keywords (2 jours) — testeur automation
- [ ] **Postman & API testing:** Assertions, collections, CI/CD (0.5 jour) — équipe QA
- [ ] **JMeter avancé:** Tests charge, métriques (1 jour) — testeur performance

---

## 15. Approbations

| Rôle | Nom | Signature | Date |
|---|---|---|---|
| Chef QA / Test Manager | [Nom] | _______________ | ____/____ |
| Chef de Projet | [Nom] | _______________ | ____/____ |
| Product Owner | [Nom] | _______________ | ____/____ |
| Architecte technique | [Nom] | _______________ | ____/____ |
| Sponsor / Client | [Nom] | _______________ | ____/____ |

---

## Annexes

### A. Matrice de traçabilité
| Exigence ID | Description | Cas de test | Statut | Anomalies |
|---|---|---|---|---|
| REQ-001 | ... | TC-001, TC-002 | ✅ | - |
| REQ-002 | ... | TC-003 | ⏸️ | BUG-042 |

### B. Cas de test (exemple)
**ID:** TC-001
**Titre:** Vérifier upload document PDF
**Préconditions:**
- Utilisateur connecté avec droits "contributor"
- Environnement QA accessible

**Étapes:**
1. Naviguer vers section "Mes documents"
2. Cliquer sur "Ajouter un document"
3. Sélectionner fichier test.pdf (2 MB)
4. Cliquer sur "Upload"

**Résultat attendu:**
- Document uploadé avec succès
- Message confirmation affiché
- Document visible dans la liste

**Statut:** [ ] Non exécuté | [ ] Passé | [ ] Échec

### C. Checklist d'exécution
- [ ] Environnement vérifié (version, accès)
- [ ] Données de test préparées
- [ ] Navigateurs à jour
- [ ] Outils de capture prêts (screenshots, logs)
- [ ] Jira accessible pour logging des anomalies

---

> **FIN DU GABARIT**
> Conforme à ISO/IEC/IEEE 29119-3:2013 — Software Testing — Part 3: Test Documentation
