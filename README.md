# Jacomino Pizza — site web

Site statique (HTML/CSS/JS, sans dépendance de build) pour la pizzeria **Jacomino Pizza** à Marcheprime (33380). Prêt à être publié sur **GitHub Pages**.

## Contenu

- `index.html` — page d'accueil
- `carte.html` — la carte complète (classiques, calzones, végétariennes, bases crème, bases tomate, desserts)
- `contact.html` — adresse, horaires, téléphone, carte Google Maps intégrée
- `css/style.css`, `js/script.js` — styles et interactions (menu mobile, défilement progressif)
- `assets/img/` — logo, favicon, photo d'accueil, textures (générés à partir des visuels de l'ancien site)
- `robots.txt`, `sitemap.xml`, `.nojekyll` — référencement et config GitHub Pages

## 1. Avant publication : mettre à jour l'URL du site

Les balises SEO (canonical, Open Graph, sitemap, `robots.txt`, JSON-LD) utilisent un domaine temporaire `https://VOTRE-PSEUDO.github.io/jacomino-pizza/`. Une fois que vous connaissez l'URL définitive (GitHub Pages ou nom de domaine personnalisé), remplacez-la partout avec :

```bash
# Depuis le dossier du projet
grep -rl "VOTRE-PSEUDO.github.io/jacomino-pizza" . --include="*.html" --include="*.xml" --include="*.txt" \
  | xargs sed -i '' 's#https://VOTRE-PSEUDO.github.io/jacomino-pizza#https://VOTRE-URL-FINALE#g'
```

(Sur Linux, retirez le `''` après `-i`.)

## 2. Publier sur GitHub Pages

```bash
cd "jacomino pizaa"
git init
git add .
git commit -m "Nouveau site Jacomino Pizza"
git branch -M main
git remote add origin https://github.com/VOTRE-PSEUDO/jacomino-pizza.git
git push -u origin main
```

Puis sur GitHub : **Settings → Pages → Build and deployment → Source : "Deploy from a branch"**, branche `main`, dossier `/ (root)`. Le site sera disponible à `https://VOTRE-PSEUDO.github.io/jacomino-pizza/` après 1–2 minutes.

### Nom de domaine personnalisé (optionnel)

Si la pizzeria a un nom de domaine (ex. `jacominopizza.fr`) : ajoutez un fichier `CNAME` à la racine contenant uniquement ce domaine, configurez les DNS chez le registrar (enregistrement A vers les IP GitHub Pages ou CNAME vers `VOTRE-PSEUDO.github.io`), puis renseignez ce même domaine dans Settings → Pages.

## 3. Mettre à jour le contenu

- **Carte / prix** : éditez directement `carte.html` (un bloc `.menu-item` par pizza).
- **Horaires, téléphone, adresse** : à modifier dans les trois pages (`index.html`, `carte.html`, `contact.html`) et dans le bloc JSON-LD en haut de `index.html`.
- **Images** : remplacez les fichiers dans `assets/img/` en gardant les mêmes noms, ou mettez à jour les chemins dans le HTML.

## Notes

- Les visuels ont été récupérés depuis l'ancien site Wix de la pizzeria (logo, photo de partage de pizza, texture d'ardoise) puis retraités (recadrage, compression, génération du favicon).
- Le contenu de la carte a été retranscrit depuis le menu affiché sur l'ancien site ; vérifiez les prix avant mise en ligne au cas où ils auraient changé depuis.
- Aucune dépendance externe hors Google Fonts (Fraunces + Inter), chargée via CDN.
