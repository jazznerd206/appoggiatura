# APPOGIATURA

![this thing](https://i1.wp.com/www.harmony.org.uk/book/voice_leading/chromatic_appogg.gif?resize=487%2C203)

Appoggiatura, (from Italian appoggiare, “to lean”), in music, an ornamental note of long or short duration that temporarily displaces, and subsequently resolves into, a main note, usually by stepwise motion. During the Renaissance and early Baroque, the appoggiatura was of moderate length, averaging one-third of the main note, and was more in the nature of a melodic than a harmonic ornament. By the time of Johann Sebastian Bach (1685–1750), appoggiaturas were divided into two species: the short, which borrows an inconsiderable length from its main note and therefore has little effect on the harmony; and the long, which takes half or more of the length of its main note and therefore substantially affects the harmony, creating a dissonance that then resolves, on the main note, to a consonance. Because its purpose was mainly expressive, whether in purely melodic or harmonic terms, the typical appoggiatura in 17th- and 18th-century music occurred on the beat, rather than before it, “leaning” on the principal note, as suggested by the term’s derivation.

## Directory strucuture:
> Public directory ->
* index.html
    * drop in any/all cdn tags, links to css files, external script tags
> Src directory -> 
* components
    * page level components for mock up structure, login, sliding window, and footer
    * KANBAN: create styled component file for export of App-level component library
* context
    * app.context provides context object for app level state maintainence
    * reducer provides an UPDATE method to create new state object
* utils
    * API.auth provides a naive authentication protocol leveraging localStorage
    * hook.scrollHeight provides an object ->
        * { currentX, currentY, scrollDirection }
* App/index.tsx/css
    * basic files for generating react based browser templates

## Use cases:
1. Multiple build tests -> ```npm run build && npm run local```
    * ```npm run build ``` executes webpack.config on the root directory
    * ```npm run local``` leverages light-server (link at bottom)
    * hosts entire repository at localhost:4000
    * build selection is dependent upon structure of ./dist
    * webpack currently builds one version, but could be changed to store multiple, accessible via ./public/index.html of each build inside ./dist
2. Single production build test -> ```npm run build && npm run start ```
    *  ```npm run build ``` executes webpack.config on the root directory
    * ```npm run start``` runs a hot reload webpack development server with the MOST CURRENT build at 0.0.0.0:3000
    * runs single build with hot reload
3. Dockerized container build -> ```npm run docker:buildit && npm run docker:sendit```
    * ```npm run docker:buildit``` builds docker image from Dockerfile in root directory
    * ```npm run docker:sendit``` builds and runs a docker container, available at localhost:3000
    * runs single production build, no hot reload, true production test
    <!-- * AVAILABLE TO BROWSER UNTIL PURGED FROM LOCAL DOCKER REPOSITORY >>>>>>>>> ```npm run docker:killit && npm run docker:prune``` -->
4. Naive deployment, gh-pages -> ```npm deploy```
    * basic production level build test