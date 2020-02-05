## Menú Nodes


Aquest script mostra el primer nivell del menú principal en els portals Nodes de centre, d'una manera similar
a com es fa amb els de Serveis Educatius.

Els submenus es despleguen en passar el ratolí per damunt dels elements de menú, o en tocar-los quan es tracta
de dispositius tàctils. El botó __☰__ segueix mostrant el menú complet.

### Instal·lació
Per utilitzar-lo al vostre lloc Nodes cal seguir els passos següents:

- Entreu amb el rol d'usuari __administrador__ i aneu a __Tauler__ > __Aparença__ > __Ginys__

- Busqueu a _Ginys disponibles_ el giny de tipus __HTML personalitzat__ i creeu-ne un de nou. Podeu ubicar el giny a dos llocs:
  - Escolliu _Portada (Barra esquerra)_ si voleu mostrar el menú desplegat només a la portada (opció recomanada).
  - Escolliu _Peu_ si voleu que el menú desplegat aparegui a totes les pàgines del lloc.

- Feu clic a __Afegeix un giny__

- Busqueu la caixa d'edició del giny (que haurà quedat més amunt) i copieu-hi aquest contingut:
```html
<script src="https://clic.xtec.cat/dist/agora/menu-nodes.js"></script>
```

- Deixeu el _Títol_ en blanc i feu clic a __Desa__

A partir d'aquí, quan carregueu la pàgina principal del lloc ja us hauria d'aparèixer el menú desplegat.

### Feedback
Si observeu qualsevol error o mal funcionament, o si voleu proposar alguna idea, expliqueu-ho al [fòrum de suport d'Àgora-Nodes](https://agora.xtec.cat/moodle/moodle/mod/forum/view.php?id=1721) o bé [reporteu una incidència](https://github.com/projectestac/agora-hacks/issues) a GitHub.

El codi font de l'script es troba disponible al repositori [Àgora-Hacks](https://github.com/projectestac/agora-hacks) de GitHub. És programari lliure i, si teniu coneixements de JavaScript, podeu adaptar-lo al vostre gust. També podeu proposar millores al codi fent-nos un _pull request_.

### Ús avançat
Just davant de l'etiqueta "script" que carrega el codi podeu afegir-hi un altre script on es defineixi un objecte anomenat `NODES_MENU_SETTINGS`. Aquest objecte permet ajustar determinades varuables de funcionament de l'script.

