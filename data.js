/* =========================================================================
   Tastin' France Taiwan — Automne/Hiver 2026
   FICHIER À MODIFIER : configuration de l'événement + liste des exposants.
   Aucune autre modification n'est nécessaire pour mettre le site à jour.
   ========================================================================= */

window.TF_CONFIG = {
  edition: { fr: "Automne · Hiver 2026", zh: "2026 秋冬季", en: "Autumn/Winter Collection 2026" },
  titleZh: "秋冬季【法國綜合產區】品酒會",
  dateFr: "Vendredi 27 novembre 2026",
  dateEn: "Fri. 27 November 2026",
  dateZh: "2026 年 11 月 27 日（五）",
  day: "27", month: "NOV 2026", weekday: "FRIDAY",   // bloc date de la page d'accueil
  hours: "12:00 – 17:00",            // À CONFIRMER par Business France
  icsStart: "20261127T120000", icsEnd: "20261127T170000",   // heure de Taipei, pour « Ajouter au calendrier »
  venueShort: "Regent Taipei",
  venueRoom: "3F Ballroom",
  venueEn: "Regent Taipei · 3F Ballroom",
  venueZh: "台北晶華酒店 3F 宴會廳",
  venueAddress: "台北市中山區中山北路二段39巷3號",   // À vérifier
  contactName: "程小姐",
  contactEmail: "yuru.cheng@businessfrance.fr",      // À CONFIRMER
  privacyEmail: "taipei@businessfrance.fr",
  instagram: "https://www.instagram.com/businessfrance_taiwan/?hl=en",
  facebook: "https://www.facebook.com/BusinessFranceTw/",
  marketplaceUrl: "https://www.marketplace.businessfrance.fr/?at_medium=Sponsored%20links&at_campaign=TFTW26&at_creation=&at_format=site",
  marketplaceSignupUrl: "https://www.marketplace.businessfrance.fr/customer/account/create/?at_medium=Sponsored%20links&at_campaign=TFTW26&at_creation=&at_format=site",
  floorPlan: "images/plan_de_salle_2026.png",        // laisser "" tant que le plan n'est pas prêt

  /* Formulaire d'inscription.
     - Si supabaseUrl + supabaseAnonKey + supabaseTable sont remplis, les inscriptions
       sont enregistrées dans la table Supabase (colonnes : name, company, email, phone, message, edition).
     - Sinon, si formEndpoint est rempli (Formspree, etc.), envoi en POST JSON.
     - Sinon, ouverture d'un e-mail pré-rempli vers contactEmail. */
  supabaseUrl: "",
  supabaseAnonKey: "",
  supabaseTable: "registrations",
  formEndpoint: "https://formspree.io/f/mdeaypnq",

  /* Ordre des exposants : "name" = alphabétique (raison sociale), "table" = par n° de stand.
     Passer à "table" une fois les numéros de stands attribués. */
  sortBy: "name",

  gaId: "",   // ID Google Analytics (G-XXXXXXX) ; vide = pas de suivi

  photosTitle: "Tastin'France 花絮回顧",           // ex. "2026 春夏季 Tastin'France 花絮回顧"
  photos: ["images/img_06.jpg", "images/img_07.jpg", "images/img_08.jpg", "images/img_09.jpg", "images/img_10.jpg"]
};

/* -------------------------------------------------------------------------
   EXPOSANTS — source : Catalogue_Site_V1.xlsx (16/10/2026), 23 sociétés sur 21 stands.
   Champs :
     id            identifiant court (lien de partage)      name        raison sociale affichée
     region        région (filtres)                         table       n° de stand ("TBC" en attendant)
     sharedWith    nom de la société partageant le stand (facultatif)
     type          type d'entreprise                        size        superficie du vignoble
     production    production annuelle                      exportShare part à l'export
     exportMarkets principaux marchés export                website / marketplace : liens
     descEn        présentation (anglais) ; descZh = présentation en chinois (facultatif)
     wines         [{ name: "Cuvée", meta: "Appellation · couleur · millésime · cépage…" }]
   Pour indiquer un n° de stand : remplacer "TBC" par le numéro, ex. table: "07".
   ------------------------------------------------------------------------- */
window.TF_EXHIBITORS = [
 {
  "id": "cave-de-sancerre",
  "name": "Cave de Sancerre",
  "region": "LOIRE VALLEY",
  "table": "TBC",
  "sharedWith": "Domaine de Petit Roubié",
  "type": "Cooperative Winery",
  "size": "270 ha",
  "production": "1 800 000 bottles",
  "exportShare": "70%",
  "exportMarkets": "USA, Canada, Belgium, UK, Italy, Japan…",
  "website": "https://www.vins-sancerre.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/5060/",
  "descEn": "Our cooperative was created in 1963. Today nearly 76 winegrowers who represent 270 ha of vines are partners of the company. These vines are growing in all the villagesand in the most beautiful terroirs of the area : stony slopes of the hills which overlook the Loire River (Longest river of France). This vineyard is a real unique palette, rich in potential and diversity where the Sauvignon Blanc and Pinot Noir grape varieties find the best elements to grow. The wines produced in our perfectly equipped cellars, with the passion and know-how of our winemakers, show the best and the variety of the Sancerre appellation : richness, aromatic intensity, finesse and balance. Leading producer of the AOC, nearly 1.6 million bottles leave our cellars every year for the happiness of our customers around the world.",
  "wines": [
   {
    "name": "L'Etincelle",
    "meta": "Loire Valley · AOP Sancerre · White · 2025 · Sauvignon Blanc · Conventional"
   },
   {
    "name": "L'Etincelle",
    "meta": "Loire Valley · AOP Sancerre · Red · 2023 · Pinot Noir · Conventional"
   },
   {
    "name": "NM",
    "meta": "Loire Valley · AOP Sancerre · Rosé · NV · Pinot Noir · Conventional"
   },
   {
    "name": "Bio",
    "meta": "Loire Valley · AOP Sancerre · White · 2024 · Sauvignon Blanc · Organic"
   }
  ]
 },
 {
  "id": "chateau-de-lastours",
  "name": "Château de Lastours",
  "region": "LANGUEDOC",
  "table": "TBC",
  "type": "Independent Winegrower and Wine Merchant",
  "size": "1000 ha",
  "production": "400 000 bottles",
  "exportShare": "50%",
  "exportMarkets": "China, USA, Singapore",
  "website": "https://www.chateaudelastours.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/4797/",
  "descEn": "A major wine tourism destination today, the vast territory of Lastours was already a stopover in the heart of the Corbières at the dawn of the first millennium. In 2004, a family of enthusiasts fell in love with this flamboyant land. Organic farming, plot selection, energy savings, wine tourism: the work of innovation, rigor, and precision carried out by the Allard family reveals the refinement and excellence of Château de Lastours.\n\nBetween the Pyrenees and the Mediterranean, our 100-hectare vineyard flourishes at the heart of a preserved 1,000-hectare estate. A natural haven where vines, olive trees, pines, and cypresses thrive—typical of the wild and scenic Corbières Maritimes. At 300 meters above sea level, our plots benefit from the influence of 13 winds, including the renowned Tramontane. Our rich, living clay-limestone soils provide an ideal foundation for expressive and characterful wines.\n\nAs pioneers of sustainable viticulture, we are leading an ambitious pilot project: agroforestry, regenerative hydrology, new vine layouts, and the integration of trees and shrubs into the vineyard. Certified organic, our wines are the honest expression of this deep connection to nature.\n\nEmblematic in the Corbières, the wines of Château de Lastours have transmitted the excellence of the terroir as well as the ancestral know-how of the vineyard. The perfect match between grape varieties and soils, supported by rigorous plot selection, makes it possible to create fresh and expressive wines.",
  "wines": [
   {
    "name": "Château de Lastours Grande Réserve Rouge Millésime 2020",
    "meta": "Languedoc · AOP Corbières · Red · 2020 · Syrah, Grenache, Carignan, Mourvèdre · Top 50 China South of France; Silver Medal Concours Général Agricole de Paris · Organic"
   },
   {
    "name": "Château de Lastours Grand Vin Rouge",
    "meta": "Languedoc · AOP Corbières · Red · 2021 · Syrah, Grenache, Carignan · Decanter Gold · Organic"
   },
   {
    "name": "Château de Lastours Grand Vin Blanc",
    "meta": "Languedoc · AOP Corbières · White · 2025 · Roussanne, Vermentino, Grenache · Gold Medal Concours Général Agricole de Paris · Organic"
   },
   {
    "name": "Cinsault de Lastours",
    "meta": "Languedoc · Vin de France · Red · 2023 · Cinsault · Organic"
   },
   {
    "name": "Grenache de Lastours",
    "meta": "Languedoc · Vin de France · Red · 2024 · Grenache · Organic"
   },
   {
    "name": "Bergerie de Lastours Rouge",
    "meta": "Languedoc · AOP Corbières · Red · 2024 · Syrah, Grenache, Carignan · Organic"
   },
   {
    "name": "Bergerie de Lastours Blanc",
    "meta": "Languedoc · AOP Corbières · White · 2025 · Vermentino, Roussanne · Organic"
   }
  ]
 },
 {
  "id": "chateau-de-malleret",
  "name": "Château de Malleret",
  "region": "BORDEAUX",
  "table": "TBC",
  "type": "Producer",
  "size": "60 ha",
  "production": "350 000 bottles",
  "exportShare": "35%",
  "exportMarkets": "Europe",
  "website": "https://www.chateau-malleret.fr",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/9762/",
  "descEn": "Château de Malleret, Cru Bourgeois Exceptionnel Haut-Médoc, has been in the same family since 1860 and continues to strive for excellence.\nThe story of a château at the heart of a singular estate of 290 hectares and 57 hectares\nof vines, situated at the gateway to Bordeaux, where a passion for wine is combined\nwith a passion for horses.\nChâteau de Malleret produces 300 000 bottles a year in the following appellations:\nBordeaux white & rosé\nHaut-Médoc Cru Bourgeois & Crus Bourgeois Exceptionnel\nMargaux",
  "wines": [
   {
    "name": "Blanc de Noir",
    "meta": "Bordeaux · Vin de France · White · 2025 · Merlot 100% · Sustainable"
   },
   {
    "name": "Balzane de Malleret",
    "meta": "Bordeaux · AOC Bordeaux · White · 2024 · Sauvignon 100% · Sustainable"
   },
   {
    "name": "Château de Malleret White",
    "meta": "Bordeaux · AOC Bordeaux · White · 2023 · Sauvignon 100% · Gold Medal at Concours Mondial du Sauvignon, 93/100 Andreas Larsson, 91-92/100 James Suckling, 92-93/100 Alexandre Ma, 89-91/100 Jeb Dunnuck, 88-90/100 Robert Parker, Yohan Castaing · Sustainable"
   },
   {
    "name": "Rosé de Malleret",
    "meta": "Bordeaux · AOC Bordeaux · Rosé · 2025 · Cabernet Sauvignon, Petit Verdot · Sustainable"
   },
   {
    "name": "Red de Malleret",
    "meta": "Bordeaux · Vin de France · Red · 2024 · Cabernet Sauvignon, Merlot · Terre de Vins 92/100 (April 2025) · Sustainable"
   },
   {
    "name": "Baron de Malleret",
    "meta": "Bordeaux · AOC Haut-Médoc · Red · 2022 · Merlot, Cabernet Sauvignon, Petit Verdot · Gold Medal Terre de Vins, 88/100 Wine Spectator, 90/100 Andreas Larsson, 92/100 Wine Enthusiast · Sustainable"
   },
   {
    "name": "Château de Malleret",
    "meta": "Bordeaux · AOC Haut-Médoc Cru Bourgeois · Red · 2016 · Cabernet Sauvignon, Merlot, Petit Verdot · Coup de Cœur du Figaro, 93/100 James Suckling, 91/100 Neal Martin, 90/100 Tim Atkin, 88/100 Decanter, 89/100 Antonio Galloni, 90+/100 Jérôme Perrin, 91/100 Tasted, 89/100 Bettane+Desseauve, 16,5/20 Bernard Burtschy, 16,5/20 Jancis Robinson · Sustainable"
   },
   {
    "name": "Château de Malleret",
    "meta": "Bordeaux · AOC Haut-Médoc Cru Bourgeois Exceptionnel · Red · 2020 · Cabernet Sauvignon, Merlot, Petit Verdot · Yves Beck 93, James Suckling 91-92, Lisa Perrotti-Brown 90-92, Alexandre Ma 92-93, Tim Atkin 91, Terre de Vins 95, Le Figaro 91-92, 2stars Guide Hachette 2024, Decanter 92 · Sustainable"
   },
   {
    "name": "Château de Malleret",
    "meta": "Bordeaux · AOC Haut-Médoc Cru Bourgeois Exceptionnel · Red · 2022 · Cabernet Sauvignon, Merlot, Petit Verdot · Decanter World Wine Awards 2025 96/100, James Suckling 92-93, Terre de Vins 95, Andreas Larsson 93, Jane Anson 93, Peter Moser Falstaff 92, Georgina Hindle Decanter 93, Bernard Burtschy 94-95 · Sustainable"
   },
   {
    "name": "Margaux de Malleret",
    "meta": "Bordeaux · AOC Margaux · Red · 2020 · Merlot 100% · Andreas Larsson 92; Tim Atkin 91, Guide Hachette 2024 2* · Sustainable"
   },
   {
    "name": "Margaux de Malleret",
    "meta": "Bordeaux · AOC Margaux · Red · 2021 · Merlot 100% · Sustainable"
   }
  ]
 },
 {
  "id": "chateau-de-parnay",
  "name": "Château de Parnay",
  "region": "LOIRE VALLEY",
  "table": "TBC",
  "type": "Winegrower",
  "size": "35 ha",
  "production": "160 000 bottles",
  "exportShare": "10%",
  "exportMarkets": "North America, Asia",
  "website": "https://www.chateaudeparnay.fr",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/10215/",
  "descEn": "The historic estate of Antoine Cristal (1887), home to the famous Clos d'entre les Murs, the Château de Parnay vineyard extends over 35 hectares in the Saumur Champigny appellation area and offers uninterrupted views of the Loire hillsides.\nIts vineyard plots, located on clay-limestone soils marked by the presence of tuffeau limestone, are farmed organically with the greatest respect for the vines and their environment.\nAt the winery, a team of enthusiasts strive to bring out the best in this exceptional terroir to produce the remarkable wines of Château de Parnay.",
  "wines": [
   {
    "name": "Saumur Blanc Château de Parnay \"Le Blason de Parnay\" 2025",
    "meta": "Loire Valley · AOP Saumur Blanc · White · 2025 · Chenin Blanc · Organic"
   },
   {
    "name": "Saumur Blanc Château de Parnay \"Le Chemin des Murs\" 2025",
    "meta": "Loire Valley · AOP Saumur Blanc · White · 2025 · Chenin Blanc · Gold CGA Paris 2026, 92/100 Decanter 2026, 90/100 IWC 20 · Organic"
   },
   {
    "name": "Saumur Blanc Château de Parnay \"Le Clos d'Entre les Murs\" 2020",
    "meta": "Loire Valley · AOP Saumur Blanc · White · 2020 · Chenin Blanc · Organic"
   },
   {
    "name": "Saumur Champigny Château de Parnay \"Le Blason de Parnay\" 2025",
    "meta": "Loire Valley · AOP Saumur Champigny · Red · 2025 · Cabernet Franc · Organic"
   },
   {
    "name": "Saumur Champigny Château de Parnay \"Le clos du Château\" 2021",
    "meta": "Loire Valley · AOP Saumur Champigny · Red · 2021 · Cabernet Franc · 88/100 Decanter 2026, 88/10 IWC 2026 · Organic"
   },
   {
    "name": "Saumur Champigny \"Château de Parnay\" 2018",
    "meta": "Loire Valley · AOP Saumur Champigny · Red · 2018 · Cabernet Franc · Organic"
   },
   {
    "name": "Saumur Champigny Château de Parnay \"La Coulée du Méridien\" 2018",
    "meta": "Loire Valley · AOP Saumur Champigny · Red · 2018 · Cabernet Franc · Organic"
   },
   {
    "name": "Saumur Champigny Château de Parnay \"Le Clos des Meuniers\" 2019",
    "meta": "Loire Valley · AOP Saumur Champigny · Red · 2019 · Cabernet Franc · Organic"
   }
  ]
 },
 {
  "id": "chateau-des-ravatys",
  "name": "Château des Ravatys",
  "region": "BEAUJOLAIS",
  "table": "TBC",
  "type": "Grower-Producer",
  "size": "36 ha",
  "production": "120 000 bottles",
  "exportShare": "11%",
  "exportMarkets": "UK, Belgium, Sweden",
  "website": "https://www.chateaudesravatys.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/4580/",
  "descEn": "At the foot of Mont Brouilly, the Château des Ravatys was founded in 1850 by Auguste SOLET. After his only son died in the 1870 war, he adopted his niece Mathilde COURBE, to whom he bequeathed his fortune. She managed the estate and was awarded a bronze medal at the Agricultural Competition of the 1900 World’s Fair. She bequeathed all her assets to the Pasteur Institute in Paris in 1937. From 1990 onwards, the Château and the Orangery were modernised to welcome the public: seminars, gala dinners, conferences, weddings, exhibitions and concerts. The LAVOREL family acquired this property in December 2020, with the aim of continuing to raise the standard of the estate’s wines – which hold HVE 3 certification – by placing greater emphasis on environmentally responsible practices, notably through the estate’s conversion to organic farming by 2025.",
  "wines": [
   {
    "name": "Château des Ravatys Beaujolais Rouge",
    "meta": "Beaujolais · AOC Beaujolais Rouge · Red · 2023 · Gamay · 91 points Stuart Pigott, Gold Award Concours des Grands Vins de France de Mâcon · Organic Conversion"
   },
   {
    "name": "Château des Ravatys Brouilly",
    "meta": "Beaujolais · AOC Brouilly · Red · 2023 · Gamay · 91 points Stuart Pigott · Organic Conversion"
   },
   {
    "name": "Château des Ravatys Côte de Brouilly, Cuvée Mathilde",
    "meta": "Beaujolais · AOC Côte de Brouilly · Red · 2023 · Gamay · 93 points Stuart Pigott; Gold Award Concours des Grands Vins de France de Mâcon · Organic Conversion"
   },
   {
    "name": "Château des Ravatys Côte de Brouilly, Cuvée Réserve",
    "meta": "Beaujolais · AOC Côte de Brouilly · Red · 2023 · Gamay · 95 points Stuart Pigott · Organic Conversion"
   },
   {
    "name": "Château des Ravatys Beaujolais Blanc",
    "meta": "Beaujolais · AOC Beaujolais Blanc · White · 2025 · Chardonnay · Organic Conversion"
   }
  ]
 },
 {
  "id": "chateau-toulouse-lautrec",
  "name": "Château Toulouse-Lautrec",
  "region": "BORDEAUX",
  "table": "TBC",
  "type": "Estate Grower-Producer (SCEA)",
  "size": "45 ha",
  "production": "150 000 bottles/year",
  "exportShare": "80%",
  "exportMarkets": "Germany, Canada, UK",
  "website": "https://www.chateautoulouselautrec.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/10347/",
  "descEn": "Located in Saint-André-du-Bois on Bordeaux's right bank, Château Toulouse-Lautrec is a 45-hectare Bordeaux Supérieur estate. The château was the maternal family home of painter Henri de Toulouse-Lautrec, who died there in 1901; the site has held the French heritage label \"Maison des Illustres\" since 2016. The vineyard, planted on clay-gravel alluvial soils from the Pyrenean trench, is run by winegrower Charles Estager alongside oenologist Bruno Lacoste. The estate is HVE-certified, with one white cuvée certified organic. The range spans three tiers: Couleurs de Toulouse-Lautrec (entry level), Château Toulouse-Lautrec (core range, whose 2020 vintage scored 88 points from Wine Enthusiast's Roger Voss), and Moulin Rouge Grand Vin, an official collaboration cuvée created in 2025 for the cabaret's 135th anniversary, made in both red and white. The estate exports 80% of production to around fifteen markets, mainly Germany, Canada and the UK, and is currently building its commercial presence in Asia. [placeholder — pairing notes, per-cuvée volumes, further accolades to confirm with Charlotte]",
  "wines": [
   {
    "name": "Château Toulouse-Lautrec Blanc",
    "meta": "Bordeaux · AOC Bordeaux Blanc · White · 2022 · Sémillon 90%, Sauvignon Blanc 10% · HVE"
   },
   {
    "name": "Couleurs de Toulouse-Lautrec Rouge",
    "meta": "Bordeaux · AOC Bordeaux Supérieur Rouge · Red · 2022 · Merlot 60%, Cabernet Franc 17%, Cabernet Sauvignon 17%, Malbec 6% · HVE"
   },
   {
    "name": "Couleurs de Toulouse-Lautrec Blanc",
    "meta": "Bordeaux · AOC Bordeaux Blanc · White · 2023 · Sauvignon Blanc 80%, Sémillon 18%, Muscadelle 2% · HVE / Organic"
   },
   {
    "name": "Moulin Rouge Grand Vin Rouge",
    "meta": "Bordeaux · AOC Bordeaux Supérieur Rouge · Red · 2019 · Merlot 80%, Cabernet Franc 15%, Cabernet Sauvignon 5% · Sivler Award Concours de Lyon; Silvers Award Concours de Bordeaux; Gold Award Concours Terres de Vins; 2x Gold and Best of Class Award at Los Angeles International Wine Competition; 91/100 James Suckling; 92/100 Y. Beck; 89/100 Vinous; 94/100 Los Angeles International Wine Competition · HVE"
   },
   {
    "name": "Moulin Rouge Grand Vin Blanc",
    "meta": "Bordeaux · AOC Bordeaux Blanc · White · 2021 · Sémillon 90%, Sauvignon Blanc 10% · HVE"
   }
  ]
 },
 {
  "id": "clos-sainte-magdeleine",
  "name": "Clos Sainte Magdeleine",
  "region": "PROVENCE",
  "table": "TBC",
  "type": "Independent Winegrower",
  "size": "15 ha",
  "production": "90 000 bottles",
  "exportShare": "45%",
  "exportMarkets": "USA, UK, Japan, Switzerland, Netherlands, Germany, Australia, South Korea, Hong Kong, Canada",
  "website": "https://www.clossaintemagdeleine.fr",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/5442/",
  "descEn": "An exceptional terroir in the heart of the Calanques National Park. Clos Sainte Magdeleine is a spectacular estate of 20 hectares, 15 of which are in production.\nOwned by the Zafiropulo family since 1921, it is now in the hands of the younger generation, represented by Jonathan and Aurélie.\nThe Cassis appellation is the oldest AOC in Provence, recognised since 1936. However, uniquely in the Mediterranean, we produce 80% white wines.\nThe Clos Sainte Magdeleine vineyard, all 'restanques', clings to the side of the Cap Canaille on an impressive slope in a cirque overlooking the Mediterranean. Then there's the vineyard's emblematic plot, situated at the foot of the cliff, like a lookout point over the sea. All our vines are planted on clay-limestone soils, a true catalyst for minerality. Our deep-rooted vines give our wines an incomparable aptitude for ageing. The diversity of the varieties planted (Marsanne, Clairette, Ugni, Bourboulenc, Rolle, Grenache, Cinsault) enriches the identity of the estate's wines, giving them a unique depth and complexity. The microclimate of Clos Sainte Magdeleine, combined with the sea breezes, provides the ideal conditions for the perfect ripening of our grapes, preserving their incomparable freshness and minerality.\nThe deep identity of our wines can be summed up in a few words: minerality and salinity.\nThe vast underground cellars date back to the 19th century. Most of the vats are made of stainless steel, but there are also ovoid concrete vats, sandstone jars and half-muid barrels. Traditional vinification and long ageing guarantee the greatest respect for our terroirs.\nOur philosophy is clear: to make Clos Sainte Magdeleine the reference for white wines in the South of France, a symbol of excellence and authenticity.\nFor several years now, we have also been selecting the finest terroirs of Provence Maritime, not far from our Cassis vineyard, to create a new range of iconic wines.\nThese wines are created and designed with the ambition to capture the moment, between minerality and conviviality. The wines in the SAINTE-MAGDELEINE range feature emblematic southern grape varieties and the terroir of Provence.",
  "wines": [
   {
    "name": "Blanc Tradition by Clos Sainte Magdeleine",
    "meta": "Provence · AOP Cassis · White · 2025 · Marsanne, Ugni blanc, Clairette, Bourboulenc · 91 points Silver Medal Decanter, WWA 2026 95 points, Guide 2026 Bettane & Desseauve · Conventional"
   },
   {
    "name": "Bel-Arme by Clos Sainte Magdeleine",
    "meta": "Provence · AOP Cassis · White · 2024 · Marsanne, Ugni blanc, Clairette, Bourboulenc · 96 points Gold Medal Decanter WWA 2026, 97 points Guide 2025 Bettane & Desseauve · Conventional"
   },
   {
    "name": "Rosé Cassis by Clos Sainte Magdeleine",
    "meta": "Provence · AOC Cassis · Rosé · 2025 · Grenache, Cinsault · 95 points Guide 2025 Bettane & Desseauve · Conventional"
   },
   {
    "name": "Rouge Cassis by Clos Sainte Magdeleine",
    "meta": "Provence · AOP Cassis · Red · 2024 · Grenache, Cinsault · Conventional"
   },
   {
    "name": "Baume-Noire by Clos Sainte Magdeleine",
    "meta": "Provence · IGP Bouches-du-Rhône · White · 2024 · Vermentino · 96 points Guide 2026 Bettane & Desseauve · Conventional"
   },
   {
    "name": "Blanc Méditerranée by Sainte Magdeleine",
    "meta": "Provence · IGP Méditerranée · White · 2025 · Rolle, Ugni blanc, Clairette · 95 points Gold Medal Decanter WWA 2026 · Organic"
   }
  ]
 },
 {
  "id": "dauvergne-ranvier",
  "name": "Dauvergne & Ranvier",
  "region": "RHÔNE VALLEY",
  "table": "TBC",
  "type": "Wine Merchant and Producer",
  "size": "",
  "production": "1 500 000 bottles",
  "exportShare": "20%",
  "exportMarkets": "Japan, UK, Europe, USA",
  "website": "https://www.dauvergne-et-ranvier.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/2096/",
  "descEn": "Our Know-how\n•\tRhone Valley: based in Tavel, we make wines from more than 20 appellations including Côte-Rôtie, Châteauneuf du Pape and, of course, Côtes-du-Rhône.\n•\tWe are “driving winemakers”: instead of buying finished wines, we create them by technically supervising more than 40 independent producers from vines to vats.\n•\tOrganic: more than 60% of our production is now organic.\n\nThe D&R style\n•\tfruit: our wines are fruit forward.\n•\troundness: the tannins are soft and ripe.\n•\tfreshness: it is a challenge in the south of France but we want our wines to have a fresh and pure finish.\n•\t“The entire range is now perfectly recognizable with absolute models of pleasure wines, without competition in this price segment.”\nMichel Bettane – Thierry Desseauve 2025\n\nThe Classic Range\n\n•\tTarget Market: Retail\n•\tPackaging: Instantly recognizable; classic with a touch of luxury.\n•\tRange: Covers all major Rhône Valley AOCs.\n•\tGourmet Wines: Crisp and fruit-forward.\n•\tSelection: Standouts for their quality and aging potential, far exceeding the standards typical of each appellation.\n•\tRare Wines: Produced in limited quantities and only in the best vintages.\nThe Creation Range\n•\tClientele: on-trade\n•\tpackaging: refined, it associates a name with each wine.\n•\trange: hand-picked appellations.\n•\tAt the bar: Les Pitchounes, this range brings together relaxed wines where freshness and fruit are expressed directly.\n•\tToday’s menu: Les Bistronomiques. Like “signature courses”, each wine has its own distinct personality.\n•\tÀ la carte:  Les Gastronomiques. Truly crafted, always on the cutting edge between power and finesse, these are our most intimate vintages.",
  "wines": [
   {
    "name": "Dauvergne & Ranvier Ventoux Vin Gourmand",
    "meta": "Rhône Valley · AOP Ventoux · Red · 2025 · Grenache, Syrah · 1star Hachette Guidebook 2026 · Conventional"
   },
   {
    "name": "Dauvergne & Ranvier Côtes du Rhône Vin Gourmand",
    "meta": "Rhône Valley · AOP Côtes du Rhône · Red · 2025 · Grenache, Syrah, Mourvèdre, Carignan, Marselan · Organic"
   },
   {
    "name": "Dauvergne & Ranvier Côtes du Rhône Vin Rare 15 varietal blend",
    "meta": "Rhône Valley · AOP Côtes du Rhône · Red · 2025 · Grenache, Syrah, Mourvèdre, Vaccarèse, Carignan, Cinsault, Clairette Rose, Counoise, Grenache Gris, Marselan, Muscardin, Picpoul Noir, Terret Noir, Couston, Caladoc · 1star Hachette Guidebook 2027 · Organic"
   },
   {
    "name": "Dauvergne & Ranvier Gigondas Selection",
    "meta": "Rhône Valley · AOP Gigondas · Red · 2025 · Grenache Noir, Syrah, Mourvèdre, Cinsault · Organic"
   },
   {
    "name": "Dauvergne & Ranvier Crozes Hermitage Selection",
    "meta": "Rhône Valley · AOP Crozes-Hermitage · Red · 2025 · Syrah · Bettane 92/100 · Conventional"
   },
   {
    "name": "Dauvergne & Ranvier Côte Rôtie Selection",
    "meta": "Rhône Valley · AOP Côte Rôtie · Red · 2023 · Syrah · 89 Jeb Dunnuck, 92 Silver Medal Decanter · Conventional"
   },
   {
    "name": "Le Voisin du Dessous (\"The Downstairs Neighbor\") Viognier",
    "meta": "Rhône Valley · IGP Ardèche · White · 2025 · Viognier · 90/100 Bettane · Organic"
   },
   {
    "name": "Le Voisin d'en face (\"The Neighbor Across the Street\") Syrah",
    "meta": "Rhône Valley · IGP Ardèche · Red · 2025 · Syrah · 91/100 Bettane · Organic"
   },
   {
    "name": "Pierre Solaire (\"Solar Stone\")",
    "meta": "Rhône Valley · AOP Côtes du Rhône · White · 2025 · Viognier, Marsanne, Grenache Blanc, Roussanne · Organic"
   },
   {
    "name": "Du Soleil à La Terre (\"from Sun to Earth\")",
    "meta": "Rhône Valley · AOP Châteauneuf-du-Pape · Red · 2024 · Grenache, Syrah, Mourvèdre, Counoise · Organic"
   }
  ]
 },
 {
  "id": "domaine-daurion",
  "name": "Domaine Daurion",
  "region": "LANGUEDOC",
  "table": "TBC",
  "type": "Independent Winegrower",
  "size": "54 ha",
  "production": "3 000 hL",
  "exportShare": "5%",
  "exportMarkets": "Europe, Asia-Pacific",
  "website": "https://www.daurion.fr",
  "marketplace": "N/A",
  "descEn": "Wine Collection — Pézenas, Southern France\nDomaine Daurion offers a collection of wines reflecting the diversity of Languedoc and the Mediterranean identity of Pézenas. From contemporary and approachable IGP Pays d’Oc wines to more complex AOP Languedoc and Languedoc Pézenas cuvées, our range is built around freshness, aromatic precision, elegance and purity of fruit.",
  "wines": [
   {
    "name": "IGP Pays d’Oc Blanc 2025",
    "meta": "Languedoc · IGP Pays d’Oc · White · 2025 · Colombard, Chardonnay, Viognier · Biodynamic"
   },
   {
    "name": "L’Adauré de Daurion IGP Pays d’Oc Blanc 2025",
    "meta": "Languedoc · IGP Pays d’Oc · White · 2025 · Colombard, Viognier · Biodynamic"
   },
   {
    "name": "Les Orgues AOP Languedoc Blanc 2023",
    "meta": "Languedoc · AOP Languedoc · White · 2023 · Grenache Blanc, Roussannne, Viognier · Biodynamic"
   },
   {
    "name": "IGP Pays d’Oc Rouge 2024",
    "meta": "Languedoc · IGP Pays d’Oc · Red · 2024 · Syrah, Cinsault, Marselan · Biodynamic"
   },
   {
    "name": "La Résonnance AOP Languedoc Rouge 2023",
    "meta": "Languedoc · AOP Languedoc · Red · 2023 · Syrah, Grenache, Mourvèdre · Biodynamic"
   },
   {
    "name": "AOP Languedoc Pézenas 2025",
    "meta": "Languedoc · AOP Languedoc · Red · 2025 · Syrah, Grenache Noir · Biodynamic"
   }
  ]
 },
 {
  "id": "domaine-de-petit-roubie",
  "name": "Domaine de Petit Roubié",
  "region": "LANGUEDOC",
  "table": "TBC",
  "sharedWith": "Cave de Sancerre",
  "type": "Independent Wine Estate",
  "size": "80 ha",
  "production": "600 000 bottles",
  "exportShare": "40%",
  "exportMarkets": "England, Germany, Belgium, Canada",
  "website": "https://www.petit-roubie.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/9860/",
  "descEn": "Nestled in the heart of Languedoc, in the Occitanie region and just a stone’s throw from the Thau Lagoon, Domaine de Petit Roubié has been a pioneer in organic farming, proudly certified by ECOCERT since 1985.\nSpanning 80 hectares across the villages of Pinet, Florensac, Marseillan, Castelnau de Guers, and Mèze, the estate is deeply committed to protecting the rich biodiversity that plays a vital role in preserving our natural environment.\n\"Its terroir is the sea\" — the emblematic slogan of the Picpoul de Pinet appellation perfectly captures the soul of this crisp white wine. It conjures up the image of delicate, honeyed white blossoms blooming at the foot of the Piquepoul vines, mingling with aromas of citrus and white peach, all carried inland on the salty, sea-kissed breeze rising from the Mediterranean and sweeping across the upper shores of the Thau Lagoon. The result is a vibrant collection of wines that are fresh, expressive, and bursting with character.",
  "wines": [
   {
    "name": "Château Petit Roubié",
    "meta": "Languedoc · AOP Picpoul de Pinet · White · 2025 · Piquepoul · Silver Medal Concours Général Agricole 2025 · Organic"
   },
   {
    "name": "Viognier",
    "meta": "Languedoc · IGP Pays d'Oc · White · 2024 · Viognier · Gold Medal Challenge Millésime Bio 2025 · Organic"
   },
   {
    "name": "Tannat",
    "meta": "Languedoc · IGP Pays d'Hérault · Red · 2023 · Tannat · Organic"
   },
   {
    "name": "Le P'tit Roubié",
    "meta": "Languedoc · IGP Pays d'Hérault · Red · 2025 · Cabernet, Merlot, Syrah · Organic"
   },
   {
    "name": "Sauvignon",
    "meta": "Languedoc · IGP Pays d'Hérault · White · 2024 · Sauvignon Blanc · Organic"
   }
  ]
 },
 {
  "id": "domaine-saint-antoine",
  "name": "Domaine Saint Antoine",
  "region": "LANGUEDOC",
  "table": "TBC",
  "type": "Independent Winegrower",
  "size": "24 ha",
  "production": "1 000 hL",
  "exportShare": "60%",
  "exportMarkets": "Germany, Japan, England",
  "website": "https://www.domaine-st-antoine.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/2279/",
  "descEn": "Between the reliefs of the Montagne Noire and the Corbières massif, the Domaine Saint-Antoine occupies a privileged position in the heart of the Aude valley. Its plots, worked in organic farming, are part of a multi-millennial wine tradition where each row of vines tells a fragment of history.\nIn the immediate vicinity of major classified sites such as the Cité de Carcassonne and the Canal du Midi, the estate is an ideal starting point for a wine tourism stay combining tastings, nature walks and discovery of the Cathar Country. Between villages of character, hiking trails and medieval heritage, each visit becomes a complete experience around wine and the territory. Our estate includes 24 Ha managed in organic farming since 2022.\nA very rich terroir offering beautiful cuvées in IGP Pays d'Oc and AOP Minervois.",
  "wines": [
   {
    "name": "Domaine Saint Antoine, Découverte 2023",
    "meta": "Languedoc · IGP Pays d'Oc · White · 2023 · Viognier · Organic"
   },
   {
    "name": "Domaine Saint Antoine, Les Fêtards 2025",
    "meta": "Languedoc · IGP Pays d'Oc · White · 2025 · Grenache Gris · Organic"
   },
   {
    "name": "Domaine Saint Antoine, Les Exubérants 2025",
    "meta": "Languedoc · IGP Pays d'Oc · Rosé · 2025 · Grenache, Merlot · Organic"
   },
   {
    "name": "Domaine Saint Antoine, Les Equilibristes 2024",
    "meta": "Languedoc · IGP Pays d'Oc · Red · 2024 · Marselan · Organic"
   },
   {
    "name": "Domaine Saint Antoine, Origine 2022",
    "meta": "Languedoc · IGP Coteaux de Peyriac · Red · 2022 · Carignan Vieilles Vignes · Organic"
   },
   {
    "name": "Domaine Saint Antoine, Les Copains 2024",
    "meta": "Languedoc · AOP Minervois · Red · 2024 · Grenache, Carignan · Organic"
   },
   {
    "name": "Domaine Saint Antoine, Intuition 2019",
    "meta": "Languedoc · AOP Minervois · Red · 2019 · Syrah, Grenache, Carignan · Concours Mondial de Bruxelles Gold, Vinalises Internationales Gold · Organic conversion"
   },
   {
    "name": "Domaine Saint Antoine, Révélation 2019",
    "meta": "Languedoc · AOP Minervois · Red · 2019 · Syrah, Grenache · Concours Mondial de Bruxelles Gold, Vinalises Internationales Gold · Organic conversion"
   }
  ]
 },
 {
  "id": "domaine-yannick-amirault",
  "name": "Domaine Yannick Amirault",
  "region": "LOIRE VALLEY",
  "table": "TBC",
  "type": "Wine Estate",
  "size": "19,5 ha",
  "production": "90 000 bottles",
  "exportShare": "35%",
  "exportMarkets": "Denmark, Belgium, England, Netherlands, Canada, Switzerland, Singapore, Sweden…",
  "website": "https://www.yannickamirault.fr",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/10184/",
  "descEn": "Created in 1936 by Eugène AMIRAULT, the estate is located on the right bank of the Loire, the preferred limestone soil of Cabernet Franc. Taken over in 1977 by his grandson, Yannick AMIRAULT, it has constantly evolved to defend an organic and perfectionist attitude to winegrowing. Today, it is the great-grandson, Benoit AMIRAULT who cultivates ten crus spread over the villages of Bourgueil and Saint-Nicolas-de-Bourgueil. Each terroir is gardened according to the lunar cycle, hand-picked and then individually matured for up to 30 months in barrels or amphorae.",
  "wines": [
   {
    "name": "Domaine Y. Amirault Cuvée « Cote 50 » 2025",
    "meta": "Loire Valley · AOP Bourgueil · Red · 2025 · Cabernet Franc · Organic"
   },
   {
    "name": "Domaine Y. Amirault Cuvée « Rosé d'Équinoxe » 2025",
    "meta": "Loire Valley · AOP Bourgueil · Rosé · 2025 · Cabernet Franc · Organic"
   },
   {
    "name": "Domaine Y. Amirault Cuvée « Les Quartiers » 2023",
    "meta": "Loire Valley · AOP Bourgueil · Red · 2023 · Cabernet Franc · Organic"
   },
   {
    "name": "Domaine Y. Amirault Cuvée « Le Grand Clos » 2023",
    "meta": "Loire Valley · AOP Bourgueil · Red · 2023 · Cabernet Franc · Organic"
   },
   {
    "name": "Domaine Y. Amirault Cuvée « La Source » 2025",
    "meta": "Loire Valley · AOP Saint-Nicolas-de-Bourgueil · Red · 2025 · Cabernet Franc · Organic"
   },
   {
    "name": "Domaine Y. Amirault Cuvée « La Mine » 2025",
    "meta": "Loire Valley · AOP Saint-Nicolas-de-Bourgueil · Red · 2025 · Cabernet Franc · Organic"
   }
  ]
 },
 {
  "id": "eurovins",
  "name": "Eurovins",
  "region": "MULTI-REGIONS",
  "table": "TBC",
  "type": "Wine & Spirits Merchant-Bottler",
  "size": "",
  "production": "3 500 000 bottles",
  "exportShare": "95%",
  "exportMarkets": "Eastern Europe, Africa, Japan, Asia",
  "website": "https://www.eurovins.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/2360/",
  "descEn": "Located in the heart of Bordeaux, Eurovins is a family business with two major activities: traditional negoce/trading and producer.\nSince 1986, Eurovins has very quickly become an important partner in wine sales to national distributors, and has been developing its export business since 1994.\nSpecialized in Bordeaux wines, we also offer a wide range of other regions (Languedoc, Côtes du Rhône, St Emilion...) as well as our selection of spirits.\nFlexibility, export experience, listening and efficiency: Eurovins also supports you in creating your own brand so that you can stand out in your own market.",
  "wines": [
   {
    "name": "Clos de Pavillion 2021",
    "meta": "Bordeaux · AOC Saint-Emilion Grand Cru · Red · 2021 · Merlot, Cabernet Franc · Conventional"
   },
   {
    "name": "Maison des Vins Côtes des Gascogne 2025",
    "meta": "South West · IGP Gascogne · White · 2025 · Colombard · Conventional"
   },
   {
    "name": "Maison des Vins AOP Muscadet Sèvre et Maine 2025",
    "meta": "Loire Valley · AOC Muscadet Sèvre et Maine · White · 2025 · Muscadet · Conventional"
   },
   {
    "name": "Maisons des Vins AOP Corbières 2023",
    "meta": "Languedoc · AOC Corbières · Red · 2023 · Grenache, Syrah, Carignan · Conventional"
   },
   {
    "name": "Domainde Guigue AOP Côtes du Rhône 2023",
    "meta": "Rône Valley · AOC Côtes du Rhône · Red · 2023 · Grenache, Syrah · Conventional"
   },
   {
    "name": "Roi d'Etoile Pinot Noir",
    "meta": "Languedoc · VDF Vin de France · Red · Pinot Noir · Conventional"
   },
   {
    "name": "Champagne François Tonnel Brut",
    "meta": "Champagne · AOC Champagne · White · Chardonnay, Pinot Meunier, Pinot Noir · Conventional"
   },
   {
    "name": "Marquis Delaforet",
    "meta": "VDF French Sparkling · White · Airen · Conventional"
   },
   {
    "name": "Château L'Ecrin de Couley AOP Medoc 2022",
    "meta": "Bordeaux · AOC Medoc · Red · 2022 · Cabernet Sauvignon, Merlot · Conventional"
   }
  ]
 },
 {
  "id": "fournier-pere-et-fils",
  "name": "Fournier Père et Fils",
  "region": "LOIRE VALLEY",
  "table": "TBC",
  "type": "Estate Grower-Producer",
  "size": "39 ha",
  "production": "700 000 bottles",
  "exportShare": "80%",
  "exportMarkets": "USA, UK, Netherlands, Belgium, Switzerland, Denmark, Germany, South Korea, Australia, China, Thailand, Malaysia, Vietnam, Singapore",
  "website": "https://www.fournier-pere-fils.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/2383/",
  "descEn": "Selected consecutively as a Top 100 Winery in 2021 and 2022, Fournier Père et Fils is a pioneering Sancerre producer who contributed to bringing Sancerre to prominence across the French gastronomic scene and international markets.\n\nThe story of Fournier Père et Fils began in 1926 when the Fournier family started cultivating a modest 0.2-hectare plot of vines. Across three generations of unceasing dedication, the family created the Fournier legend in Verdigny, a celebrated winemaking village in Sancerre. Through their persistent efforts and vision, they successfully expanded the winery's global reach, exporting wines to over 65 countries by the 2000s. Today, as the winery celebrates its 100th anniversary in 2026, it stands proud of a century-long winemaking heritage built on passion and expertise.\n\nSince its foundation, Fournier Père et Fils has grown into a benchmark name of Sancerre encompassing 39 hectares of vineyards located in iconic appellations throughout the Centre-Loire region—the prestigious home of world-class Sauvignon Blanc and Pinot Noir, including AOP Sancerre, AOP Pouilly-Fumé, and AOP Menetou-Salon.",
  "wines": [
   {
    "name": "Fournier Père & Fils AOP Sancerre Blanc 'Les Monts Damnés'",
    "meta": "Loire Valley · AOP Sancerre · White · 2022 · Sauvignon Blanc · 94 pt Wine Enthusiast, 92 pt Wine & Spirits, 91 pt Wine Spectator, 92 pt Loire Buyer's Selection, 1 Star Guide Hachette · Sustainable"
   },
   {
    "name": "Fournier Père & Fils AOP Sancerre Blanc 'Silex'",
    "meta": "Loire Valley · AOP Sancerre · White · 2025 · Sauvignon Blanc · 92 pt James Suckling, Gold Concours Elle à Table, 1 Star Guide Hachette, 90 pt Wine Spectator, 90 pt Loire Buyer's Selection · Sustainable"
   },
   {
    "name": "Fournier Père & Fils AOP Sancerre Rouge ‘Terres Blanches’",
    "meta": "Loire Valley · AOP Sancerre · Red · 2023 · Pinot Noir · Sustainable"
   },
   {
    "name": "Fournier Père & Fils AOP Pouilly-Fumé ‘Village de Saint-Andelain’",
    "meta": "Loire Valley · AOP Pouilly-Fumé · White · 2025 · Sauvignon Blanc · Gold Concours Elles à Table · Sustainable"
   },
   {
    "name": "Fournier Père & Fils AOP Sancerre Rouge ‘Village de Sancerre’",
    "meta": "Loire Valley · AOP Sancerre · Red · 2025 · Pinot Noir · Sustainable"
   },
   {
    "name": "Fournier Père & Fils AOP Sancerre Blanc ‘Les Belles Vignes’",
    "meta": "Loire Valley · AOP Sancerre · White · 2025 · Sauvignon Blanc · 93 pt Loire Buyer's selection, 92 pt James Suckling, 92 pt Falstaff, 91 pt Decanter, 90 pt Wine Enthusiast, Gold Concours Elles à Table, Gold Terres de Vins, 1 star Guide Hachette, Bronze Bettane & Desseauve · Sustainable"
   },
   {
    "name": "Fournier Père & Fils AOP Sancerre Rouge ‘Les Belles Vignes’",
    "meta": "Loire Valley · AOP Sancerre · Red · 2023 · Pinot Noir · 92pt James Suckling, 87pt Wine Enthusiast, 92pt James Suckling, 91pt Wine Enthusiast, 92pt James Suckling · Sustainable"
   },
   {
    "name": "Fournier Père & Fils AOP Pouilly-Fumé ‘Les Deux Cailloux’",
    "meta": "Loire Valley · AOP Pouilly-Fumé · White · 2025 · Sauvignon Blanc · 94 pt Falstaff, 93 pt James Suckling, 90 pt Wine Spectator, Gold Concours des Vins Elles à Table, Silver Bettane & Desseauve, Silver Concours Mondial du Sauvignon · Sustainable"
   },
   {
    "name": "Fournier Père & Fils IGP Loire Valley Sauvignon Blanc ‘MMM’",
    "meta": "Loire Valley · IGP Loire Valley · White · 2025 · Sauvignon Blanc · 91 pt James Suckling, Gold Concours Mondial de Bruxelles · Sustainable"
   },
   {
    "name": "Fournier Père & Fils Pinot Noir France ‘F. de Fournier’",
    "meta": "Loire Valley · VDF Vin de France · Red · 2025 · Pinot Noir · 92 pt Best Buy Wine & Spirits, 91 pt Wine & Spirits, 90 pt James Suckling, Gold Anivin de France, Gold Concours Mondial de Bruxelles · Sustainable"
   }
  ]
 },
 {
  "id": "hesiode",
  "name": "Hesiode",
  "region": "MULTI-REGIONS",
  "table": "TBC",
  "type": "French Wine Exporter",
  "size": "",
  "production": "",
  "exportShare": "100%",
  "exportMarkets": "Japan",
  "website": "https://www.hesiode.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/3907/",
  "descEn": "Hesiode is a company based in France exporting French wines, ciders and spirits for over 30 years.\nAs an ambassador for French wines, Hesiode offers a wide range of products with red, white, rosé and sparkling wines, as well as wines from different organic and eco-responsible labels from all the wine regions of France. This approach is part of the desire to constantly search for new talents and gems of viticulture.\nAlready partner with numerous independent winegrowers and cooperative wineries throughout France, Hesiode's core business is above all to represent French winegrowers internationally with 2 main missions:\n- Carry out export projects of winegrowers and cooperative wineries.\n- Respond to the specific requests and needs of international importers and distributors.\nThanks to its knowledge of the production circuit, Hesiode also responds to specific requests for private and exclusive brands, by developing custom labeling if necessary.\nHesiode's expertise is to adapt and respond to the specific needs of its importing customers and to ensure personalized and committed follow-up for a long-term relationship with trust. With Hesiode, communication is centralized: a single contact, a single invoice, regardless of the number of pick up places.\nThe strength of Hesiode is not only its catalog composed of a wide range of products, but also the responsiveness and efficiency demonstrated by the team, to always better meet the needs of its customers and partners winegrowers.",
  "wines": [
   {
    "name": "AOC Touraine Sauvignon Angle Droit Domaine Delobel",
    "meta": "Loire Valley · AOC Touraine Sauvignon · White · 2024 · Sauvignon · Organic"
   },
   {
    "name": "AOC Touraine Oisly L'Ellipse Domaine Delobel",
    "meta": "Loire Valley · AOC Touraine Oisly · White · 2024 · Sauvignon · Organic"
   },
   {
    "name": "AOC Touraine Sauvignon Exponentielle Domaine Delobel",
    "meta": "Loire Valley · AOC Touraine Sauvignon · White · 2023 · Sauvignon · Organic"
   },
   {
    "name": "AOC Saumur Champigny Cuvée Traditionnelle Domaine Lavigne",
    "meta": "Loire Valley · AOC Saumur Champigny · Red · 2025 · Cabernet Franc · HVE"
   },
   {
    "name": "AOC Saumur Champigny La Chesnaie des Moulins Domaine Lavigne",
    "meta": "Loire Valley · AOC Saumur Champigny · Red · 2023 · Cabernet Franc · HVE"
   },
   {
    "name": "AOC Crémant de Loire Domaine Lavigne",
    "meta": "Loire Valley · AOC Crémant de Loire · White · NV · Chenin, Groslot, Cabernet Franc · HVE"
   },
   {
    "name": "AOC Champagne Appoggiature Domaine Girardin",
    "meta": "Champagne · AOC Champagne · White · 2021 · 60% Chardonnay, 30% Meunier, 10% Pinot Noir · HVE 3"
   },
   {
    "name": "AOC Champagne Vibrato \"Hors du Temps\" Domaine Girardin",
    "meta": "Champagne · AOC Champagne Blanc de Blancs · White · 2006 · Chardonnay · HVE3"
   },
   {
    "name": "AOC Bordeaux Red Château Les Massiots",
    "meta": "Bordeaux · AOC Bordeaux Rouge · Red · 2024 · 90% Merlot, 10% Cabernet Sauvignon"
   },
   {
    "name": "AOC Saint-Emilion Grand Cru Château Patris",
    "meta": "Bordeaux · AOC Saint-Emilion Grand Cru · Red · 2023 · Merlot Noir 75%, Cabernet Sauvignon 15%, Cabernet Franc 10%"
   }
  ]
 },
 {
  "id": "jean-baptiste-audy",
  "name": "Jean-Baptiste Audy",
  "region": "BORDEAUX",
  "table": "TBC",
  "type": "Wine Merchant",
  "size": "",
  "production": "",
  "exportShare": "",
  "exportMarkets": "Europe (Switzerland, Germany, UK, Belgium), USA, Japan",
  "website": "https://www.jbaudy.fr/en",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/2358/",
  "descEn": "Family company created in 1906 by Jean Baptiste Audy. It has become essential for the distribution of wines from the right bank with a selection of very high quality exclusives. In addition to distributing wines from family vineyards, which are regularly rated among the greatest successes of their appellations, JB AUDY is also a privileged player in the distribution of Bordeaux Grands Crus Classés.",
  "wines": [
   {
    "name": "Clos du Clocher",
    "meta": "Bordeaux · AOC Pomerol · Red · 2009 · Merlot 70%, Cabernet Franc 30% · Sustainable"
   },
   {
    "name": "Château Monregard La Croix",
    "meta": "Bordeaux · AOC Pomerol · Red · 2020 · Merlot 100% · Sustainable"
   },
   {
    "name": "Château Bonalgue",
    "meta": "Bordeaux · AOC Pomerol · Red · 2018 · Merlot 100% · Sustainable"
   },
   {
    "name": "Château Beauséjour de Bonalgue",
    "meta": "Bordeaux · AOC Pomerol · Red · 2020 · Merlot 100% · Sustainable"
   },
   {
    "name": "Château du Courlat Cuvée JB",
    "meta": "Bordeaux · AOC Lussac Saint-Émilion · Red · 2020 · Merlot 100% · Sustainable"
   },
   {
    "name": "Blanc de Noirs du Courlat",
    "meta": "Bordeaux · Vin de France · White · 2025 · Cabernet Franc 100% · Sustainable"
   },
   {
    "name": "Château Foncroze",
    "meta": "Bordeaux · AOC Bordeaux · Red · 2023 · Merlot 100% · Sustainable"
   },
   {
    "name": "Château La Croix Calendreau",
    "meta": "Bordeaux · AOC Saint-Émilion Grand Cru · Red · 2022 · Merlot 70%, Cabernet Franc (Bouchet) 15%, Cabernet 10%, Malbec 5% · Sustainable"
   },
   {
    "name": "Château Beauregard Ducasse Blanc",
    "meta": "Bordeaux · AOC Graves Blanc · White · 2025 · Sémillon 50%, Sauvignon 50% · Sustainable"
   },
   {
    "name": "Château Haut Pauillac",
    "meta": "Bordeaux · AOC Pauillac · Red · 2019 · Cabernet Sauvignon 60%, Merlot 40% · Sustainable"
   }
  ]
 },
 {
  "id": "les-domaines-montaud",
  "name": "Les Domaines Montaud",
  "region": "PROVENCE",
  "table": "TBC",
  "type": "Independent Winegrower",
  "size": "250 ha",
  "production": "500 000 bottles",
  "exportShare": "70%",
  "exportMarkets": "UK, USA, Europe",
  "website": "https://www.lesdomainesmontaud.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/7000/",
  "descEn": "At the heart of Provence, our family estate has been cultivating its vineyards with the same dedication and passion for generations. Every parcel is carefully tended with respect for its unique character, allowing the full richness of this exceptional terroir to shine through.\nSpread across 250 hectares, our vineyards benefit from a remarkable diversity of soils and exposures, giving our wines remarkable aromatic complexity, with delicate notes of fresh fruit, flowers, and subtle spices. Every one of our cuvées is produced exclusively from the Pierrefeu-Cuers terroir, widely regarded as one of the finest in the Côtes de Provence appellation.\nOur portfolio features 5 AOP Côtes de Provence rosés, each crafted to express a distinct facet of this unique terroir. Behind every wine lies meticulous work in both the vineyard and the winery, driven by a single ambition: to create elegant, balanced rosés that remain true to their origin while delivering the consistency and quality expected by wine professionals around the world.",
  "wines": [
   {
    "name": "Château Montaud L'Eclat",
    "meta": "Provence · AOP Côtes de Provence · Rosé · 2025 · Bronze Medal in Paris · Organic Conversion"
   },
   {
    "name": "Château Bel Esprit",
    "meta": "Provence · AOP Côtes de Provence · Rosé · 2025 · Gold Medal in Paris · Organic Conversion"
   },
   {
    "name": "Château Montaud Drs",
    "meta": "Provence · AOP Côtes de Provence · Rosé · 2025 · 90 Points Wine Enthusiast · Organic Conversion"
   },
   {
    "name": "Château Montaud Premium",
    "meta": "Provence · AOP Côtes de Provence · Rosé · 2025 · 91 Tasted by A. Larsson · Organic Conversion"
   },
   {
    "name": "Ikon",
    "meta": "Provence · AOP Côtes de Provence · Rosé · 2025 · Silver Medal Brussels Concours · Organic Conversion"
   }
  ]
 },
 {
  "id": "les-grappes",
  "name": "Les Grappes",
  "region": "MULTI-REGIONS",
  "table": "TBC",
  "type": "Wine Distributor / Wine Merchant",
  "size": "1200 ha",
  "production": "",
  "exportShare": "15%",
  "exportMarkets": "USA, Brazil, UK, Denmark, Japan",
  "website": "https://www.lesgrappes.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/6633/",
  "descEn": "Les Grappes Pro is the first platform for purchasing directly from winemakers, designed for professionals in the restaurant and Importation/distribution sectors.\nSince 2014, we have been simplifying procurement for professionals in France and abroad, thanks to sourcing from over 1,200 partner winemakers.\n\nDedicated experts, centralized delivery, and a wide range of wines available and mixable from our warehouse in Burgundy. We support each client in creating their wine list or shelf selection, analyzing performance, and optimizing revenue. This extends to team training, the design of technical sheets or point-of-sale materials, and in-store promotion.\n\nBecause we sell stories, not labels.\nLet’s drink VIGNERONS!",
  "wines": [
   {
    "name": "Maison Belmont Bourgogne Pinot Noir",
    "meta": "Bourgogne · AOC Bourgogne Rouge · Red · 2025 · Pinot Noir"
   },
   {
    "name": "Maison Belmont Bourgogne",
    "meta": "Bourgogne · AOC Bourgogne Blanc · White · 2025 · Chardonnay"
   },
   {
    "name": "Domaine Regis Fèvre Chablis",
    "meta": "Bourgogne · AOC Chablis · White · 2024"
   },
   {
    "name": "Domaine Regis Fèvre Chablis 1er Cru",
    "meta": "Bourgogne · AOC Chablis 1er Cru · White · 2023"
   },
   {
    "name": "Famille Guilhem Coup de Vin Rouge",
    "meta": "Languedoc · IGP Pays d'Oc · Red · 2025"
   },
   {
    "name": "Famille Guilhem Coup de Vin Blanc",
    "meta": "Languedoc · IGP Pays d'Oc · White · 2025"
   },
   {
    "name": "Champagne Charles Jolly Persévérance Brut",
    "meta": "Champagne · AOC Champagne Blanc Brut · White · NV"
   },
   {
    "name": "Champagne Velten Brut",
    "meta": "Champagne · AOC Champagne Blanc Brut · White · NV"
   },
   {
    "name": "Cave de Bissey Bourgogne Rouge Clos de Chenove",
    "meta": "Bourgogne · AOC Bourgogne Rouge · Red · 2024"
   },
   {
    "name": "Cave de Bissey Rully Blanc",
    "meta": "Bourgogne · AOC Rully · White · 2024"
   },
   {
    "name": "Jas Des Papes Châteauneuf-du-Pape",
    "meta": "Rhône Valley · AOC Châteauneuf-du-Pape Rouge · Red · 2024"
   },
   {
    "name": "Domaine du Pavillon Crozes-Hermitage",
    "meta": "Rhône Valley · AOC Crozes-Hermitage Rouge · Red · 2025"
   }
  ]
 },
 {
  "id": "mahler-besse",
  "name": "Mähler-Besse",
  "region": "BORDEAUX",
  "table": "TBC",
  "sharedWith": "Vinovalie",
  "type": "Wine Merchant",
  "size": "",
  "production": "",
  "exportShare": "70%",
  "exportMarkets": "60 countries",
  "website": "https://www.mahler-besse.com",
  "marketplace": "N/A",
  "descEn": "Founded in 1932 in Bordeaux, Mähler-Besse is a family-owned négociant house held by the Mähler-Besse and Casteja families (also shareholders of Borie-Manoux and De Luze, and owners of Château Batailley and Château Lynch Moussas). The company employs around twenty people and exports 70% of its volumes to 60 countries, with the remaining 30% sold in France.\nThe house's activity is organised around four complementary divisions. The first covers Mähler-Besse's own wines: owned estates (Château Cheval Noir, Château Picard, Château La Couronne, Alfa La Bernarde), proprietary brands (Cheval Noir, La Réserve Mähler-Besse) and exclusive distribution agreements (Château Feytit-Lagrave, Château Larrieu-Terrefort, Château Haut-Reys), together with wines from the Casteja family (Château Lynch Moussas, Château La Croix du Casse). The second division trades Bordeaux classified growths (available stock, en primeur, rare old vintages). The third offers a selection of prestigious wines from outside Bordeaux (Opus One, Almaviva, Masseto, Solaia, Sena, Quintessa, Petrolo, Hommage à Jacques Perrin, Aalto, among others). The fourth covers a range of French spirits (Glenfarclas, High Coast).",
  "wines": [
   {
    "name": "Cheval Noir Saint-Émilion 2023",
    "meta": "Bordeaux · AOC Saint-Émilion · Red · 2023 · Merlot, Cabernet Franc, Cabernet Sauvignon"
   },
   {
    "name": "Château Cheval Noir Saint-Émilion Grand Cru 2022",
    "meta": "Bordeaux · AOC Saint-Émilion Grand Cru · Red · 2022 · Merlot, Cabernet Franc, Cabernet Sauvignon"
   },
   {
    "name": "La Réserve Mähler-Besse Bordeaux Rouge 2023",
    "meta": "Bordeaux · AOC Bordeaux · Red · 2023 · Cabernet Sauvignon, Merlot"
   },
   {
    "name": "La Réserve Mähler-Besse Bordeaux Blanc 2025",
    "meta": "Bordeaux · AOC Bordeaux Blanc · White · 2025 · Sauvignon Blanc"
   },
   {
    "name": "Château Picard Saint-Estèphe 2021",
    "meta": "Bordeaux · AOC Saint-Estèphe Cru Bourgeois · Red · 2021 · Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot"
   },
   {
    "name": "Château La Couronne Saint-Émilion Grand Cru 2020",
    "meta": "Bordeaux · AOC Saint-Émilion Grand Cru · Red · 2020 · Merlot, Cabernet Franc"
   },
   {
    "name": "Château Larrieu-Terrefort Margaux 2021",
    "meta": "Bordeaux · AOC Margaux · Red · 2021 · Cabernet Sauvignon, Merlot, Petit Verdot"
   },
   {
    "name": "Château La Croix du Casse Pomerol 2023",
    "meta": "Bordeaux · AOC Pomerol · Red · 2023 · Merlot, Cabernet Franc"
   },
   {
    "name": "Château Feytit-Lagrave Pomerol 2020",
    "meta": "Bordeaux · AOC Pomerol · Red · 2020 · Merlot, Cabernet Franc"
   },
   {
    "name": "Les Hauts de Lynch-Moussas Haut-Médoc 2019",
    "meta": "Bordeaux · AOC Haut-Médoc · Red · 2019 · Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot"
   },
   {
    "name": "Château Lynch Moussas Pauillac 2018",
    "meta": "Bordeaux · AOC Pauillac 5ème Grand Cru Classé 1855 · Red · 2018 · Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot"
   }
  ]
 },
 {
  "id": "maison-tanase",
  "name": "Maison Tanase",
  "region": "MULTI-REGIONS",
  "table": "TBC",
  "type": "Wine Merchant",
  "size": "",
  "production": "",
  "exportShare": "90%",
  "exportMarkets": "Denmark, Finland, Romania, Turkey, Israel, Germany",
  "website": "https://www.maisontanase.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/4701/",
  "descEn": "Based in Bordeaux, France, Maison Tanase is a family-owned wine company with origins dating back to 1986. Our business has been built around two fundamental principles: a constant search for quality & authenticity, and a genuine commitment to our clients -partners.\n                                                                                                               We work with wines that reflect the diversity and richness of French wine culture, from prestigious Bordeaux and Burgundy to Champagne, Loire and other recognised French appellations.\n                                                                                                               Our role goes beyond simply supplying wine. We believe that successful international business is built step by step, through reliability, transparency, responsiveness and mutual understanding. For this reason, we take the time to understand our partners’ markets, positioning and customers, and to develop selections that are relevant to their specific needs.\nMaison Tanase has experience across several distribution channels, including e-commerce, retail, wholesale, on-trade and direct sales. This broad experience gives us a practical understanding of the different expectations of wine professionals and enables us to approach each project with flexibility.\nWe also have specific know-how in developing customised wine, Champagne and spirits projects. From selecting the appropriate wine to developing a private-label range, our team can support professional clients throughout the process, with flexible quantities and a direct, responsive approach.\nFor Maison Tanase, entering a new market is not about looking for short-term opportunities. We are interested in meeting importers and distributors who share our vision and with whom we can develop a relationship over time.\nJapan, South Korea and Taiwan are markets where attention to detail, product quality, consistency and professional relationships are particularly important.    We therefore approach these markets with humility, curiosity and a willingness to listen and learn from local partners.\nOur objective is simple: to become a reliable French wine partner for importers looking for authentic products, carefully selected wines and a responsive supplier who is committed to building business together over the long term.\nWe look forward to meeting wine professionals who share this approach and exploring how Maison Tanase can contribute to the development of their wine portfolio.\nMaison Tanase — Bordeaux,France => Quality, authenticity and long-term partnership.",
  "wines": [
   {
    "name": "Domaine de L'Epineau, AOP Pouilly Fumé 2025",
    "meta": "Loire Valley · AOP Pouilly Fumé · White · 2025 · 100% Sauvignon · Sustainable"
   },
   {
    "name": "Domaine de L'Epineau, AOP Coteaux du Giennois 2025",
    "meta": "Loire Valley · AOP Coteaux du Giennois · White · 2025 · 100% Sauvignon · Sustainable"
   },
   {
    "name": "Domaine de la Chaise, AOP Touraine Sauvignon 2025",
    "meta": "Loire Valley · AOP Touraine · White · 2025 · 100% Sauvignon · Gold Medal Awarded, Selected Guide Hachette · Sustainable"
   },
   {
    "name": "Domaine Lesimple, AOP Sancerre Blanc 2025",
    "meta": "Loire Valley · AOP Sancerre Blanc · White · 2025 · 100% Sauvignon · Sustainable"
   },
   {
    "name": "Domaine du Moulin Berger, AOP Pouilly Fuissé 2023",
    "meta": "Bourgogne · AOP Pouilly Fuissé · White · 2023 · 100% Chardonnay ( Sustainable"
   },
   {
    "name": "Château Petit Faurie Quet, AOP Saint Emilion Grand Cru 2021",
    "meta": "Bordeaux · AOP Saint-Emilion Grand Cru · Red · 2021 · Merlot & Cabernet Sauvignon · Sustainable"
   },
   {
    "name": "Domaine du Moulin Berger, AOP Macon Loché 2024",
    "meta": "Bourgogne · AOP Macon-Loché · White · 2024 · 100% Chardonnay · Sustainable"
   },
   {
    "name": "Domaine Verret, AOP Bourgogne Cotes d'Auxerre 2025",
    "meta": "Bourgogne · AOP · Bourgogne Cotes d'Auxerre · Red · 2025 · 100% Pinot Noir · Sustainable"
   },
   {
    "name": "Château Franc Maillet, AOP Pomerol 2020",
    "meta": "Bordeaux · AOP Pomerol · Red · 2022 · 80% Merlot, 20% Cabernet Sauvignon · Sustainable"
   },
   {
    "name": "Domaine de la Chaise \"Originelle, AOP Touraine Rouge, Cot (Malbec) 2023",
    "meta": "Loire Valley · AOP Touraine Rouge · Red · 2023 · 100% Malbec · Gold Medal Awarded · Sustainable"
   }
  ]
 },
 {
  "id": "tutiac",
  "name": "Tutiac",
  "region": "BORDEAUX",
  "table": "TBC",
  "type": "Cooperative Winery",
  "size": "4500 ha",
  "production": "20 000 000 bottles",
  "exportShare": "40%",
  "exportMarkets": "UK, Japan, Czech Republic, Netherlands, Ireland, Vietnam",
  "website": "https://www.tutiac.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/3987/",
  "descEn": "For nearly 50 years, Tutiac has brought together 400 winegrowers and their families around the same ambition: to bring the richness and diversity of the Bordeaux vineyard to life.\nWith 4,000 hectares of vines spread over many of Bordeaux's emblematic terroirs and appellations, Tutiac offers a wide range of wines, from everyday to special occasions. Our cooperative model is based on the strength of the collective, the sharing of know-how and the attachment to our terroirs. Because the future of viticulture is being built today, we are also committed to a concrete environmental approach. 70% of our vineyard is certified High Environmental Value and 550 hectares are managed organically or in conversion.\n Tutiac is above all a human story: that of winemakers who move forward together, between tradition, innovation and commitment, to discover authentic and accessible wines.",
  "wines": [
   {
    "name": "La Cuvée des Drôles",
    "meta": "Aquitaine · IGP Atlantique · Red · 2024 · Merlot, Cabernet Sauvignon, Cabernet Franc, Malbec · Gold Medal CGA · Sustainable"
   },
   {
    "name": "Cournoble Merlot",
    "meta": "Bordeaux · AOP Bordeaux · Red · 2024 · Merlot · Gold Paris, Gold Coutras, Gold 70M Dégustateurs · Sustainable"
   },
   {
    "name": "Cournoble Sauvignon Blanc",
    "meta": "Bordeaux · AOP Bordeaux · White · 2025 · Sauvignon Blanc · Gold Lyon, Gold 70M Dégustateurs · Sustainable"
   },
   {
    "name": "Lion & The Lily Claret",
    "meta": "Bordeaux · AOP Bordeaux Claret · Red · 2025 · Merlot · Sustainable"
   },
   {
    "name": "Tertre de Bayard",
    "meta": "Bordeaux · AOP Bordeaux · Red · 2022 · Merlot · 70M Or · Sustainable"
   },
   {
    "name": "Grain de Douceur Semi Sweet",
    "meta": "Bordeaux · AOP Bordeaux · White · 2024 · Sauvignon Blanc · Sustainable"
   },
   {
    "name": "Origines Six Chemins",
    "meta": "Bordeaux · AOP Blaye · Red · 2023 · Cabernet Sauvignon · 4,1 Vivino · Sustainable"
   },
   {
    "name": "Origines Fond Renard",
    "meta": "Bordeaux · AOP Blaye · White · 2023 · Sauvignon Blanc · 4,3 Vivino · Sustainable"
   }
  ]
 },
 {
  "id": "union-des-caves-du-medoc",
  "name": "Union des Caves du Médoc",
  "region": "BORDEAUX",
  "table": "TBC",
  "type": "Union of Cooperatives",
  "size": "350 ha",
  "production": "2 500 000 bottles",
  "exportShare": "50%",
  "exportMarkets": "Belgium, Canada, Japan, USA, China",
  "website": "https://www.medoc-export.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/2530/",
  "descEn": "UCM is an alliance of Bordeaux wine producers founded 22 years ago. The range is composed by 20 appellations, PGI and VDF wines in red, white, rosé and sweet varieties, spanning mid-range and premium categories. Options include mixed pallets, special labels, customisation and exclusive products. UCM is characterised by its flexibility and responsiveness.",
  "wines": [
   {
    "name": "Château Le Cassanet \"Quintessence\"",
    "meta": "Bordeaux · AOC Haut-Médoc · Red · 2023 · Merlot, Cabernet Sauvignon · Silver Medal Brussels · Sustainable"
   },
   {
    "name": "Prieuré d'Albe",
    "meta": "Bordeaux · AOC Saint-Estèphe · Red · 2023 · Merlot, Cabernet Sauvignon · Gold Medal Paris, Gold Medal Bordeaux · Sustainable"
   },
   {
    "name": "Grand Listrac",
    "meta": "Bordeaux · AOC Listrac-Médoc · Red · 2022 · Merlot, Cabernet Sauvignon · Gold Medal Paris, 2stars Hachette Guide · Sustainable"
   },
   {
    "name": "Château Vieux Moulin",
    "meta": "Bordeaux · AOC Listrac-Médoc Cru Bourgeois · Red · 2020 · Merlot, Cabernet Sauvignon, Petit Verdot · 91 James Suckling, Silver Paris, Silver Brussels · Sustainable"
   },
   {
    "name": "Château Haut de la Bécade",
    "meta": "Bordeaux · AOC Pauillac · Red · 2019 · Merlot, Cabernet Sauvignon, Petit Verdot · Gold Medal Féminalise · Conventional"
   },
   {
    "name": "Château Guitignan",
    "meta": "Bordeaux · AOC Moulis Cru Bourgeois · Red · 2019 · Merlot, Cabernet Sauvignon, Petit Verdot · Silver Paris, 91 Wine Enthusiast, 2stars Hachette Guide · Sustainable"
   },
   {
    "name": "Château Guitignan",
    "meta": "Bordeaux · AOC Moulis Cru Bourgeois · Red · 2019 · Merlot, Cabernet Sauvignon, Petit Verdot · Silver Paris, 91 Wine Enthusiast, 2stars Hachette Guide · Sustainable"
   },
   {
    "name": "Closerie de Peylaby",
    "meta": "Bordeaux · AOC Médoc · Red · 2022 · Merlot, Cabernet Sauvignon · Sustainable"
   },
   {
    "name": "Château Le Bruilleau",
    "meta": "Bordeaux · AOC Pessac-Léognan · White · 2023 · Sauvignon, Sémillon · Sustainable"
   },
   {
    "name": "Blanc Pirate",
    "meta": "Bordeaux · Vin de France · White · 2025 · Merlot · Sustainable"
   }
  ]
 },
 {
  "id": "vinovalie",
  "name": "Vinovalie",
  "region": "SOUTH WEST",
  "table": "TBC",
  "sharedWith": "Mähler-Besse",
  "type": "Cooperative",
  "size": "3 758 ha",
  "production": "~230 000 hL/year",
  "exportShare": "25%",
  "exportMarkets": "Japan, UK, Netherlands, Belgium, Brazil, Denmark, China, Russia, USA",
  "website": "https://www.vinovalie.com",
  "marketplace": "https://www.marketplace.businessfrance.fr/seller/view/index/id/2599/",
  "descEn": "VINOVALIE is a union of cooperative wineries from South-West France, formed by 5 historic cellars across 3 iconic terroirs: Cahors (Malbec AOP), Fronton (Négrette AOP) and Gaillac (8 grape varieties including Braucol, Duras and Mauzac). The group brings together 354 winegrowers, 3,758 hectares of vineyards and 23 châteaux and estates, producing around 230,000 hl of red, rosé and white wines per year (AOP, IGP, VSIG). Strongly committed to sustainability (88% of the vineyard HVE3 certified, 889 ha farmed organically, ISO 22000 and FSSC 22000 certifications), Vinovalie won 87 medals in 2025 (48 gold, 33 silver, 3 bronze) at major French wine competitions. The group generates about EUR 50 million in turnover, 25% of which from exports, with an established presence in Japan, the UK, the Netherlands, Belgium, Brazil, Denmark, China, Russia and the USA. Headquartered in Saint-Sulpice-la-Pointe (20 minutes north of Toulouse), in modern, green-energy-powered premises. Group brands include Tarani, Gamay Le Traditionnel, Rosé Piscine, Apesanteur, Pause Bulles and Démon Noir.",
  "wines": [
   {
    "name": "L'Original",
    "meta": "South West · AOP Gaillac Perlé Blanc Sec · White"
   },
   {
    "name": "Les Galets d'Olt",
    "meta": "South West · AOP Cahors · Red · Malbec 100%"
   },
   {
    "name": "Pause Bulle",
    "meta": "South West · IGP Comté Tolosan · White"
   },
   {
    "name": "Le Loin de l'Œil",
    "meta": "South West · AOP Gaillac Blanc Sec · White · Loin de l'Œil"
   }
  ]
 }
];
