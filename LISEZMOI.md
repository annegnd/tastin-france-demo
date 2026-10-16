# Tastin' France Taiwan — site Automne/Hiver 2026

## Contenu
- `index.html` : le site (pages Home, Exhibitors, Marketplace, Event photos, Contact). La page Occitanie est supprimée.
- `data.js` : **le seul fichier à modifier** — infos de l'événement, contact, formulaire, liste des exposants.
- `images/` : à reprendre de l'ancien site et compléter (voir ci-dessous).

## Images à placer dans `images/`
| Fichier | Contenu |
|---|---|
| `img_01.png` | logo Bureau Français de Taipei ✅ inclus |
| `img_02.png` | logo Business France ✅ inclus |
| `tastin-dark.png` / `tastin-light.png` | logo Tastin' France recoloré (fond sombre / fond clair) ✅ inclus |
| `img_06.jpg` … `img_10.jpg` | photos de la page Event photos (remplacer par celles de mai 2026) |
| `plan_de_salle_2026.png` | plan de salle Regent 3F Ballroom |
| `og-tastin-2026.jpg` | visuel central 1920×1080 (aperçu pour LINE / Facebook) |
| `exposants/*.png` | logos des exposants (facultatif) |

## Ajouter les exposants
Les 23 exposants (21 stands) du Catalogue_Site_V1.xlsx sont intégrés dans `data.js`, par ordre alphabétique.
Une fois les stands attribués : remplacer chaque `"table": "TBC"` par le numéro, puis passer `sortBy: "name"` à `sortBy: "table"` dans la configuration. Les filtres par région se créent automatiquement.

## Mise en ligne
Remplacer le contenu du dossier publié actuellement sur tastinfrancetw.com par ce dossier (même hébergeur, même domaine).
