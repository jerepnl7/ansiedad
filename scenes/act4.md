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

b: Pero... sí, tenías razón.

`hong({eyes:"surprise"});`

h: ¿Hm?

`bb({eyes:"normal"});`

b: He sido *igualito* que Pedro y el lobo. Y cuando hubo un peligro *de verdad*, tú, con razón, no me creíste.

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

b: GUAU GUAU GUAU GUAU

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

b: Vamos a parecer un felpudo, "¡Bienvenido!". ¡Y mientras decimos "por favor" y "gracias", nos pisotearán y se limpiarán los pies con nosotros!

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

h: Ah y... Re: esa imagen mental del pintalabios... *¿¿puaj??*

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

h: Seh creo que eso solo cuesta un par de bitcoins hoy en día.

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

h: Hay cosas más importantes que las normas de la narración. Una de ellas es la salud mental.

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: Quiero decir, ¿no dicen eso siempre los psicólogos? ¿Que aceptes todas tus emociones, incluso las negativas?

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Espera.

[¿"Aceptar", o sea, *rendirnos*?](#act4_bad_accept_give_up)

[¿"Aceptar", o sea, *aprobar*?](#act4_bad_accept_approve)

[¿"Aceptar", o sea, *tomar literalmente*?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: ¿Crees que Martin Luther King habría dicho "Mecachis, no podemos sentarnos en la parte de delante del autobús, habrá que *aceptarlo*"?

`bb({ eyes:"angry_r", body:"two_up" });`

b: ¿Por qué cree el complejo industrial de la autoayuda que ondear la bandera blanca es algún tipo de *sabiduría profunda*?

`bb({ eyes:"annoyed", body:"normal" });`

h: Creo que los psicólogos se refieren a "aceptar" cosas malas más bien como reconocer que existen y que son difíciles de cambiar,

h: no como abandonar cualquier intento de cambiarlas.

`bb({ eyes:"suspect" });`

b: Pues que digan "reconocer", no "aceptar".

`hong({ body:"chin", eyes:"annoyed" });`

h: Sí, ahora que lo dices, "aceptar" es algo confuso.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Sí, lo *reconozco*.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: ¿Como si fuera algo *bueno* que estemos tan rotos? ¡No!

`bb({ eyes:"angry_r", body:"one_up" });`

b: ¡Todos esos guionistas de Hollywood que romantizan las enfermedades mentales son unos palurdos!

`bb({ eyes:"angry", body:"two_up" });`

b: ¡Tener un trastorno mental *apesta*! ¡Le roba a la gente sus *vidas*! ¡¿Por qué deberíamos "aceptar" eso?!

`bb({ body:"normal" });`

h: Creo que con "aceptar" las emociones, los psicólogos se refieren más bien a tener paciencia con ellas.

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Como eso de que revolverse en las arenas movedizas solo hace que te hundas más rápido, y la solución es tumbarse y tener paciencia,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: igual que cuando me peleé contigo, con mi miedo, me llevó a tirarme por un tejado.
{{/if}}

{{if !_.INJURED}}
h: igual que cuando me peleé contigo, con mi miedo, casi me tiro por un tejado.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: La solución es lo que estamos haciendo ahora: no pelearnos, sino convivir y tener paciencia.

`bb({ eyes:"annoyed" });`

b: Pues que digan *eso*, y no una palabra confusa como "aceptar".

`hong({ body:"chin", eyes:"annoyed" });`

h: Ahora que lo pienso, "aceptar" apesta como palabra.

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: No acepto "aceptar".

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: ¡Ya *sabemos* que no puedes tomarme literalmente!

`bb({ eyes:"sad_u", body:"two_up" });`

b: ¡Todo este *problema* radica en que quiero ayudarte pero soy muy malo con las palabras!

`bb({ eyes:"sad", body:"normal" });`

h: Creo que con "aceptar" tus emociones, los psicólogos se refieren más bien a "no las combatas ni las ignores".

`hong({ eyes:"surprise", body:"one_up" });`

h: Escucharte, colaborar *contigo*, pero no tomarte como una verdad 100 % literal.

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: Pues que digan *eso* en vez de usar una palabra tan vaga y confusa como "aceptar".

`hong({ body:"chin", eyes:"annoyed" });`

h: Supongo que también son malos con las palabras.

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: En fin, ¿quieres hablar de algo más?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: ¿Tienes algún otro pesar en tu corazón?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[Tengo miedo de que nos hagan daño.](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[Tengo miedo de que nos quedemos solos.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[Tengo miedo de que seamos malas personas.](#act4_bad)
{{/if}}

[Nah, ya es suficiente por ahora.](#act4c_prelude)

# act4_something_else_2

h: Bien, pues creo que ya hemos hablado sobre todos nuestros miedos.

b: Sí, solo hay tres miedos.

h: Sip, tres. Ni uno más ni uno menos.

b: Qué conveniente.

(#act4c)

# act4c_prelude

h: Buena charla, equipo.

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

b: Esto no es ningún *juego*, sabes.

`bb({eyes:"angry_d", body:"one_up"})`

b: Crear una relación sana con tus emociones no es tan sencillo como pulsar botoncitos en una pantalla.

`bb({eyes:"sad", body:"normal"})`

b: ¿*Seremos capaces* de llevarnos bien?

b: ¿*Seremos capaces* de trabajar en equipo?

`hong({eyes:"sad", body:"one_up"})`

h: Bueno,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: P-perdona...

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

a: ¿T-te-te importa si me siento aquí contigo para almorzar?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: ¿*Esta* es la que te gusta? ¿Por qué está aquí sola como una asesina en serie psicópata?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¿Le acabas de preguntar a la que te gusta si puedes sentarte con ella? ¡¿Sabes lo *desesperados* que hemos sonado?!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: ¿*Esta* es la que te gusta? ¡Acabamos de romper su paz y tranquilidad! ¡Somos una carga!
{{/if}}

`publish("act4", ["alshire", 2]);`

a: N-No... no pasa nada si no...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Oye, ¿tú no estabas en la fiesta?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[¡Claro! Siéntate.](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[Lo siento, necesito estar sola.](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: ¡Sí, estabas en el sofá! En la primera fiesta a la que fui...
`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: Esa en la que me dio un ataque de nervios y le pegué a la anfitriona.
{{/if}}

{{if _.a2_ending=="flight"}}
h2: Esa en la que me dio un ataque de nervios y me fui llorando.
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Humana, espera. A lo mejor la estamos incomodando.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: ¡Ah, no lo digo por nada!

`publish("act4", ["hong_to_alshire",4]);`

h2: Es solo que me sonabas de algo.

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ¡ES UNA PSICÓPATA PELIGROSA QUE SE DEJA LLEVAR POR LOS NERVIOS!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¡AAAAH LA PRIMERA IMPRESIÓN QUE LE HEMOS CAUSADO ES DE "TESTIGOS DE SU TRAUMA"! ¡ESO SIGNIFICA QUE NOS ODIA!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AAAAAH HEMOS HECHO QUE ALGUIEN RECUERDE UN SUCESO TRAUMÁTICO. NUESTRA MERA PRESENCIA PROVOCA EL SUFRIMIENTO AJENO.
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Humana, espera. A lo mejor la estamos incomodando.

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: ¡Bueno, si quieres!

`publish("act4", ["hong_to_alshire", 4]);`

h2: Digo que, si quieres, puedes sentarte.

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ¡ESTÁ SIENDO *DEMASIADO* SIMPÁTICA! ¡COMO TED BUNDY, EL ASESINO EN SERIE!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¡SOLO LO DICE PARA QUE NO TE SIENTAS MAL! ¡*NADIE* SE QUERRÍA SENTAR CON NOSOTROS!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: ¡AAAH NO HACEMOS MÁS QUE INCOMODAR A LOS DEMÁS! ¡SOMOS UNA MANCHA EN ESTE PLANETA!
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Humana, espera. A lo mejor la estamos incomodando.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: ¡Ah, lo siento si he sonado borde!

`publish("act4", ["hong_to_alshire", 6]);`

h2: Solo necesito un tiempo para procesar mis emociones. Por favor, no te lo tomes como algo personal.

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ¡¿QUÉ CLASE DE PENSAMIENTOS ENFERMOS ESTARÁ PROCESANDO?! ¡¿QUÉ OSCUROS DESEOS ESCONDE ESTA PSICÓPATA EN SU CORAZÓN?!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: ¡ACABA DE RECHAZARNOS! ¡VAMOS A ESTAR SOLOS PARA SIEMPRE!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: ¡ACABAMOS DE INTERRUMPIR SU PROCESO EMOCIONAL! ¡AHORA VA A ESTAR TRAUMATIZADA PARA TODA LA VIDA POR NUESTRA CULPA!
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: CORRE CORRE CORRE CORRE CORRE CORRE CORRE CORRE CORRE CORRE

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

h: Pues vaya. Qué raro. Me pregunto qué se le estaría pasando por la cabeza.

`publish("act4", ["hong_closer", 2]);`

h: ¿Qué estabas diciendo?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: Eh, ¿no sé? ¿Algo de trabajo en equipo?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: Dicen que hay que "hacer las paces" con tus emociones, como si tus emociones fueran *criminales de guerra*.

`publish("act4", ["bb_closer", 7]);`

b: ¡Pero yo quiero *más* que solo hacer las paces! ¡Quiero que seamos *aliados*!

`publish("act4", ["bb_closer", 3]);`

b: Quiero ser un buen perro guardián. De la misma manera que la sed o el hambre son alarmas de tus necesidades físicas,

`publish("act4", ["bb_closer", 8]);`

b: yo quiero ser la alarma de tus necesidades *psicológicas*, tu necesidad de sentirte segura, de encajar, de ser buena.

`publish("act4", ["bb_closer", 1]);`

b: Pero... este trabajo se me da fatal. Necesito que me entrenes.

`publish("act4", ["bb_closer", 4]);`

b: No siempre estoy "justificado", pero tampoco soy siempre "irracional". Yo solo... lo hago lo mejor que puedo. Por favor,

`publish("act4", ["bb_closer", 30]);`

b: ¡Ayúdame a ayudarte!

`publish("act4", ["bb_closer", 6]);`

b: Aunque enseñarle trucos nuevos a un perro viejo *llevará* un tiempo. Puede que incluso *años*.

`publish("act4", ["bb_closer", 3]);`

b: Y a veces recaeré, volveré a mis viejas costumbres.

`publish("act4", ["bb_closer", 2]);`

b: Ladraré a las sombras. Te asustaré con palabras. Tal vez incluso te enseñe imágenes intrusivas de... cosas.

`publish("act4", ["bb_closer", 9]);`

b: ¡Perdóname! ¡Soy un perro maltratado refugiado! ¡Los perros maltratados a veces se hacen caca en tu cama!

`publish("act4", ["bb_closer", 4]);`

b: Pero si tienes paciencia... con solo sentarte y estar aquí conmigo... 

`publish("act4", ["bb_closer", 8]);`

b: Tal vez puedas domesticar a este lobo.

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Buen chico.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Buena chica.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

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
b: AAAAA SIGUES COMIENDO SOLA QUINCE CIGARRILLOS AAAAA 
{{/if}}

{{if _.parasite}}
b: AAAAA SIGUES COMIENDO SIN SER PRODUCTIVA PARÁSITOS SOCIALES AAAAA
{{/if}}

{{if _.whitebread}}
b: AAAAA SIGUES COMIENDO PAN BLANCO AAAAA
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

b: GUAU GUAU GUAU GUAU

(#credits)
