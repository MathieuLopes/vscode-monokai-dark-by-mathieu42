# Publication — Monokai Dark by Mathieu42

Note de référence pour la publication sur le Visual Studio Marketplace (et suivi du projet).

**Extension :** `mathieu42.monokai-dark-by-mathieu42`  
**Version cible :** 1.0.0  
**Repo GitHub prévu :** https://github.com/MathieuLopes/vscode-monokai-dark-by-mathieu42

---

## Verdict global

**Le contenu de l’extension est prêt pour une publication 1.0.0.**

Le packaging `vsce` passe, le VSIX est propre (~131 Ko, 10 fichiers), et les champs Marketplace obligatoires sont présents.

**Ce n’est pas encore « publiable de bout en bout »** : il manque l’infra autour (repo Git, GitHub, compte publisher). Ce n’est pas un problème de qualité du thème, mais de pipeline.

---

## Ce qui est bien géré

| Zone | Évaluation |
|------|------------|
| **Manifeste** (`package.json`) | Complet : publisher, icon, banner, repo/bugs/homepage, `engines`, `categories`, `keywords`, `contributes` |
| **Thème** | 426 couleurs UI, 44 `tokenColors`, label cohérent, JSON valide |
| **Couverture UI moderne** | Chat, inline edits, sticky scroll, etc. (au-dessus de la moyenne des thèmes) |
| **Assets Marketplace** | Icône 128×128 PNG, 2 screenshots, banner `#161616` |
| **Docs** | README, CHANGELOG 1.0.0, licence MIT |
| **Package** | `.vscodeignore` pertinent, pas de fichiers dev dans le VSIX |
| **Scripts** | `dev`, `package`, `publish` — suffisant pour une extension thème sans build |

### Contenu du VSIX (référence)

```
monokai-dark-by-mathieu42-1.0.0.vsix
├── changelog.md
├── license.txt
├── package.json
├── readme.md
├── resources/
│   ├── demo-advanced.png
│   ├── demo-simple.png
│   └── logo-128x128.png
└── themes/
    └── default.json
```

---

## Bloquants avant `vsce publish`

1. **Repo GitHub inexistant** — `MathieuLopes/vscode-monokai-dark-by-mathieu42` renvoie 404 alors que `package.json` et le README y pointent.
2. **Pas de dépôt Git local** — pas d’historique, pas de release `.vsix` sur GitHub.
3. **Compte publisher `mathieu42`** + PAT Azure DevOps pour `vsce login` / `publish`.
4. **README** — liens vers des **Releases GitHub** qui n’existent pas encore (à créer après le premier push ou retirer temporairement).

Sans ces points, la publication peut échouer ou la fiche Marketplace aura des liens morts.

---

## Bonnes pratiques

### Niveau actuel

**Solide pour une extension thème minimaliste** — « production ready », pas encore « best-in-class ».

### Déjà bien (niveau pro acceptable)

- Extension **sans dépendances** → simple, peu de maintenance
- Pas de code mort / dossier `dev` / commentaires FIXME
- Taille VSIX raisonnable (~131 Ko)
- `engines.vscode: ^1.85.0` documente le minimum pour les couleurs UI récentes

### Améliorations optionnelles (qualité+, non bloquantes)

| Sujet | Impact | Recommandation |
|-------|--------|----------------|
| **`semanticHighlighting`** | Moyen | Activer + `semanticTokenColors` pour TS/JS/Rust (meilleur rendu avec LSP) |
| **Nom du fichier licence** | Faible | Renommer `license` → `LICENSE` (convention GitHub / OSI) |
| **CI GitHub** | Faible | Workflow `vsce package` sur tag → release `.vsix` automatique |
| **README Marketplace** | Moyen | Langages supportés + « tested on VS Code x / Cursor » |
| **`.vscode/extensions.json`** | Faible | Recommandations en mode développement local |
| **Open VSX** | Moyen | Publication séparée pour l’écosystème Cursor / Open VSX |
| **Screenshots** | Faible | Refaire les captures avec une UI récente (actuelles : mars 2024) |

### Point sensible (gouvernance / licence)

Le projet est présenté comme neuf, sans mention de fork. **Techniquement** le dépôt est cohérent.

**Juridiquement**, si le thème reste une dérivée substantielle d’un projet MIT upstream, la licence MIT impose en principe de **conserver les notices de copyright** de l’auteur d’origine — même sans le mot « fork » dans le README. Ce n’est pas un blocage Marketplace, mais à garder en tête selon l’origine réelle du code.

---

## Nom et identité Marketplace

| Élément | Valeur |
|--------|--------|
| **Display name** | Monokai Dark by Mathieu42 |
| **Extension ID** | `mathieu42.monokai-dark-by-mathieu42` |
| **Package name** | `monokai-dark-by-mathieu42` |
| **Publisher** | `mathieu42` |
| **Thème (sélecteur)** | Monokai Dark by Mathieu42 |

**Recherche Marketplace :** « Monokai Dark by Mathieu42 » + publisher `mathieu42`.

**Collision évitée :** le nom affiché « Monokai Dark » seul est déjà pris (ex. `pioka.monokai-dark`). Le nom complet « Monokai Dark by Mathieu42 » est distinct.

---

## Checklist publication

```
Contenu extension     ✅
vsce package          ✅
GitHub repo           ❌ à créer
git init + push       ❌
Publisher mathieu42   ❓ à confirmer / créer sur marketplace.visualstudio.com
vsce login + publish  ❌
Release GitHub        ⚠️ liens README (optionnel mais documenté)
```

---

## Commandes de publication

### 1. Initialiser Git et pousser

```bash
cd /chemin/vers/vscode-monokai-dark-by-mathieu42

git init
git add .
git commit -m "chore: initial release 1.0.0"

# Créer le repo vide sur GitHub : MathieuLopes/vscode-monokai-dark-by-mathieu42
git branch -M main
git remote add origin https://github.com/MathieuLopes/vscode-monokai-dark-by-mathieu42.git
git push -u origin main
```

### 2. Compte publisher

1. https://marketplace.visualstudio.com/manage  
2. Créer ou vérifier le publisher **mathieu42**  
3. Générer un PAT Azure DevOps avec droit **Marketplace (Manage)**

### 3. Publier

```bash
npx @vscode/vsce login mathieu42
npm run package    # vérifier le .vsix en local
npm run publish
```

### 4. Release GitHub (optionnel, aligné avec le README)

```bash
npm run package
gh release create v1.0.0 monokai-dark-by-mathieu42-1.0.0.vsix --title "v1.0.0" --notes "Initial release."
```

### 5. Tester en local avant publish

```bash
npm run dev          # Cursor
npm run dev:vscode   # VS Code
```

Puis **Preferences: Color Theme** → **Monokai Dark by Mathieu42**.

---

## Synthèse des questions clés

| Question | Réponse |
|----------|---------|
| **Totalement OK pour publier ?** | **Oui pour le package.** Non pour le processus complet tant que GitHub + publisher ne sont pas en place. |
| **Au top des bonnes pratiques ?** | **Bon niveau production ready** pour un thème. Pas « best-in-class » sans semantic highlighting, CI, README enrichi. |
| **Tout bien géré dans le repo ?** | **Oui** : structure claire, packaging propre. **À finaliser** : dépôt distant, git, premier publish, releases GitHub. |

---

## Ressources utiles

- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
- [Theme Color reference](https://code.visualstudio.com/api/references/theme-color)
- [Marketplace publisher management](https://marketplace.visualstudio.com/manage)

---

*Dernière revue : mai 2026 — extension v1.0.0*
