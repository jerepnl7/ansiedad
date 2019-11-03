# act4

```
SceneSetup.act4();
publish("SAVE_GAME", ["act4"]);
Game.FORCE_CANT_SKIP = true;
```

(...5001)

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n3: (partida guardada automáticamente)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
sfx("grass_step1", {volume:0.1});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.2});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.25});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.3});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...1667)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...1333)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.20});
```

(...167)

```
publish("act4_hong_sits");
```

(...66)

```
publish("act4", ["hong_transition", "next"]);
sfx("squeak");
```

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

```
publish("act4", ["hong_transition", "next"]);
sfx("rustle");
```

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

```
publish("act4", ["hong_transition", "next"]);
```

(...333)

```
publish("act4", ["hong_transition", 9]);
sfx("sandwich");
```

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1466)

`publish("act4-out-1");`

(...201)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

```
publish("act4-show-chars");
Game.FORCE_CANT_SKIP = false;
```

(...901)

`hong({body:"sigh_1"})`

(...601)

```
hong({body:"sigh_2"});
bb({eyes:"look_down"});
```

h: *suspiro*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: ¿Entonces cuál es la moraleja de la historia?

`hong({body:"one_up", eyes:"annoyed"})`

h: ¿Acaso hemos *aprendido* algo? *Sí* me estaba comportando como una imbécil, *sí* me estaban manipulando mis "amigos" y hasta casi la *palmamos*.

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[Sí, por no mencionar la factura del hospital.](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[Sí, por no mencionar el daño hepático.](#act4a_liver)
{{/if}}

[Sí, ha sido el *peor* de los casos.](#act4a_worst)

[Sí, tenía razón.](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: Ya. Mi seguro no cubre "ser ^gilipollas^".

`hong({eyes:"annoyed", mouth:"normal"});`

b: Y aun así... ¡hemos sobrevivido!

`hong({eyes:"normal"});`

h: ¿?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: Unos añitos de esperanza de vida por lo menos sí que nos hemos cargado...

`bb({eyes:"surprise"});`

b: ¡Pero al menos *tenemos* esperanza de vida! ¡Hemos sobrevivido!

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ¿?

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: Y aun así...

h: ¿Hm?

`bb({eyes:"surprise"});`

b: ¡Hemos sobrevivido!

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: Pero... sí, tenís razón.

`hong({eyes:"surprise"});`

h: ¿Hm?

`bb({eyes:"normal"});`

b: He sido *igualito* que Pedro y el lobo. Y cuando hubo un peligro *de verdad*, tú (con razón) no me creíste.

`bb({eyes:"surprise_r"});`

b: Y aun así, ¡hemos sobrevivido!

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: A pesar de todo, aquí seguimos.

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h: Pareces muy tranquilo considerando que hemos estado al borde de la muerte.
{{/if}}

{{if !_.INJURED}}
h: Pareces muy tranquilo considerando que hemos estado *al borde* del borde de la muerte.
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: Bueno, en comparación, ahora todo parece menos aterrador. Y me he puesto a pensar...

`bb({eyes:"normal", mouth:"normal"});`

b: Si cuando tú luchas contigo, no sirvo para protegerte...

h: Y cuando yo lucho contigo *tampoco* sirve, porque solo te pones a gritar más aún...

`bb({eyes:"normal_r"})`

b: A lo mejor...

`bb({eyes:"normal"})`

h: Ni siquiera tengamos que luchar.

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
```

(...301)

`publish("smash",[0]);`

(...2001)

```
publish("smash",[1]);
sfx("smash_glass");
```

(...2601)

```
publish("smash",[2]);
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

(...2001)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

```
music('dontfight',{fade:5, volume:0.6});
bb({eyes:"annoyed_d"});
```

b: No soy un lobo feroz. Pero tampoco soy un lobo guardián.

`bb({eyes:"sad_d"})`

b: Soy un perro maltratado refugiado.

`bb({eyes:"sad"})`

b: Hemos pasado por muchas cosas malas. Incluso traumas o negligencias. Por eso a veces reacciono de forma exagerada tal que así:

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: GUAU GUAU GUAU GUAU GUAU

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: ¡Pero no *quiero* ser un perro cobarde! ¡Quiero protegerte! ¡Quiero ser un buen perro!

`bb({eyes:"sad", mouth:"normal"});`

b: Humana... ¿podrás amaestrar a este lobo?

`hong({eyes:"sad"})`

h: Lo... lo intentaré.

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: Vale. Relaciones sanas con las emociones. Las relaciones necesitan comunicación. Así que vamos a comunicarnos.

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: Los próximos cinco minutos van a sonar superempalagosos, pero a ver qué tal nos sale.

```
hong({body:"hands_2", mouth:"normal"});
```

h: Querido lobo interior... ¿cómo te encuentras *tú*?

n2: TOTAL DE MIEDOS UTILIZADOS:

n2: *DAÑO* {{_.attack_harm_total}}, *SOLEDAD* {{_.attack_alone_total}}, *MALA PERSONA* {{_.attack_bad_total}}

n2: ¿SOBRE QUÉ MIEDO QUIERES HABLAR PRIMERO? (PODRÁS HABLAR SOBRE LOS DEMÁS LUEGO)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[Tengo miedo de que nos hagan daño.](#act4_harm)

[Tengo miedo de estar solos.](#act4_alone)

[Tengo miedo de que seamos malas personas.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: Quiero proteger tu integridad física,

`bb({eyes:"sad_d"})`

b: Pero el mundo *entero* parece tan peligroso, lleno de tragedias y males...

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: No sé, *yo* ya he hablado mucho. ¿Qué piensas *tú*, humana?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Ahora tú, humana, ¿qué piensas?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: ¿Algo más, humana?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Es verdad. Deberíamos protegernos.](#act4_harm_skills)

[Expongámonos a *más* peligros.](#act4_harm_exposure)

[Gracias.](#act4_thanks) `_.thanks_for = "seguridad física";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: Pero... ¿cómo? Puede que tenga colmillos y zarpas, pero no dejo de ser solo una metáfora.

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: ¿Podríamos aprender defensa personal? ¿Unirnos a un grupo en el que nos protejamos unos a otros? ¿Empujar nuestras barreras personales y mejorar nuestra salud?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: Tal vez, pero...

[¿Y por dónde empezamos?](#act4_harm_skills_start)

[¿Y si no funciona?](#act4_harm_skills_work)

[¿Y si nos pasamos de "seguridad"?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: Hay tanto que hacer, tanto que arreglar de nosotros... ¿Por dónde *empezamos*?

`hong({ body:"shrug", eyes:"surprise" })`

h: Ya hemos empezado.

`bb({ eyes:"normal", mouth:"narrow" })`

b: ¿Eh?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: Estamos practicando la comunicación ahora mismo. Nos ayudará a detectar mejor los peligros y a que haya menos falsas alarmas.

`hong({ eyes:"surprise" });`

h: ¡Y *eso* nos ayudará a protegernos de que nos hagan daño!

`hong({ eyes:"normal", mouth:"normal" });`

h: Por lo tanto: esto *es* entrenamiento de defensa personal.

`bb({ eyes:"normal_r" })`

b: Ah. Yo esperaba algo más como esto:

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
hong({ eyes:"sad", mouth:"smile" });
bb({ body:"karate_1" });
sfx("hiya");
```

(...1001)

`Game.FORCE_CANT_SKIP = false;`

(#act4_something_else)

# act4_harm_skills_work

`bb({ eyes:"normal" });`

h: Es verdad, no podemos protegernos al 100 %...

`hong({ body:"one_up" });`

h: Pero una mejora del 1 % merece la pena igualmente, ¿no crees?

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: ¿En vez de ver el vaso un 99 % vacío, lo ves un 1 % lleno?

`bb({ eyes:"normal" });`

h: Algo es algo. Sobre todo si estás perdido en un desierto.

`bb({ eyes:"closed" });`

b: Bueno. Pues de un trago.

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: Digo, ¡tú me ignorabas porque *yo* me pasé con eso de la seguridad!

`bb({ body:"normal", eyes:"normal" })`

h: Nah, tienes razón. Hay que hacer todo con moderación.

`bb({ eyes:"suspect" })`

b: Perdona, ¿*TODO* con moderación?

`hong({ eyes:"annoyed" })`

h: *Una cantidad moderada de cosas* con moderación.

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: Gracias por hacer tus argumentos recursivamente constantes.

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: *QUÉ*

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: A ver, imagina un perro que le tiene miedo a los truenos.

`hong({ body:"hands_1" });`

h: Hay educadores que reproducen una grabación de un trueno a un volumen bajo y le dan una chuche al perro si se está quieto.

`hong({ body:"hands_2" });`

h: A lo largo de los días, el educador sube el volumen poco a poco hasta que el perro supera su miedo a los truenos.

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: ¡Se llama desensibilización sistemática!

`hong({ body:"point", eyes:"normal" });`

h: Como eres un perro, contigo debería funcionar igual, ¿no? Todos los mamíferos tienen la misma respuesta de lucha o huida.

`hong({ body:"normal" });`

[¿Y si nos desensibilizamos *demasiado*?](#act4_harm_exposure_overboard)

[¿Y si nos exponemos a un peligro *real*?](#act4_harm_exposure_hurt)

[No soy un perro, soy un lobo.](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: Yo te daré cariño y tendré paciencia contigo hasta domesticarte y que seas un cachorrito adorable.

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: Ooh.

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: *Acabamos* de ver lo que pasa si desconectas tus miedos: que te pones en peligro *de verdad*.

`bb({ eyes:"angry_r", body:"one_up" })`

b: Además, ¿desensibilizarnos *demasiado* no nos convertirá en psicópatas?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: ¡Antes de que nos demos cuenta, estaremos comiendo chuches mientras vemos vídeos de porno snuff!

`hong({ eyes:"annoyed" })`

h: Creo... que de eso a los truenos hay un trecho.

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: ¿Y *cuán* largo exactamente es ese trecho, humana? ¡¿*Cuán*?!

`hong({ eyes:"surprise", body:"one_up" })`

h: No lo sé. ¡Pero *tú* puedes ayudarme!

`hong({ eyes:"normal", body:"normal" })`

h: Trabajando juntos y negociando, trazaremos un límite.

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: Vale. Pero yo no tengo pulgares oponibles, así que, si hay que trazar algo, tienes que hacerlo tú, humana.

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: Por ejemplo: ¡hemos saltado desde lo alto de un edificio!*
{{/if}}

{{if !_.INJURED}}
b: Por ejemplo: ¡casi saltamos desde lo alto de un edificio!*
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: Nah, tienes razón. Se *puede* ir demasiado lejos.

`hong({ eyes:"normal" });`

h: Pero por eso, con este tipo de terapia, iremos pasito a pasito.

h: Y justo antes de llegar a un peligro *de verdad*, pararemos.

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: Yo diría que el límite está entre un trueno fuerte y salir a la calle en plena tormenta con un gorro alto y puntiagudo.
(#act4_something_else)

# act4_thanks

`_.num_thanks += 1`

{{if _.num_thanks==1}}
(#act4_thanks_1)
{{/if}}

{{if _.num_thanks==2}}
(#act4_thanks_2)
{{/if}}

{{if _.num_thanks==3}}
(#act4_thanks_3)
{{/if}}

# act4_thanks_1

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"annoyed" })`

b: Espera, ¿no tienes ningún argumento a favor ni en contra? ¿Solo... "gracias"?

`hong({ eyes:"surprise", body:"shrug" })`

h: ¡Claro! Gracias por preocuparte por mi {{_.thanks_for}}.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: ¿Estás bien?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: Nunca me habías dado las *gracias* antes.

`hong({ mouth:"smile" });`

h: Ay, mi lobito del pánico grandullón y peludo.

(#act4_something_else)

# act4_thanks_2

h: Aunque reacciones exageradamente, me alegro de que te preocupes por mi {{_.thanks_for}}.

`bb({ eyes:"annoyed" })`

b: Oye... ¿no estarás diciendo "gracias" una y otra vez para evitar hablar sobre tus miedos, ¿no?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: Bueno, esto es difícil, no siempre tengo una respuesta preparada.

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: En la vida no tienes una lista de 3 opciones de diálogo predefinidas.

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: Pero, por lo menos, puedo darte las gracias.

b: Bueno, gracias a ti también por escucharme.

`bb({ eyes:"closed" });`

b: Mi pequeña mamífera cárnica no peluda.

(#act4_something_else)

# act4_thanks_3

h: Aunque me asusten tus ladridos, solo intentas proteger mi {{_.thanks_for}}.

`bb({ eyes:"smile_r" });`

b: Vale, pero si sigues halagándome así, internet se va a pensar lo que no es.

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: Venga ya, solo soy una chica universitaria vulnerable y tú eres un gran lobo aterrador. ¿Qué podría--
`hong({ eyes:"normal", body:"point" });`

h: Mejor me callo.

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: Quiero que satisfazcas esa profunda necesidad humana de sentirte parte de un grupo.

`bb({ eyes:"sad_u" });`

b: Pero tengo miedo de que si nos conocieran, si nos conocieran *de verdad*, los espantaríamos a todos.

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: No sé, *yo* ya he hablado mucho. ¿Qué piensas *tú*, humana?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Ahora tú, humana, ¿qué piensas?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: ¿Algo más, humana?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Estoy de acuerdo: hay que practicar vida social.](#act4_alone_skills)

[Creo que gustamos a la gente. ¿Y si lo averiguamos?](#act4_alone_experiment)

[Gracias.](#act4_thanks) `_.thanks_for = "pertenencia social";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: ¿Tal vez podamos practicar habilidades sociales como hacer preguntas, escuchar y empatizar, abrirnos y dejar ver nuestras debilidades, etc.?

`hong({ eyes:"normal_l" });`

h: ¿O crear unos hábitos sociales mejores, como reservar tiempo para salir con amigos o ir a quedadas regulares?

`hong({ body:"one_up" });`

h: También podríamos aprender a sentirnos más cómodos con el rechazo.
`hong({ eyes:"normal" });`

h: O aprender a diferenciar cuándo la gente *no* nos está rechazando y es solo que están cansados o tienen cara de mala ^ostia^ de forma natural.

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: Cuántas opciones. Pero eso de "aprender habilidades sociales"...

[¿No es típico de *manipuladores*?](#act4_alone_skills_manipulative)

[¿No nos hará *más manipulables*?](#act4_alone_skills_manipulated)

[¿Y si no funciona?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: ¿Los asesinos en serie no son muy buenos en leer las emociones de su víctima y "empatizar"?

`bb({ eyes:"annoyed" });`

b: ¿Charles Manson no hizo muchos amigos e influenció a la gente?
`hong({ eyes:"annoyed", body:"chin" });`

h: No, tienes razón.

h: Las "habilidades sociales" de poco sirven si no te preocupas *de verdad* por la gente.

`hong({ body:"normal" });`

h: En pocas palabras, no seas un ^capullo^.

`bb({ eyes:"annoyed", mouth:"smile" });`

b: Toma frase de póster motivador.

`hong({ body:"shrug", mouth:"narrow" });`

h: “No seas un ^capullo^™”

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: Vamos a parecer un felpudo, "¡Bienvenido!". ¡Y mientras decimos "por favor" y "gracias, nos pisotearán y se limpiarán los pies con nosotros!

`bb({ mouth:"scream", eyes:"scream" })`

b: ¡Seremos tan lameculos que parecerá que llevamos pintalabios marrón!

```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: Nah, tienes razón. Las "habilidades sociales" no pueden limitarse a agradar a los demás, también tienen que poner *límites*.

`hong( body:"one_up" });`

h: No podemos invitar a la gente a nuestra casa si no tenemos paredes que la sujeten.

```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: Ah y... re: esa imagen mental del pintalabios... *¿¿puaj??*

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: Podría ser un fracaso. De hecho, *tendremos* fracasos.

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: ¡Y no pasa nada! ¡Del fracaso es de lo que más se aprende!

`hong({ body:"normal", eyes:"normal" });`

h: Así que fracasemos para seguir avanzando juntos, ¿vale?

`bb({ eyes:"normal_r" });`

b: Supongo... En el peor de los casos, nos podemos mudar de ciudad y asumir una nueva identidad.

`bb({ eyes:"normal" });`

h: Seh creo que eso cuesta solo dos bitcoins hoy en día.
(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: ¡Podemos experimentar!

`hong({ body:"chin" });`

h: Podemos darle un toque a algún amigo para quedar, reencontrarnos con un viejo colega, o incluso charlar con el barista.

`hong({ body:"normal" });`

h: Lo mismo le gustamos más a la gente de lo que pensamos.

`bb({ eyes:"annoyed" });`

[¿Pero esto no son solo "victorias" baratas?](#act4_alone_experiment_cheap)

[¿Y si no somos más que una carga para los demás?](#act4_alone_experiment_burden)

[¡Pero una charla trivial no es nuestro *verdadero* yo!](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: Con una sonrisa vacía nunca conseguiremos conectar con nadie,

`bb({ eyes:"super_sad" });`

b: ¡*pero* si nos abrimos, la gente verá nuestras asquerosas y destrozadas entrañas!

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Rueda.

b: Qué.

`hong({body:"hands_1"})`

h: Cuando los perros quieren mostrar cariño y confianza, se muestran vulnerables enseñando la tripa.

`hong({body:"one_up"})`

h: A lo mejor *todavía* no tenemos la seguridad necesaria para ser muy vulnerables pero, con entrenamiento,

`hong({body:"normal", eyes:"surprise"})`

h: llegará el dí en que podamos mostrarle a los demás nuestro verdadero yo, retorcido y humano.

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: Solo rodaré si me das una chuche.
`bb({ eyes:"normal", mouth:"normal" });`

h: No.

(#act4_something_else)


# act4_alone_experiment_cheap

b: Decirle hola al barista no es precisamente una medalla de oro en las Olimpiadas Sociales.

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: ¡Para *nosotros*, sí!

`hong({ body:"one_up", eyes:"annoyed" });`

h: En los estadios sociales olímpicos, no somos ni de peso pluma. Somos... de peso de quark.

`hong({ body:"normal", eyes:"normal" });`

h: Si hay que empezar con pequeñas victorias baratas, pues al ajo. Para dar mil pasos, se empieza con el primero.

b: ¡Sí! Y a lo mejor después del "hola", podemos seguir con...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *"¿Qué hay?"*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *"¡Pues no mucho!"*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: A lo mejor el barista solo quiere hacer su maldito café y no ser un *experimento* para comprobar si apestamos en las relaciones sociales.

`bb({ eyes:"annoyed" })`

h: Pues si resulta que *sí* estamos siendo una carga...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: ¡Es bueno saberlo!

`hong({ eyes:"normal" });`

h: Así aprendemos a preguntar proactivamente a la gente con qué están de acuerdo y aprender a respetar los límites de los demás.
```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: Ya sabes, todas esas chorradas de "relaciones interpersonales" de los panfletos de los psicólogos.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: Quiero defender tus necesidades morales, esas que te inspiran a ser mejor persona,

`bb({ eyes:"sad_d" })`

b: Pero es como si, en el fondo, estuviéramos fundamentalmente... rotos.

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: Y no me digas que *no* estamos tan mal. Hemos saltado de un edificio.
{{/if}}

{{if !_.INJURED}}
b: Y no me digas que *no* estamos tan mal. Casi saltamos de un edificio.
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: No sé, *yo* ya he hablado mucho. ¿Qué piensas *tú*, humana?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Ahora tú, humana, ¿qué piensas?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: ¿Algo más, humana?
{{/if}}
`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Si estamos rotos, arreglémonos.](#act4_bad_fix)

[Si estamos rotos, aceptémoslo.](#act4_bad_accept)

[Gracias.](#act4_thanks) `_.thanks_for = "bienestar moral";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: Podemos crear mejores hábitos poco a poco, que nuestra vida se rija más por aquello que apreciamos,

`hong({body:"one_up"});`

h: Y si lo necesitamos, podemos pedir ayuda profesional, un psicólogo o un terapeuta.

`hong({body:"normal"});`

h: Hay maneras de arreglarlo.

[¿Y si no podemos arreglarlo todo?](#act4_bad_fix_cant)

[¿Y si arreglamos *demasiado*?](#act4_bad_fix_too_much)

[La ayuda personal es muy cara.](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: Nah, supongo que tienes razón.

h: Es imposible arreglarlo todo.

`bb({mouth:"scream", eyes:"scream_sad"});`

b: ¡Aaah sabía que estábamos rotos para siempre!

`hong({eyes:"surprise"});`

h: Pero podemos estar *menos* rotos.

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: Las cicatrices se curan con el tiempo, pero nunca desaparecen.

`bb({eyes:"annoyed_r"});`

b: Supongo. Además,

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: las cicatrices son *sexis*.

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: Para, por favor.

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: Voy a sonar como un enfermo, pero... hay una parte de míque *quiere* tener este trastorno.

`bb({ eyes:"angry" })`

b: ¿No crees que seríamos *aburridos* sin él?
`bb({ eyes:"sad_r", body:"one_up" })`

b: Sin el trastorno, ¿nuestras obras artísticas no se volverán aburridas e insustanciales?

`bb({ eyes:"sad_u", body:"two_up" })`

b: Sin el trastorno, ¿no seremos incapaces de conectar con nuestros amigos que tienen este trastorno?

`bb({ eyes:"sad", body:"chest" })`

b: Si conseguimos estar satisfechos con nuestra vida, ¿no dejaremos de intentar hacer grandes cosas?

`hong({ MOUTH_LOCK:true })`

h: ...

h: Si incluso tenemos miedo... de "quedarnos sin miedos"...

h: No creo que nunca nos quedemos sin miedos.

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: ¡Ah, es verdad! ¡Fiu! ¡Qué alivio!

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: "Doctor, me da ansiedad pagar 100 €/hora solo para oírle preguntar *¿y eso cómo te hace sentir?*"

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: "Ajá. ¿Y eso cómo te hace sentir?"

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: Nah, eso es una preocupación perfectamente razonable.

`hong({ eyes:"annoyed", mouth:"sad" });`

h: Y es todo un asco que haya gente que no pueda permitirse atención psicológica.

`hong({ eyes:"normal", mouth:"normal" });`

h: Aun así, hay algunas opciones más baratas:

`hong({ body:"chin" })`

h: Grupos de apoyo, terapia en línea, centros de salud de estudiantes/sin ánimo de lucro...

`hong({ body:"hands_1" })`

h: Crear hábitos como la meditación, dormir bien, charlar con amigos de forma regular, aprender cosas nuevas...

`hong({ body:"hands_2" })`

h: Ir a la biblioteca para coger libros de psicoterapia que estén basadas en pruebas...

`hong({ body:"one_up" })`

h: ¡Hay una lista llena de recursos al final de este juego!
```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: Hala, adiós a la cuarta pared.

`hong({ body:"point" });`

h: Some things are more important than narrative convention. Such as mental health. Hay cosas m

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: I mean, that's what therapists say right? Accept all your emotions, even the negative ones?

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Wait.

["Accept" as in *give up*?](#act4_bad_accept_give_up)

["Accept" as in *approve*?](#act4_bad_accept_approve)

["Accept" as in *take literally*?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: Do you think Martin Luther King would've said, "Shucks we can't sit in the front of the bus, let's just *accept* it?"

`bb({ eyes:"angry_r", body:"two_up" });`

b: Why does the Self-Help Industrial Complex think waving the white flag is some *profound wisdom?*

`bb({ eyes:"annoyed", body:"normal" });`

h: I think therapists mean "accept" bad things as in: acknowledging they exist and are hard to change,

h: But not necessarily giving up a commitment to change.

`bb({ eyes:"suspect" });`

b: Then therapists should say *acknowledge*, not *accept*.

`hong({ body:"chin", eyes:"annoyed" });`

h: Yeah come to think of it, "accept" is kinda confusing.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Well, I *acknowledge* that.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: Like it's *good* that we're broken or something? No!

`bb({ eyes:"angry_r", body:"one_up" });`

b: All those dang Hollywood screenwriters who romanticize mental illness are full of crud!

`bb({ eyes:"angry", body:"two_up" });`

b: Having a mental disorder *sucks!* It robs people of *lives!* Why should we "accept" that?!

`bb({ body:"normal" });`

h: I think therapists mean "accept" our emotions as in: be patient with them.

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Like how struggling in quicksand makes you sink faster, and the solution is to patiently lie flat,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: Fighting against you, my fear, led me to jump off a roof.
{{/if}}

{{if !_.INJURED}}
h: Fighting against you, my fear, almost led me to jump off a roof.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: Instead, the solution is to do what we're doing now – not to fight, but to patiently be with each other.

`bb({ eyes:"annoyed" });`

b: Then they should say *that* instead of some problematic word like "accept".

`hong({ body:"chin", eyes:"annoyed" });`

h: Yeah come to think of it, "accept" kind of sucks.

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: I do not accept "accept".

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: But we already *know* you shouldn't take me literally!

`bb({ eyes:"sad_u", body:"two_up" });`

b: The whole *problem* is that I want to help you, but I suck at using words to do so!

`bb({ eyes:"sad", body:"normal" });`

h: I think therapists mean "accept" your emotions as in: "don't fight or ignore them."

`hong({ eyes:"surprise", body:"one_up" });`

h: To listen to you, work *with* you, but not take what you say as 100% literal truth.

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: Then therapists should say *that* instead of some vague confusing word like "accept".

`hong({ body:"chin", eyes:"annoyed" });`

h: I guess they suck at using words, too.

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: Anyway, anything else you wanna chat about?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: So, anything else on your heavy heart?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[I'm scared we'll be harmed.](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[I'm scared we'll be alone.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[I'm scared we're bad people.](#act4_bad)
{{/if}}

[Nah, I'm good for now.](#act4c_prelude)

# act4_something_else_2

h: Okay, I think we've talked about all our fears now.

b: Yes, there are only three fears.

h: Yup, exactly three.

b: Convenient.

(#act4c)

# act4c_prelude

h: Good chat, team.

(#act4c)

# act4c

```
Game.clearText();
music(null,{fade:3});
bb({body:"normal", eyes:"normal", mouth:"normal", MOUTH_LOCK:true},0);
hong({body:"normal", eyes:"normal", mouth:"normal"},0);
```

b: ...

`hong({MOUTH_LOCK:true},0)`

h: ...

`bb({eyes:"annoyed_d"})`

b: This isn't some *game*, you know.

`bb({eyes:"angry_d", body:"one_up"})`

b: Building a healthy relationship with your emotions isn't as simple as clicking buttons on a screen.

`bb({eyes:"sad", body:"normal"})`

b: *Can* we really get along?

b: *Can* we work together, as a team?

`hong({eyes:"sad", body:"one_up"})`

h: Well,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: E-excuse me...

```
Game.clearText();
publish("act4-in-2");
music('campus', {volume:0.5, fade:1});
```

(...2101)

(#act4d)

# act4d

`Game.WORDS_HEIGHT_BOTTOM = 221;`

`publish("act4", ["alshire", 0]);`

a: W-wo-would you mind if I sat with you for lunch?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: *This* is your crush? Why are they sitting alone like a psycho serial killer?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: Asking your crush if you can sit with them? Do you know how *needy* we sound?!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: *This* is your crush? We interrupted their peace and quiet! We're such a burden!
{{/if}}

`publish("act4", ["alshire", 2]);`

a: I- I mean- it's, it's okay if not, I just...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Wait, didn't I see you at the party?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[Yeah, of course! Come here.](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[Sorry, I need alone time right now.](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: Yeah you were on the couch! At the first party I went to...

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: Where I had that panic attack and punched the host.
{{/if}}

{{if _.a2_ending=="flight"}}
h2: Where I had that panic attack and ran out crying.
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Hang on human, we may be making them uncomfortable.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, I don't mean to put you on the spot!

`publish("act4", ["hong_to_alshire",4]);`

h2: Just remembering a friendly face, is all.

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: AHHHHH I KNEW IT! THEY'RE A DANGEROUS PANIC-DRIVEN PSYCHO!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: AAHHH THE FIRST IMPRESSION WE MADE WAS "WITNESSED MY TRAUMA"! THAT MEANS THEY HATE US!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AAAHHH WE MADE SOMEONE REMEMBER A TRAUMATIC EVENT. OUR MERE PRESENCE HURTS OTHERS.
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Hang on human, they seem uncomfortable.

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, no pressure of course!

`publish("act4", ["hong_to_alshire", 4]);`

h2: Just saying, you can sit here if you want to.

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: THEY'RE BEING *TOO* FRIENDLY! LIKE TED BUNDY, THE SERIAL KILLER!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: THEY'RE JUST ACTING NICE! NO ONE *REALLY* WANTS TO BE CLOSE TO US!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AHHH WE ALWAYS MAKE OTHERS FEEL AWKWARD! WE'RE A STAIN UPON THE EARTH!
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Hang on human, we may be making them uncomfortable.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, I don't mean to be rude!

`publish("act4", ["hong_to_alshire", 6]);`

h2: I just need some time to process my emotions. Please don't take it as a personal rejection.

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: WHAT SICK, TWISTED THOUGHTS ARE THEY PROCESSING?! WHAT DARK DESIRES FILL THIS PSYCHO'S HEART?!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: WE'VE BEEN PERSONALLY REJECTED! WE'LL NEVER BE LOVED!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: WE INTERRUPTED THEIR EMOTIONAL PROCESSING! NOW THEY'LL BE TRAUMATIZED FOREVER AND IT'S ALL OUR FAULT!
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN

```
Game.clearText();
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["alshire", 10]);
sfx("pop");
```

(...1001)

```
publish("act4", ["alshire", 11]);
sfx("alshire_run");
```

(...2601)

```
publish("act4-out-3");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
```

(...1201)

`publish("act4-jumpcut-hong");`

h: Huh. That was weird. I wonder what was going on in their head.

`publish("act4", ["hong_closer", 2]);`

h: Anyway, you were saying?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: Uh, I forget? Something about teams and work?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: They say you should "make peace" with your emotions, as if your emotions are *war criminals*.

`publish("act4", ["bb_closer", 7]);`

b: But I want us to make *more* than mere peace! I want us to be *allies!*

`publish("act4", ["bb_closer", 3]);`

b: I want to be a good guard-dog. Just like how hunger & thirst are alarms for your physical needs,

`publish("act4", ["bb_closer", 8]);`

b: I want to be the alarm for your *psychological* needs – your needs for safety, belonging, goodness.

`publish("act4", ["bb_closer", 1]);`

b: But... I suck at my job, so I need you to train me.

`publish("act4", ["bb_closer", 4]);`

b: I'm not "always valid," nor "always irrational." I'm just... trying my best. So, please,

`publish("act4", ["bb_closer", 30]);`

b: Help me help you!

`publish("act4", ["bb_closer", 6]);`

b: Though, teaching an old dog new tricks *will* take a while. Maybe *years.*

`publish("act4", ["bb_closer", 3]);`

b: And sometimes I'll relapse, I'll slip into my old habits.

`publish("act4", ["bb_closer", 2]);`

b: I'll bark at shadows. I'll scare you with words. I might even show you some intrusive images of... things.

`publish("act4", ["bb_closer", 9]);`

b: I'm sorry! I'm a battered shelter dog! Battered dogs poop on your bed sometimes!

`publish("act4", ["bb_closer", 4]);`

b: But if you're patient with me... and just stay and sit with me...

`publish("act4", ["bb_closer", 8]);`

b: Maybe you can tame this wolf.

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Good dog.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Good human.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

# act4f-pat-hong

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 13]);
```

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...6501)

`publish("act4", ["bb_closer", 15]);`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 10]);
```

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...6501)

`publish("act4", ["bb_closer", 12]);`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("act4", ["bb_closer", 16]);
publish("act4", ["hong_closer", 5]);
```

{{if _.fifteencigs}}
b: AAAAA YOU'RE STILL EATING ALONE FIFTEEN CIGARETTES AAAAA
{{/if}}

{{if _.parasite}}
b: AAAAA YOU'RE STILL NOT PRODUCTIVE WHILE EATING WE'RE SOCIETY-PARASITES AAAAA
{{/if}}

{{if _.whitebread}}
b: AAAAA YOU'RE EATING MORE WHITE BREAD AAAAA
{{/if}}

```
publish("act4", ["bb_closer", 18]);
publish("act4", ["hong_closer", 6]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 205;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: YAP YAP YAP YAP YAP

(#credits)
