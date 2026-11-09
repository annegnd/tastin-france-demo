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
| `plan_de_salle_2026.png` | plan de salle Regent 3F Ballroom ✅ inclus |
| `og-tastin-2026.jpg` | visuel central 1920×1080 (aperçu pour LINE / Facebook) |
| `exposants/*.png` | logos des 25 exposants ✅ inclus (nom du fichier = identifiant de l'exposant) |
| `exposants/sponsor-vinexpo-asia.png` | logo Vinexpo Asia ✅ inclus |

## Exposants
23 stands (Catalogue_Site_TF_nov26.xlsx), classés par n° de stand (`sortBy: "table"`).
Les stands partagés (8 et 18) s'affichent en une seule carte et une seule page : il suffit que les deux sociétés aient le même `table` et un champ `sharedWith`. `shareOrder` (1, 2) fixe l'ordre des deux sociétés sur la carte.
Toutes les fiches sont complètes (Champagne La Comtesse A. mise à jour le 09/11). Pour une fiche incomplète, ajouter `"pending": true` : elle affichera « informations à venir ».

## Sponsor
Vinexpo Asia (stand S) : carte en fin de liste des exposants (lien vers vinexpoasia.com, sans page dédiée) et mention « Sponsor » dans le pied de page. Réglages : bloc `sponsor` dans `data.js`.

## Mise en ligne
GitHub › dépôt tastin-france-demo › Add file › Upload files : glisser TOUT le contenu du dossier (index.html, data.js, LISEZMOI.md, images), puis Commit changes.
