<h2>Inversion de contrôle et Injection des dépendances</h2>
<p>Partie 1 :</p>
<p>
1. Créer l'interface IDao avec une méthode getDate
2. Créer une implémentation de cette interface 
3. Créer l'interface IMetier avec une méthode calcul
4. Créer une implémentation de cette interface en utilisant le couplage faible
5. Faire l'injection des dépendances :
  a. Par instanciation statique:
</p>
<img src="captures/static.png"></img>
<img src="captures/resultStatic.png"></img>
<p>
b. Par instanciation dynamique:
</p>
<img src="captures/dynamique.png"></img>
<img src="captures/resultDynamique2.png"></img>
<p>
c. En utilisant le Framework Spring
       - Version XML
       - Version annotations
</p>
<img src="captures/annotatio1.png"></img>
<img src="captures/annotation2.png"></img>
<h3>Diagramme des Classes</h3>
<img src="captures/diagrame.png"></img>

