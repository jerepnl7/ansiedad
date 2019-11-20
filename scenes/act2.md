# act2

`SceneSetup.act2();`

{{if _.badnews && !_.factcheck}}
(#act2-preamble-news1)
{{/if}}

{{if _.badnews && _.factcheck}}
(#act2-preamble-news2)
{{/if}}

{{if _.catmilk}}
(#act2-preamble-cat)
{{/if}}

(#act2-preamble-tinder)


# act2-preamble-news1

```
publish("act2",["dee",3]);
```

s: ¿Pero has *visto* esa "noticia" sobre aquello tan horrible que pasó nosedónde?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: ho-hola...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Dios, odio las noticias. No son más que sensacionalismo barato.

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: q... qué buena fiesta...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Sí, pero no es culpa de los reporteros. El *verdadero* problema es la gente que pica en ese sensacionalismo.

```
publish("act2",["dee",3]);
```

s: ¿Quién retuitearía una noticia horrible para hacer que todos sus amigos se sientan mal?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Uf, ¿verdad?

(#act2-preamble-end)


# act2-preamble-news2

```
publish("act2",["dee",3]);
```

s: ¿Pero has *visto* esa "noticia" que se ha vuelto tan viral?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: ho-hola...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Sí, falsísima. ¿Quién se creería algo así y lo retuitearía?

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: q... qué buena fiesta...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: En serio, tío. O sea, ¿hola? ¿No has pensado en buscar en Google y comprobar si es verdad?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Uf, ¿verdad?

(#act2-preamble-end)


# act2-preamble-cat

```
publish("act2",["dee",3]);
```

s: Como iba diciendo, el complejo industrial de los memes explota a los gatos.

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: ho-hola...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Explica tu tesis.

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: q... qué buena fiesta...

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Bueno, ayer vi que alguien retuiteó un GIF de un gato bebiendo leche...

```
publish("act2",["dee",3]);
```

s: ¡Los gatos no digieren bien esa ^mierda^! ¿Quién retuitearía *maltrato animal*?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Uf, ¿verdad?

(#act2-preamble-end)


# act2-preamble-tinder

```
publish("act2",["dee",1]);
```

s: ¡Total, que no me respondió!

```
publish("act2",["dee",0]);
publish("act2",["party_hong","next"]);
```

h2: ho-hola...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: ¿Después de que os emparejaran en Tinder?

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: q... qué buena fiesta...

```
publish("act2",["party_hong","next"]);
```

{{if _.serialkiller}}
(#act2-preamble-serialkiller)
{{/if}}

{{if _.hookuphole}}
(#act2-preamble-hookuphole)
{{/if}}

{{if _.pokemon}}
(#act2-preamble-pokemon)
{{/if}}

# act2-preamble-serialkiller

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: ¡Sí, no sé! ¿Qué pasa, se creía que era un *asesino en serie* o algo? Vaya paranoias.

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Uf, ¿verdad?

(#act2-preamble-end)


# act2-preamble-hookuphole

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: ¡Sí, no sé! ¿Pensaría que enrollarse con la gente no iba a llenar el vacío de su corazón?

s: ¡Menuda estirada! ¡Primero abre tu mente, luego ábrete de piernas!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Uf, ¿verdad?

(#act2-preamble-end)


# act2-preamble-pokemon

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: ¡Sí, no sé! ¡Tampoco estaba tan buena, pero habría sido un buen ligue!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: ¡Hazte con todos!™

(#act2-preamble-end)


# act2-preamble-end

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...3000)

```
music('battle', {volume:0.5});
publish("hp_show");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

n: SEGUNDA RONDA: *¡A LUCHAR!*

[¡Oh, no, todos nos odian!](#act2a_social)

[¿Le estabas poniendo *ojitos* a esa pelirroja?](#act2a_perv)

[Oye, hablemos sobre el significado de la vida.](#act2a_meaning)

# act2a_social

`bb({eyes:"sad"})`

b: ¡Estamos arruinando esta fiesta porque somos unos tristones!

`bb({eyes:"shock", body:"two_up"})`

b: ¡Nos estamos cargando las buenas vibraciones! ¡Estamos cometiendo vibricidio imprudente!

`bb({eyes:"normal", body:"normal"})`

b: Humana, tenemos que irnos *inmediatamente*, antes de que--

```
_.a2_first_danger = 'social';
_.a2_attack_1 = "alone";
```

(#act2b)

# act2a_perv

`bb({eyes:"suspect"})`

b: Es más atractiva que nosotros, así que el mero hecho de *mirarla* significa que--

`bb({eyes:"shock", body:"two_up"})`

b: SOMOS UNOS ASQUEROSOS

`bb({body:"normal"})`

b: Damos repelús, somos unos malvados, malos malísimos y terribles perve--

```
_.a2_first_danger = 'perv';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2a_meaning

`bb({body:"one_up", eyes:"normal_r"})`

b: Al fin y al cabo, ¿acaso algo que hagamos importa de verdad?

`bb({body:"normal", eyes:"sad"})`

b: ¿Contribuir a la humanidad? Cualquier gran obra caerá tal y como lo hizo Ozymandias. ¿El amor? La muerte siempre lo separará.

`bb({eyes:"sad_r"})`

b: ¡Y cuánta muerte hay! *Nosotros* moriremos. *Nuestros seres queridos* morirán.

`bb({eyes:"shock", body:"two_up"})`

b: ¡El segundo principio de la termodinámica implica que incluso nuestro *universo* morirá!

`bb({eyes:"suspect", body:"normal"})`

b: Ah, ¿y eso de que "la muerte nos hace apreciar la vida"? ¡Eso es como decir que la esclavitud es buena porque nos hace apreciar la libertad!

`bb({body:"one_up"})`

b: Oh, ¿que "tienes que darle tu propio significado"? ¡Eso es justo lo que dicen los cultistas y los conspiradores!

`bb({eyes:"shock", body:"two_up"})`

b: ¡La vida no tiene sentido, la muerte no tiene sentido, ni siquiera el *sentido* tiene sentido! ¿Qué se supone que debemos hacer, como almas mortales que som--

```
_.a2_first_danger = 'meaning';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2b

`bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"suspect"})`

b: Eh... humana, ¿me estás escuchando?

`bb({eyes:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"shock", mouth:"small_talk", body:"chest", MOUTH_LOCK:true})`

b: *OH*

`bb({mouth:"small_talk"})`

b: DEBO ADVERTIRTE DE...

[¡*Más* del mismo tipo de peligro!](#act2b_louder)

{{if _.a2_first_danger=="social"}}
[¡*Otro* tipo de peligro social!](#act2b_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[¡*Otro* tipo de peligro moral!](#act2b_different_moral)
{{/if}}

[¡Estás ignorando el peligro! ¡Eso es muy peligroso!](#act2b_ignore)

# act2b_louder

`_.a2_first_choice = "louder"`

{{if _.a2_first_danger=="social"}}
(#act2b_louder_social)
{{/if}}

{{if _.a2_first_danger=="perv"}}
(#act2b_louder_perv)
{{/if}}

{{if _.a2_first_danger=="meaning"}}
(#act2b_louder_meaning)
{{/if}}

# act2b_louder_social

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: ¡LAS EMOCIONES SON CONTAGIOSAS! ¡SI NO TE VAS, INFECTARÁS A TODOS CON TU ENFERMEDAD MENTAL!

b: Crearás una epidemia de SÍNDROME DEL TRISTÓN.

`bb({eyes:"suspect", body:"normal", mouth:"normal"})`

b: ¡Tenemos que sacarte de aquí y recluirnos en cuarentena para siempre en un habitáculo con Netflix y servicios de comida a domicilio!

```
_.a2_second_danger = 'netflix';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "una cuarentena";
```

(#act2c)

# act2b_louder_perv

`bb({eyes:"suspect", body:"two_up", mouth:"normal"})`

b: ¡DEJA DE SER UNA ASQUEROSA! ¡VA CONTRA LA LEY!

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: Ley Orgánica 3/2007 para los asquerosos, Artículo 74.5: (1) Toda persona que ojee a) esos hombros tan musculosos b) ese culito tan rico (2) será denominada legítimamente como

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: "UNA ENORME Y ASQUEROSA BASURA PERVERTIDA"

```
_.a2_second_danger = 'law';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "leyes";
```

(#act2c)

# act2b_louder_meaning

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: De hecho, incluso si encuentras un propósito noble en la vida, ¡*aun así* puedes arruinarlo todo!

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Alfred Nobel quería la paz mundial y que las culturas se entendieran entre ellas. Así que decidió que debía hacer que viajar fuera más fácil.

`bb({eyes:"normal_r"})`

b: Así que necesitaba una manera barata de crear túneles para los trenes. Así que inventó un nuevo material llamado "dinamita"...

`bb({body:"one_up", eyes:"normal"})`

b: el cual fue utilizado en la Primera Guerra Mundial para ASESINAR A MILLONES DE PERSONAS

`bb({body:"two_up", eyes:"shock"})`

b: ¡ES EL EFECTO MARIPOSA, HUMANA! CUÁNTA GENTE ESTÁS MATANDO ACCIDENTALMENTE EN ESTE MISMO INSTANTE

```
_.a2_second_danger = 'butterfly';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "la Primera Guerra Mundial";
```

(#act2c)

# act2b_different_social

`_.a2_first_choice = "different"`

`bb({eyes:"normal_r", body:"point", mouth:"normal"})`

b: ¿Sabes qué es peor que no gustarle a nadie? Gustarle a *todos*.

`bb({body:"one_up", eyes:"suspect", mouth:"normal"})`

b: Es decir, convertirte en uno de *estos* fiesteros sedientos de placer.

`bb({body:"normal", mouth:"small"})`

b: ¡Una vida llena de amistades superficiales que solo te conocen superficialmente!

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: Humana, ¡debemos huir de estos zombis del placer antes de que nos conviertan en uno de ellos!

```
_.a2_second_danger = 'zombies';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "zombis";
```

(#act2c)

# act2b_different_moral

`_.a2_first_choice = "different"`

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: *En este mismo instante* hay gente muriendo en genocidios, muriendo de hambre, ¡y nosotros aquí, de fiestuqui!

`bb({body:"point", eyes:"closed", mouth:"small"})`

b: Como dijo un sabio, "para que venza el mal, lo único que hace falta es que la gente buena no haga nada."

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: NO ESTAMOS HACIENDO NADA.

`bb({mouth:"small"})`

b: ESTANDO AQUÍ DE FIESTA, ESTAMOS APOYANDO A *HITLER*.

```
_.a2_second_danger = 'hitler';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "Hitler";
```

(#act2c)

# act2b_ignore

`_.a2_first_choice = "ignore"`

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: ¡Por desconectar el detector de humo no vas a estar más a salvo del incendio!

`bb({eyes:"suspect_r"})`

b: ¡Ni siquiera olerás el veneno! Solo te irá entrando sueño y entonces--

`bb({body:"scream_c_1"})`

b: MORIRÁÁÁÁÁÁÁÁÁÁÁÁS

```
_.a2_second_danger = 'ignore';
_.a2_attack_2 = "harm";
_.a2_hoodie_callback = "detectores de humo";
```

(#act2c)

# act2c

```
hong({body:"ignore_sweat"});
bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true});
```

b: ...

`bb({eyes:"happy", mouth:"smile", body:"chest"})`

b: ¡Oh, gracias al Cielo, humana, creo que vuelves a oírme!

`bb({eyes:"closed", body:"point"})`

b: HE DE AVISARTE DE...

{{if _.a2_first_choice=="louder"}}
[¡*Aún más* sobre el mismo peligro!](#act2c_louder)
{{/if}}

{{if _.a2_first_choice!="louder"}}
[¡*Más* sobre el mismo peligro!](#act2c_louder)
{{/if}}

{{if _.a2_first_danger=="social"}}
[¡*Otro* peligro social!](#act2c_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[¡*Otro* peligro moral!](#act2c_different_moral)
{{/if}}

[¿Has olido el ponche antes de tomártelo?](#act2c_punch)

#act2c_louder

{{if _.a2_second_danger=="netflix"}}
(#act2c_louder_netflix)
{{/if}}

{{if _.a2_second_danger=="law"}}
(#act2c_louder_law)
{{/if}}

{{if _.a2_second_danger=="butterfly"}}
(#act2c_louder_butterfly)
{{/if}}

{{if _.a2_second_danger=="zombies"}}
(#act2c_louder_zombies)
{{/if}}

{{if _.a2_second_danger=="hitler"}}
(#act2c_louder_hitler)
{{/if}}

{{if _.a2_second_danger=="ignore"}}
(#act2c_louder_ignore)
{{/if}}

# act2c_louder_netflix

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: ¡En realidad, Netflix y comida a domicilio no es suficiente cuarentena! ¡Contagiaríamos al repartidor!

`bb({body:"one_up", mouth:"small"})`

b: ¡Nos tenemos que mudar a Canadá, al Territorio del Yucón, y que nos lleven la comida con un dron!

`bb({body:"two_up", mouth:"normal"})`

b: Y luego esterilizar ese dron para que no transmita nuestros GÉRMENES DE TRISTONES

`_.a2_attack_3 = "alone";`

`_.a2_hoodie_callback = "una cuarentena";`

(#act2d)

# act2c_louder_law

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: ¡La ENORME Y ASQUEROSA BASURA PERVERTIDA será sentenciada a 72 horas en uno de esos cacharros medievales de humillación pública

b: a menos que esas cosas *la exciten*

`bb({body:"scream_a_1"})`

b: porque es una ENORME Y ASQUEROSA BASURA PERVERTIDA

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "leyes";`

(#act2d)

# act2c_louder_butterfly

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: ¡EFECTO MARIPOSA! ¿Estás usando un vaso de plástico no biodegradable?

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: PUM, SE ESCAPA VENENO DE UN VERTEDERO Y MATA A UN NIÑO

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: ¿Estás sudando y tu corazón va a mil?

`bb({body:"scream_a_1"})`

b: PUM, DEJAS EN BANCARROTA A LA SANIDAD PÚBLICA Y MILLONES DE PERSONAS MUEREN

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "el efecto mariposa";`

(#act2d)

# act2c_louder_zombies

`bb({body:"normal", mouth:"small", eyes:"angry"})`

b: Estos zombis del placer se bambolearán hacia ti murmurando

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: ME GUUUUUSTAAAA. ME GUUUUUSTAAAA.

`bb({body:"scream_a_1"})`

b: ¡Y te MORDERÁN y te convertirán en un FIESTERO MAJADERO y/o una VERBENERA SIN SESERA!

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "zombis";`

(#act2d)

# act2c_louder_hitler

`bb({body:"scream_a_1"})`

b: LOS NAZIS VAN AHORA MISMO POR LAS CALLES, HAN REGRESADO Y VAN MARCHANDO AL PASO DE GANSO

`bb({body:"one_up", mouth:"smile", eyes:"happy"})`

b: Diciendo *¡qué suerte que esas "buenas personas" han estado vagueando, con chorradas como "relajarse" y "cuidado personal"!*

`bb({body:"point", mouth:"smile", eyes:"happy_r"})`

b: *¡Nuestros planes no serán arruinados por un bienhechor del tres al cuarto, reichremos esta noche sin parar!*

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "Hitler";`

(#act2d)

# act2c_louder_ignore

`bb({body:"normal", mouth:"normal", eyes:"normal_r"})`

b: Ahora que lo pienso, ¡¿*hay* detector de humos en este edificio?!

`bb({body:"two_up", mouth:"small", eyes:"normal"})`

b: ¿Y si nos están envenenando *EN ESTE MISMO INSTANTE*?

`bb({body:"scream_a_1"})`

b: NI SIQUIERA VERÍAMOS A LA MUERTE VENIR. SIMPLEMENTE DEJARÍAMOS DE EXISTIR PARA SIEMPRE DE LOS SIEMPRES DE LOS SIE--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "detectores de humo";`

(#act2d)

# act2c_different_social

`bb({body:"normal", mouth:"normal", eyes:"sad"})`

b: ¿Y si somos *fundamentalmente incapaces* de ser amados o de amar a otros?

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: ¿Y si hay algo que se rompió irreversiblemente en nuestro interior hace ya mucho tiempo? ¿O ese algo ni siquiera existió, nunca?

`bb({body:"scream_a_1"})`

b: ¡AAH ESTAMOS ROTOS! ROTOS ROTOS ROTÍSIM--

`_.a2_attack_3 = "alone";`

(#act2d)

# act2c_different_moral

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: ¿Y si estamos *fundamentalmente podridos* por dentro?

`bb({body:"one_up", eyes:"sad"})`

b: Otros se inclinan inconscientemente hacia el bien, pero nosotros solo somos "buenos" cuando nos sentimos culpables o avergonzados, y eso en los mejores casos.

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: ¿Y si nuestra naturaleza es hacer daño a los demás? ¿Y si estamos *condenados* a ser una carga para los de nuestro alrededor?

`bb({body:"scream_a_1"})`

b: ¡AAH ESTAMOS ROTOS! ROTOS ROTOS ROTÍSIM--

`_.a2_attack_3 = "bad";`

(#act2d)

# act2c_punch

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: No me lo invento, eh. La gente *hace* eso de poner droga en el ponche. Es algo real que ocurre de verdad.

`bb({eyes:"suspect"})`

b: Humana, ¿te duele la cabeza? ¿Sientes tus extremidades como dormidas? Creo que nos estamos muriendo.

`bb({body:"scream_a_1"})`

b: ¡AAAH NOS ESTAMOS MURIENDO! NOS ESTAMOS MURIENDO NOS ESTAMOS MURIENDO NOS ESTAM--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "el ponche";`

(#act2d)

# act2d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"attacked"});
attack("20p", _.a2_attack_1);
```

(...401)

```
hong({body:"attacked_2"});
attack("20p", _.a2_attack_2);
```

(...401)

```
hong({body:"attacked_3"});
attack("20p", _.a2_attack_3);
```

(...1001)

h: ¡J^ODEEER^!

h: C^OÑO^ DE LA P^UTA^ MADRE HO^STIA^, *J^ODEEEER^*

`bb({body:"two_up", mouth:"smile", eyes:"happy"});`

b: ¡Yupi! ¡Me alegro tanto de que puedas oírme otra vez, humana!

`bb({body:"normal", mouth:"small", eyes:"sad"})`

b: ¿Por qué me ignorabas?

`hong({body:"facepalm"})`

h: ^Ostia^, tío, eres más tonto que una piedra.

`hong({body:"facepalm_2"})`

h: ¿Sabes eso de los indígenas americanos?

h: "Dentro de ti hay dos lobos, uno de ellos es la esperanza, el otro es la desesperación. ¿Qué lobo vencerá? Aquel al que alimentes."

```
hong({body:"facepalm_3"});
bb({eyes:"normal"});
```

h: ¡Intentaba matarte de *hambre*, sádico ^cabrón^!

`hong({body:"smile", mouth:"smile"})`

h: A tomar por saco, venga, afirmaciones positivas.

h: *Soy querida. Soy buena. Soy lista. Soy guapa. Soy especial.*

`bb({eyes:"suspect"});`

[¡Carambolas, pero qué ególatra!](#act2d_narcissist)

[¿Sabes que eso de las afirmaciones *no funciona*?](#act2d_disproven)

[tía no le atribuyas historias raras a los indígenas](#act2d_racist)

# act2d_disproven

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: ¡De hecho, hacen justo *lo contrario* para la gente con autoestima baja!

`bb({body:"one_up", mouth:"small", eyes:"normal"})`

b: Lo dice un estudio bien diseñado; pruebas aleatorias controladas, el responsable del experimento no sabía quién estaba en cada grupo.

`bb({body:"two_up", mouth:"small", eyes:"normal_r"})`

b: Conclusión: si ya tenías la autoestima baja, ¡repetir afirmaciones te hace sentir *peor* que si simplemente no hicieras nada!

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: (Wood *Psychological Science* [EE.UU., 2009]). Búscalo en Google Académico, humana.

`bb({body:"scream_b_1"})`

b: ASÍ QUE DEJA DE TRANSMITIR BULOS ACIENTÍFICOS

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: ¡*Necesitas* ver tus fallos de forma humilde para crecer como persona!

`bb({body:"two_up", eyes:"suspect"})`

b: ¡No puedes echar ambientador en una habitación llena de moho! Tapar tus fallos te hará peor persona a la larga.

`bb({body:"chest", mouth:"smile", eyes:"closed"})`

b: Afortunadamente, yo, como tu leal lobito guardián, puedo alertarte sobre tus fallos. Y ahora mismo, tu principal fallo es-

`bb({body:"scream_b_1"})`

b: TODO. TODO ESTÁ MAL.

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Los indígenas americanos son *gente real*, no unos "buenos salvajes" que puedes mencionar para hacer que tu consejo de galleta de la fortuna suene más *exótico*.

`bb({eyes:"suspect_r"})`

b: ¡Estás reduciendo a individuos y a culturas complejas al nivel de una publicación de Desmotivaciones.es! ¡Eso es "racismo benévolo"!

`bb({body:"scream_b_1"})`

b: DEJA DE SER RACISTA Y ABRE ESOS OJILLOS QUE TIENES

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: ME ^CAGO^ EN LA ^PUTA^.

`hong({body:"yell", mouth:"yell"})`

h: ¿Sabes qué? Eres *irracional*.

h: ¡Todos sabemos que las emociones son irracionales! ¡Sobre todo el miedo!

`hong({body:"facepalm_2"})`

h: ¡Solo eres un vestigio evolutivo, como mi apéndice o mi muela del juicio!

`hong({body:"yell", mouth:"yell"})`

h: ¡Y toda esta metáfora del lobo es una ^mierda^! No eres más que un puñado de sustancias químicas de mi cabeza.

`hong({body:"cross", mouth:"cross"})`

h: ¡¿Por qué debería hacerle caso a un saco de ^mierda^ insignificante, irracional e inexistente como tú?!

`bb({eyes:"sad", MOUTH_LOCK:true})`

b: ...

[Jopé, humana, te has pasado.](#act2e_hurtful)

[Yo soy un sentimiento. Los sentimientos son válidos.](#act2e_valid)

[Humana, *los dos* somos "un puñado de químicos".](#act2e_rational)

# act2e_hurtful

`bb({body:"chest"})`

b: Soy *parte* de ti, sabes. Cuando dices eso, te haces daño a *ti misma*.

`bb({body:"scream_a_1"})`

b: ¿Por qué te pegas tú sola, humana? DEJA DE PEGARTE.

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_rational

`bb({body:"normal", mouth:"normal", eyes:"normal_r"});`

b: Tus motivaciones más profundas son la dopamina, tus mayores alegrías son serotonina.

`bb({body:"one_up"});`

b: Tus recuerdos son pesos sinápticos, tu lógica son señales eléctricas propensas a fallar.

`bb({eyes:"normal", body:"normal"});`

b: Así que si *yo* soy irracional porque solo soy "un montón de químicos"... ¡entonces *tú* eres irracional!

`bb({body:"two_up", eyes:"shock"});`

b: ¡Así que si *ambos* somos irracionales, *jamás* descubriremos cómo sentirnos realizados y felices!

`bb({body:"scream_a_1"})`

b: ¡AAAH ESTAMOS ROTOS! ROTOS ROTOS ROTÍSIM--

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2f)

# act2e_valid

`bb({body:"normal", mouth:"normal", eyes:"suspect"});`

b: Un segundo... "ellos" dicen que tus sentimientos son válidos y justificados, que debes aceptar tus emociones.

`bb({eyes:"suspect_r"});`

b: Pero luego "ellos" dicen también que las emociones son irracionales, que no hay que fiarse de las emociones.

`bb({eyes:"angry"});`

b: Ay, madre, ¡"ellos" llevan todo este tiempo mintiéndonos!

`bb({body:"scream_a_1"})`

b: "ELLOS" SE CONTRADICEN A SÍ MISMOS, SOLO QUIEREN HACERNOS DEPENDIENTES DEL COMPLEJO INDUSTRIAL DE LA AUTOAYUDA

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2f

`hong({body:"defeated", MOUTH_LOCK:true});`

h: ...

h: Odio esto. Dios, me duele mucho lo *odio*.

h: No puedo apaciguarte. No puedo ignorarte. No puedo combatirte.

`bb({eyes:"suspect"});`

h: Haga lo que haga, no consigo deshacerme de t--

`bb({body:"cry_1"});`

b: A lo mejor es que NO *TIENES* QUE DESHACERTE DE MÍ.

`bb({body:"cry_2"});`

b: ¡¿CÓMO CREES QUE ME SIENTO *YO*, EH, HUMANA?!

`bb({body:"cry_4", mouth:"cry", eyes:"cry"})`

b: ¡Me esfuerzo al máximo para ser tu perro guardián, pero solo me ves como un malvado lobo feroz!

b: ¡Y entonces me esfuerzo *aún más* en avisarte del peligro! ¡*Más* peligro! ¡*Otro* peligro!

`bb({eyes:"cry_2"})`

b: ¡Pero me esfuerce lo que me esfuerce, tú *sigues* pensando que soy tu enemigo!

`bb({body:"cry_5"});`

b: ¡¿Qué estoy haciendo mal?!

`bb({body:"cry_2"});`

b: Ya *sé* que soy malísimo en mi trabajo. ¡Pero lo *intento*, humana!

`bb({body:"cry_3"});`

b: ...Lo intento.

`bb({body:"cry_6", mouth:"right", eyes:"cry_r_1"});`

b: No hace falta que prestes atención a mis alertas, o que estés de acuerdo conmigo, ni siquiera tengo que *gustarte*.

`bb({eyes:"cry_r_2"});`

b: Yo... solo quiero que tengas paciencia conmigo.

`bb({eyes:"cry_r_3"});`

b: Solo quiero que te sientes conmigo un rato, en vez de darme la espalda y--

```
bb({eyes:"cry_r_4"});
hong({body:"listen"});
```

r: Eh.

```
hong({body:"look"});
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...2000)

```
publish("act2",["party_hunter",2]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: Parece que estás peleándote contigo misma, chavala.

```
publish("act2",["party_hunter",3]);
publish("act2",["party_hong",13]);
```

h2: ¿Cómo lo has sabido?

```
publish("act2",["party_hunter",4]);
publish("act2",["party_hong",14]);
```

r: Porque estabas, eh, murmurando algo sobre {{_.a2_hoodie_callback}} o algo así.

```
publish("act2",["party_hunter",13]);
publish("act2",["party_hong",15]);
sfx("rustle", {volume:0.6});
setTimeout(function(){
	publish("act2",["party_hong",16]);
	sfx("concrete_step3", {volume:0.6});
},401);
setTimeout(function(){
	publish("act2",["party_hong",17]);
	sfx("concrete_step4", {volume:0.6});
},801);
```

h2: dios mío soy un desastre.

```
publish("act2",["party_hunter",7]);
publish("act2",["party_hong",18]);
sfx("squeak");
```

r: Eh. No estás sola, compañera. La ansiedad es supercomún.

```
publish("act2",["party_hunter",5]);
publish("act2",["party_hong",19]);
```

{{if _.act1_ending=="fight"}}
r: ¡Pero si ayer mismo oí que a alguien del campus le había dado un ataque de nervios y había tirado su móvil al suelo!
{{/if}}

{{if _.act1_ending=="flight"}}
r: ¡Pero si ayer mismo oí que alguien se puso a llorar en público hecho una bola, como un armadillo!
{{/if}}

```
publish("act2",["party_hunter",2]);
```

r: Escúchame: sé lo que se siente al tener a un animal metido en tu cabeza.

```
publish("act2",["party_hunter",8]);
```

r: *Todos* sabemos lo que se siente. Por eso monto estas fiestas cada finde, para olvidarnos de los problemas, olvidarnos de ese animal.

```
publish("act2",["party_hunter",9]);
publish("act2",["party_hong",20]);
```

h2: pero mi ansiedad...

```
publish("act2",["party_hunter",2]);
publish("act2",["party_hong",21]);
```

r: Eh, chavala, no te preocupes. Yo antes era como tú. Pero luego descubrí un truquillo para callar a esa vocecilla negativa para siempre.

```
publish("act2",["party_hunter",3]);
Game.clearText();
music(null, {fade:1});
```

(...2001)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",22]);
sfx("rustle");
```

(...2501)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",23]);
sfx("rustle2");
```

(...1001)

```
publish("act2",["party_hunter",11]);
```

r: Esta es la mezcla de la casa. Es un poco más fuerte que... bueno, cualquier cosa que sea legal, la verdad.

```
publish("act2",["party_hunter",12]);
publish("act2",["party_hong",24]);
```

r: ¡De un trago, ^zorrona^!

```
hong({body:"hold"});
bb({body:"normal", mouth:"small", eyes:"wat"});
Game.clearText();
Game.WORDS_HEIGHT_BOTTOM = -1;
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[Oh, Dios mío.](#act2g_1) `Game.OVERRIDE_CHOICE_LINE=true`

[Esto es un mal mecanismo de supervivencia.](#act2g_2) `Game.OVERRIDE_CHOICE_LINE=true`

[No aceptes bebidas de extraños.](#act2g_3) `Game.OVERRIDE_CHOICE_LINE=true`

# act2g_1

b: O--

(#act2g)

# act2g_2

b: E--

(#act2g)

# act2g_3

b: N--

(#act2g)

# act2g

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"forward", mouth:"forward"});
bb({body:"frazzled", mouth:"frazzled", eyes:"frazzled"});
```

h: ¡Mmm, tiene un paladar exquisito!

h: ¡Un fuerte sabor a "ciérrale el pico a tu mente" que deja un sutil gustillo a "nunca más sentir nada"!

b: Humana, esto está mal. Muy, pero que muy mal.

[Así es *precisamente* como empiezan las adicciones.](#act2h_opt1) `Game.OVERRIDE_CHOICE_LINE=true`

[¡*Sabía* que a la anfitriona le pasaba algo en la cabeza!](#act2h_opt3) `Game.OVERRIDE_CHOICE_LINE=true`

[¡Puede haberle metido droga a eso!](#act2h_opt2) `Game.OVERRIDE_CHOICE_LINE=true`


# act2h_opt1

b: Así es *precis*--

(#act2h)

# act2h_opt2

b: ¡Puede habe--

(#act2h)

# act2h_opt3

b: ¡*Sabía que a--

(#act2h)

# act2h

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"back", mouth:"back"});
bb({body:"panicked", mouth:"panicked", eyes:"panicked"});
```

h: ¡Delicioso *y* más barato que la terapia!

b: HUMANA PARA POR FAVOR

h: ¡Ji, ji, ji!

h: ¿Y qué vas a *hacer*, eh, ^capullo^?

b: Lo siento mucho, humana.

b: Voy a tener que usar mi ATAQUE ESPECIAL

```
bb({body:"special_a"});
music('battle', {volume:0.5});
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

```
bb({body:"special_b_1"});
hong({body:"forward", mouth:"forward"});
sfx("charging");
```

h: ¿Pero qué ^cojones^ es esa ^mierda^?

h: ¿Qué? ¿Vas a chillarme más *palabras* estúpidas para--

```
bb({body:"special_c"});
sfx("hadouken");
```

(...901)

(#act2i)

# act2i

```
publish("hide_tabs");
publish("show_special_attack");
Game.FORCE_CANT_SKIP = true;
music(null);
stopAllSounds();
```

(...5000)

```
publish("show_tabs");
hong({ body:"final", mouth:"final" });
bb({ body:"normal", mouth:"normal", eyes:"sad" });
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
setTimeout(function(){
	publish("remove_special_attack");
},30);
```

(...2500)

h: QUÉ ^COJONES^ HA SIDO ESO

b: Perdóname. Necesitaba enseñarte las consecuencias.

{{if _.SPECIAL_ATTACK=="harm"}}
h: PODÍA *VER* MI PROPIO CADÁVER. PODÍA *SENTIR* LA SENSACIÓN DE ESTAR MUERTA DE VERDAD.
{{/if}}

{{if _.SPECIAL_ATTACK=="alone"}}
h: PODÍA *VER* LA CARA DE ASCO DE TODOS. PODÍA *OÍR* TODO LO QUE DECÍAN.
{{/if}}

{{if _.SPECIAL_ATTACK=="bad"}}
h: PODÍA *ESCUCHAR* EL CRUJIR DE LAS COSTILLAS. PODÍA *SABOREAR* LA SANGRE EN EL AIRE.
{{/if}}

b: Perdóname, humana.

n: *ACABA CON ELLA*

[{LUCHAR: Pégale a la anfitriona.}](#act2j_fight) `Game.OVERRIDE_CHOICE_LINE=true`

[{HUIR: Larguémonos de aquí.}](#act2j_flight) `Game.OVERRIDE_CHOICE_LINE=true`

# act2j_fight

`bb({ eyes:"angry" });`

b: Esa psicópata se estaba aprovechando de ti.

b: Ha intentado corromperte, ¡que estuvieras tan mal de la chota como ella!

`bb({ body:"yell_angry_1" });`

b: ¡Dale un puñetazo! ¡Una buena tunda es lo que se merece esta imbécil!

`bb({ body:"final_1" });`

b: PÉGALE PÉGALE PÉGALE PÉGALE PÉGALE PÉGALE PÉGALE PÉGALE PÉGALE PÉGALE PÉG--


`_.a2_ending = "fight";`

(#act2k)

# act2j_flight

b: *Sabía* que los fiesteros estos estaban muy idos. ¡Se dedican a entumecer sus dolores con cosas horribles!

`bb({ body:"yell_1" });`

b: ¡Y te iban a engañar para que tú hicieras lo mismo! ¡Te están corrompiendo! ¡Tenemos que salir de aquí!

`bb({ body:"final_1" });`

b: SAL DE AQUÍ SAL DE AQUÍ SAL DE AQUÍ SAL DE AQUÍ SAL DE AQUÍ SAL DE AQUÍ SAL DE A--

`_.a2_ending = "flight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
music('party1', {volume:0.6, fade:1.5});
```

(...2001)

```
publish("act2",["party_hong",26]);
sfx("slide");
```

(...1001)

```
publish("act2",["party_hunter",14]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: ¿Chavala, estás bien?

`publish("act2",["party_hunter",13]);`

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

```
Game.clearText();
publish("act2",["party_hunter",21]);
publish("act2",["party_hong",33]);
music(null);
sfx("hit");
```

(...1000)

```
sfx("record_scratch");
publish("act2",["party_hunter",22]);
publish("act2",["party_hong",34]);
publish("act2",["dee",6]);
publish("act2",["dum",6]);
```

r: S-serás...

```
publish("act2",["party_hunter",23]);
publish("act2",["party_hong",35]);
publish("act2",["dee",5]);
publish("act2",["dum",5]);
music('party1', {volume:0.6, fade:6});
```

r: *provocativa*.

r: Me gustas. Aquí te espero la semana que viene, ¿vale, bombón?

```
publish("act2",["party_hunter",19]);
publish("act2",["party_hong",36]);
```

h2: vale adiós, arrivederci, bye-bye, au revoir

r: Puede que el animal haya ganado esta vez, ¡pero vuelve y te haré una mezcla aún más potente!

h2: sayōnara, auf wiedersehen, zài jiàn, shalom

r: Chavala, ¡tú y yo vamos a demostrarle a ese bicho quién manda aquí!

(#act2k_end)

# act2k_flight

`publish("act2",["party_hong",36]);`

h2: vale lo siento tengo que irme

`publish("act2",["party_hunter",16]);`

r: ^Joder^. Hoy ha ganado el animal, ¿eh?

`publish("act2",["party_hunter",15]);`

h2: no no, es solo, eh, que tengo que correr una maratón. velocidad sónica.

`publish("act2",["party_hunter",19]);`

r: Ven a mi fiesta el finde que viene, bombón. Te haré una mezcla aún más potente.

h2: vale gracias tengo que correr correr correr

r: ¡Tú y yo, chavala, vamos a enseñarle a ese bicho quién manda!

(#act2k_end)

# act2k_end

```
Game.clearText();
publish("act2-out-5");
publish("act2-outro", ["end1"]);
music("hum", {fade:2, volume:0.6});
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2500)

```
publish("act2", ["act2_end",2]);
sfx("whoosh");
```

(...1000)

b: ¡Humana! ¡¿Te encuentras bien?!

```
publish("act2", ["act2_end","next"]);
```

b: caramba, eso ha estado *cerca*. Podríamos haber--

```
Game.clearText();
publish("act2", ["act2_end","next"]);
music(null);
sfx("squeak");
```

(...1500)

```
publish("act2", ["act2_end","next"]);
sfx("hit");
```

(...1000)

h: El finde que viene vendré a la fiesta.

h: En nuestra próxima pelea, no solo voy a *derrotarte*...

h: Te voy a *arrancar* la ^puta^ cabeza.

```
Game.clearText();
publish("act2", ["act2_end","next"]);
sfx("concrete_step1");
````

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step2", {volume:0.8});
```

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step3", {volume:0.5});
```

(...901)

`sfx("concrete_step4", {volume:0.25});`

(...3000)

`_.INTERMISSION_STAGE = 2;`

(#intermission)
