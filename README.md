<div align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/fireshipcourse-33fb9.appspot.com/o/Frame%201.png?alt=media&token=e2c299c3-f626-4306-9b83-82ac1faac63c" />
</div>

# Description du projet Sinking Seek ⛴

Bonne matinée à vous, nous sommes conscients que nous sommes le 47ème groupe que vous regardez, donc on va essayer de faire court !

Voici tout d'abord le lien du site : https://nervous-brown-bbf51e.netlify.app/

Nous avons réussi à relever le défi de la nuit de l'info en rendant une application permettant :
- une recherche de naufrages ultra rapide 🔎
- la possibilité d'ajouter un naufragé non existant et de contacter les surfers de Dunkerque 
- un dark-mode 🌙(pour éviter de piquer les yeux)
- une architecture conçue pour être la plus écolo possible ! 🍃

Nous avons choisi une architecture en JAM stack (Javascript, API, Markup) avec :
- le front-end : codé à l'aide du framework SvelteKit, qui est l'équivalent de Next.js pour le framework Svelte, mais avec des rendus SSR.
    lien du repo : 
- l'api : codée avec le framework Strapi, qui est un headless CMS très orienté dev. Nous y stockons les utilisateurs ainsi que les données sur les naufrages.
    lien du repo :

Nous avons utilisé la base de donnée texte Algolia pour effectuer des recherches super rapides et qui se mettent à jour à chaque nouvelle lettre tapée. Pour le framework CSS nous avons utilisé TailwindCSS (qui d'autre franchement ?).

## Impact écologique

Tous nos choix ont été faits pour réduire au maximum l'impact : 
- La charge par le serveur à été réduite au maximum étant donné que le JAM stack n'est constitué que de sites statiques
- Algolia est une entreprise qui a réussi à atteindre la neutralité carbone, la recherche n'est donc pas polluante
- Svelte est l'un des frameworks les plus légers et économes en lignes de code

## Faire fonctionner le projet

Seul NodeJs est requis pour faire fonctionner le projet corectement.
Création d'un dossier qui contiendra l'API et le client :
```bash
mkdir sinkingseek && cd sinkingseek
```

### Le client :

Attention ! Les urls de l'API n'ont pas été modifiée et pointent directment vers la production. Pour tester l'API, il faudra remplacer https://arcane-bayou-36652.herokuapp.com par http://localhost:1337. (ligne 9 dans contact.svelte et ligne 8 dans slug.svelte).
```bash
# clonage du repo
git clone https://github.com/LookingForInternship/API.git

cd API
npm install
nmp run develop
```
### L'API :

```bash
# clonage du repo
git clone https://github.com/LookingForInternship/Client.git

cd Client
npm install
nmp run dev
```
Il suffit de créer un compte admin à http://localhost:1337/admin pour avoir accès au données.
Les données sont propres au serveurs et devront donc être ré-écrites pour l'environnement de développement. 

## Plus d'infos :

- Qu'est-ce que le JAM stack ? https://jamstatic.fr/2019/02/07/c-est-quoi-la-jamstack/
- Qu'est-ce que SvelteKit ? https://kit.svelte.dev/
- Qu'est-ce que Strapi ? https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
- Qu'est-ce que Algolia ? https://www.algolia.com/doc/

## Contact

- Quentin Chaignaud : quentinchaignaudpro@gmail.com
- Paul Bourmaud : paulbourmaudpro@gmail.com
