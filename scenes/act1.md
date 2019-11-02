# act1

```
SceneSetup.act1();
```

(...300)

n: Y ESTA ES LA ANSIEDAD DE LA HUMANA

n: _TÚ_ ERES LA ANSIEDAD

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: ¡Anda, hola! ¿Ya estás aquí otra vez?

`hong({eyes:"0_neutral"})`

n: TU TRABAJO ES PROTEGER A LA HUMANA DEL *PELIGRO*

`bb({eyes:"look", mouth:"small_lock"})`

n: DE HECHO, VOLVER A JUGAR A ESTO YA LA ESTÁ PONIENDO EN *PELIGRO*

n: ¡AVÍSALA, RÁPIDO!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: ¡Humana, escúchame! ¡La persona que está jugando...

[...va a torturarnos otra vez!](#act1_replay_torture)

[...no va a encontrar ningún final alternativo!](#act1_replay_alternate)

[...va a sufrir de disonancia ludonarrativa!](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: ¡Nos va a obligar a colocarnos en posición fetal y lloriquear!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: ¡Nos va a hacer cargarnos tu móvil haciéndote sufrir un ataque de pánico!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: ¡Nos va a obligar a *CONTENERNOS* a pegarle a la anfitriona de la fiesta!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: ¡Nos va a hacer pegarle a la anfitriona de la fiesta, la antivillana autoidentificable!
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: Bueno, a lo mejor por lo menos esta vez no nos tiramos por un edif--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: NOS VA A HACER TIRARNOS POR UN EDIFICIO.
{{/if}}

`bb({body:"fear"});`
b: NOS VA A OCURRIR OTRO MONTÓN DE COSAS MALAS Y ENTONCES NOS--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Sí, *en esencia* la historia es la misma, pero cada capítulo tiene dos posibles desenlaces, además de cada opción de diál--

`bb({body:"fear"});`

b: Quien esté jugando esto va a sentir una gran decepción, va a cerrar esta pestaña del navegador, va a borrar el programa y entonces nos

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: ¿El qué de ludopatía?

`bb({eyes:"normal"});`

b: ¡Disonancia ludonarrativa! El eje central de la historia es la libertad de *ELEGIR* construir una relación sana y colaborativa con tus propios miedos,

`bb({eyes:"normal_right"});`

b: pero jugar otra vez con la misma historia implica que tus *ELECCIONES* no importan,

`bb({eyes:"narrow_eyebrow"});`

b: lo que causa una contradicción entre el mensaje del juego y sus mecánicas,

`bb({eyes:"fear"});`

b: lo que abrirá una brecha en el universo narrativo de este juego

`bb({body:"fear"});`

b: y entonces nos--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: MORIREMOOOOOOOOOOS

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.clearText();
```

(...1001)

```
bb({body:"laugh"});
hong({body:"laugh"});
Game.clearText();
sfx("laugh");
```

(...5001)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"0_sammich"});
```

h: Venga, volvamos a nuestros personajes.

```
Game.clearText();
```

n4: (DEJA QUE _TU_ ANSIEDAD, BLA, BLA, BLA, LO QUE MÁS SE ACERQUE A _TUS_ MIEDOS, BLA, BLA, TODO ESO)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Genial, ya está aquí mi lobo otra vez. Hurraaaaa.

`hong({eyes:"0_neutral"})`

n: TU TRABAJO ES PROTEGER A LA HUMANA DEL *PELIGRO*
`bb({eyes:"look", mouth:"small_lock"})`

n: DE HECHO, ESE BOCADILLO ESTÁ PONIÉNDOLA EN *PELIGRO* AHORA MISMO

n: ¡RÁPIDO, AVÍSALA!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: ¡Humana, escucha! ¡Estamos en peligro! Y ese peligro es...

`bb({body:"squeeze"})`

n4: (¡DEJA QUE _TU_ ANSIEDAD PATRICIPE! ELIGE LO QUE MÁS SE ACERQUE A _TUS_ MIEDOS)
(#act1_normal_choice)

# act1_normal_choice

[¡Estamos almorzando aquí solos! ¡Otra vez!](#act1a_alone) `bb({body:"squeeze_talk"})`

[¡No estamos siendo productivos mientras comemos!](#act1a_productive) `bb({body:"squeeze_talk"})`

[¡El pan blanco es malo para la salud!](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: ¿No sabes que la soledad es un indicio de muerte prematura de la misma manera que lo es consumir 15 cigarrillos diarios?
`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Holt-Lunstad *PLoS Medicine* [EE.UU. 27.7.10])

`hong({eyes:"0_annoyed"})`

h: Eh... gracias por citar tus fuentes, pero--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Lo que significa que si no vas a socializar con alguien *inmediatamente*, nos

`bb({body:"panic"})`

b: MORIREMOOOOOOOOOOS

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: HAS USADO *MIEDO A NO SER QUERIDO*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: ¡Saca tu portátil y ponte a trabajar!

`hong({eyes:"0_annoyed"})`

h: Eh... no quiero llenar el teclado de migas--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Si no contribuimos nada a la sociedad, somos un parásito social!

b: La sociedad irá a la seguridad social a limpiarse la suciedad, y esa suciedad de la sociedad son los parásitos sociales y entonces intentará matarlos y nos

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: MORIREMOOOOOOOOOOS

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: HAS USADO *MIEDO A SER MALA PERSONA*
(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: ¿Acaso se han verificado esos estud--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: El trigo procesado hará que nos suba el azúcar y entonces nos amputarán las piernas y los brazos y nos
`bb({body:"panic"})`

b: MORIREMOOOOOOOOOOS

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: HAS USADO *MIEDO A SUFRIR DAÑOS*

(#act1b)

# act1b

n: ES MUY EFICAZ

`bb({mouth:"smile", eyes:"smile"});`

b: ¿Ves, humana? ¡Soy tu leal lobito guardián!

`bb({body:"pride_talk"});`

b: ¡Confía en tus instintos! ¡Tus sentimientos siempre están justificados!

`bb({body:"pride"});`

n: CONSIGUE QUE LA BARRA DE ENERGÍA DE TU HUMANA LLEGUE A CERO

n: PARA PROTEGER SUS NECESIDADES FÍSICAS, SOCIALES Y MORALES, PUEDES VALERTE DE:

n: MIEDO A *SUFRIR DAÑOS* #harm#

n: MIEDO A *NO SER QUERIDO* #alone#

n: MIEDO A *SER MALA PERSONA* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (SUPERCONSEJITO: ¡ELIGE AQUELLA OPCIÓN QUE DESPIERTE TUS MIEDOS PERSONALES MÁS OSCUROS Y PROFUNDOS!~)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: sabes qué creo que voy a ponerme con el móvil.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: PROTEGE A TU HUMANA

n: DEL MUNDO. DE LOS DEMÁS. DE SÍ MISMA.

n: BUENA SUERTE

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: PRIMERA RONDA: *¡QUE COMIENCE LA BATALLA!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Anda. Alguien va a montar una fiesta este finde, según Facebook.

`bb({eyes:"uncertain"});`

b: ¿Pero es que esta tía monta una fiesta *cada* fin de semana?

`bb({eyes:"uncertain_right"});`

b: ¿Qué clase de vacío interno intenta llenar? ¡Seguro que está trastornada por algo y así es como lidia con ello!

`hong({eyes:"surprise"});`

h: ¿Y esto? Me ha invitado y todo...
`bb({eyes:"fear", mouth:"normal"});`

b: ¡Bueno!

[¡Acepta, o moriremos de soledad!](#act1c_loner)

[¡Recházala, esa fiesta estará llena de drogas venenosas!](#act1c_drugs)

[Ignórala. Total, somos unos aguafiestas.](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: ¡Quince cigarrillos diarios, humana! ¡Quince!
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: Entonces nadie vendrá a nuestro funeral, tirarán nuestras cenizas al océano, nos zampará una ballena,

{{if !_.fifteencigs}}
b: ¡y nos convertiremos en CACA DE BALLENA!
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: ¡Así que, sí, deberíamos ir a esa fiesta!
{{/if}}

{{if _.parasite}}
b: Pero llévate el portátil para que podamos trabajar y no seamos parásitos sociales.
{{/if}}

{{if _.whitebread}}
b: Pero solo si no nos ponen PAN BLANCO
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: DIOS. Mira, con tal de que te calles...

h: Voy a aceptar.

{{if _.whalepoop}}
b: ¡Caca de ballena, humana! ¡Caca de ballena!
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: o aún peor... PAN BLANCO
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: ¡Esnifaremos tanta coca y comeremos tanto pan blanco que ni cabremos en el horno crematorio!
{{/if}}

{{if !_.whitebread}}
b: ¡Vamos a meternos tanta droga que el enterrador se preguntará cómo es que nuestro cuerpo *ya venía* embalsamado!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: Además, no tenemos tiempo de fiestas. ¡Tenemos que ponernos a trabajar si no queremos ser un horrible parásito social!
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: DIOS. Mira, con tal de que te calles...

h: Voy a rechazarla.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: Lo único que sabemos hacer es llorar en los rincones porque la soledad es tan mortal como 15 cigarrillos diarios.
{{/if}}

{{if _.parasite}}
b: Lo único que hacemos en las fiestas es preocuparnos porque deberíamos estar siendo productivos.
{{/if}}

{{if _.whitebread}}
b: Lo único que hacemos es preocuparnos sobre la comida insaludable que nos va a matar.
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: vaya me pregunto por qué

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: ¡Así que, si vamos, arruinaremos su fiesta y se sentirá mal, pero si no vamos y rechazamos la invitación, también se sentirá mal!
`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: LO ÚNICO QUE HACEMOS ES HACER QUE LA GENTE SE SIENTA MAL, ASÍ QUE NOS MERECEMOS SENTIRNOS MAL

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Buf. Mira, con tal de que te calles...

h: Ignoraré la invitación.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: Qué más da. Facebook es demasiado para mí. Necesito algo más tranquilo, que me produzca menos ansiedad.

`hong({eyes:"neutral"});`

h: A ver qué hay en Twitter.

`bb({eyes:"look"});`

[¡Oh, no! ¡Mira esta noticia tan terrible!](#act1d_news)

[Oh, no, ¿y si ese tuit es una indirecta hacia *nosotros*?](#act1d_subtweet)

[Mira, un GIF de un gatito bebiendo leche](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: Dios, cómo está el mundo, ¿eh?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: Casi parece que se va a acabar, que todo está muriendo y que estamos condenados y que no podemos hacer nada al respecto.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: ¡Retuitéalo!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Vale, lo retuiteo, pero cállate!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: Ya está bien, me voy a Snapchat.

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: ¡Es un subtuit! ¡Un subtuit oculto y sigiloso!

`hong({eyes:"annoyed"});`

h: ¿Dudo que lo sea?

`bb({eyes:"narrow", mouth:"small"});`

b: pero y si hablan de nosotros a nuestras espaldas

h: Eso no es ver--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: EN FRENTE DE NUESTRAS ESPALDAS

`hong({eyes:"sad", mouth:"sad"});`

h: Que n--

`bb({eyes:"narrow", mouth:"small"});`

b: pero *y si sí*

h: N--

`bb({eyes:"narrow_eyebrow"});`

b: *y si sí*

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: en FIN, pues me voy a Snapchat.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: Je, je, qué mono, voy a retuitearlo, es--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: LOS GATOS NO DIGIEREN BIEN LA LECHE Y SOMOS UNAS PERSONAS HORRIBLES POR DISFRUTAR DE ESTE FLAGRANTE MALTRATO ANIMAL

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: en FIN, me voy a Snapchat.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: Anda, fotos de anoche. Conque *estas* son las fiestas semanales esas.
{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Uf, demasiada gente para mi ansiedad.

h: ¿A lo mejor debería haber rechazado la invitación?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[¿Cambiar nuestra respuesta? ¡¿Como unos cretinos?!](#act1e_yes_dontchange)

[¡Cambia nuestra respuesta! ¡Demasiada gente!](#act1e_yes_changetono)

{{if _.subtweet}}
[Fijo que ese subtuit iba dirigido a nosotros.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Espera hemos retuiteado sin comprobar si era una noticia real.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[¿Sabías que estás en una muy mala postura?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¿Contaba con que fuéramos y ahora vas a traicionar su confianza?

{{if _.fifteencigs}}
b: QUINCE. CIGARRILLOS.
{{/if}}

{{if _.whalepoop}}
b: CACA. DE. BALLENA.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate cállate, lo dejaré como un sí!

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¿Sabes lo que es una estampida humana?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: En 2003, hubo un incendio en un club nocturno en Rhode Island y el pánico hizo que la gente bloqueara las salidas provocando la muerte de 100 personas incineradas

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: QUIERES QUE NOS PASE ESO

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: DI QUE NO DI QUE NO DI QUE NO DI QUE NO DI QUE NO DI QUE NO DI QUE NO DI QUE N-

```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate cállate voy a decir que no! ¡Dios!

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... Parece que se lo están pasando bien.

h: ¿A lo mejor debería haber aceptado?

`bb({mouth:"normal", eyes:"normal"});`

[¿Cambiar nuestra respuesta? ¡¿Como unos cretinos?!](#act1e_no_dontchange)

[¡Cambia nuestra respuesta! ¡No podemos morir solos!](#act1e_no_changetoyes)

{{if _.subtweet}}
[Fijo que ese subtuit iba dirigido a nosotros.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Espera hemos retuiteado sin comprobar si era una noticia real.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[¿Sabías que estás en una muy mala postura?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: ¡Todos cuentan con nosotros!

b: ...cuentan con que los dejemos en paz para que puedan disfrutar de la fiesta sin una asquerosa rarita {{if _.whitebread}}comedora de pan blanco{{/if}} como tú--


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate cállate me quedaré con el no!

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡La soledad crónica eleva nuestros niveles de cortisol y de enfermedades cardiovasculares y derrames cerebrales!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: QUINCE. CIGARRILLOS.
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡Cállate cállate cambiaré mi respuesta a un sí! ¡Dios!

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Todos esos tuits polémicos nuestros han salido a la luz!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: ¡Se van a meter con nosotros y nos van a cancelar y nos van a arrastrar con una cuerda atada a un caballo trotando por todo el mundo digital!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡¿Por qué me haces esto?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Estamos transmitiendo falsa información! ¡Estamos destruyendo la fiabilidad de la prensa gratis!
```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Somos la razón por la que el fascismo se alzará de las ruinas de la democracia!

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: ¡¿Por qué me haces esto?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡¿Quieres acabar hecha un cuatro?! ¡Deja de encorvarte!

```
bb({body:"meta"});
```

b: Eso también va por ti.

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ¡¿Por qué me haces esto?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... Parece que se lo están pasando bien.

h: ¿A lo mejor no debería haber ignorado la invitación?

`bb({mouth:"normal", eyes:"normal"});`

[Sigue ignorándola. Si total, somos unos aguafiestas.](#act1e_ignore_continue)

[Mejor dí que sí.](#act1e_ignore_changetoyes)

[Mejor di que no.](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: Es un poco de mala educación ignorarla, ¿no?

`bb({eyes:"normal_right"});`

b: Otra gente nos ignora a *nosotros*, así que...

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: yo diría que es justo.

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: ¿Vas... a dejar que me divierta?

b: Bueno, es que la soledad *podría* matarnos.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: Hay mucha gente. Las multitudes son peligrosas.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Qué más da. Tengo una notificación en Tinder.

`bb({eyes:"uncertain"})`

b: ¿La app esa de rollitos?

`hong({eyes:"annoyed"})`

h: No es para enrollarse. Es una manera de conocer a gente nuev--
`bb({eyes:"narrow"})`

b: Es una app de rollitos.

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: ¡Oh, tengo un match! ¡Y parece mono!

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: Por favor, no me arruines est--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: PELIGRO PELIGRO PELIGRO PELIGRO PELIGRO PELIGRO

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[Nos están *manipulando*.](#act1f_used_by_others)

[Estamos *manipulando* a otra gente.](#act1f_using_others)

[TU MATCH ES UN ASESINO EN SERIE](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: Enrollarte con cualquiera llenará tu agujero de ahí abajo,

b: pero no tu agujero

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: de ahí *dentro*.

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Lo que quiero decir es que VAMOS A MORIR SOLOS

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: ¿Te crees que los genitales de la gente son como Pokémon para coleccionar?

```
bb({body:"sing", eyes:"pretty", mouth:"shut"});
music("pokemon");
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

```
Game.FORCE_TEXT_DURATION = 1000;
Game.FORCE_NO_VOICE = true;
```

b: ♫ (cabecera de pokémon)-

(...5600)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2400;
```

b: ♫ Llegaré a ser la mayor

(...500)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 2100;
```

b: ♫ la mayor ^zorra^ jamás.

(...1500)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2300;
```

b: ♫ Mi culo es muy tentador

(...500)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ ¡y mis ^tetas^ lo son más!

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ ¡^PUTI^-MON! ¡HAZTE CON

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: A lo que voy es a que eres una manipuladora.

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread}}
b: ¡Te atraparán en un pozo y te obligarán a alimentarte de pan blanco para engordarte y luego llevar tu piel a modo de abrigo!
{{/if}}

{{if _.parasite}}
b: Te machacarán con un cronómetro pomodoro y te dirán "HABER SIDO MÁS PRODUCTIVA, PARÁSITO".
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: ¡Trocearán tu carne en sangriento confeti, harán serpetinas de tus entrañas y usarán tu sangre para hacer ponche!
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: ¡¿Qué te parece ESA invitación a la fiesta?!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: estoy harta de este juego.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"que si moriremos de soledad"... {{/if}}
{{if _.parasite}}"que si somos un parásito social"... {{/if}}
{{if _.whitebread}}" que si te comes eso, nos matará"... {{/if}}
{{if _.subtweet}}"que si hablan de nosotros a nuestras espaldas"... {{/if}}
{{if _.badnews}}"que si el mundo está hecho un desastre"... {{/if}}
{{if _.hookuphole}}"que si vamos a morir solos"... {{/if}}
{{if _.serialkiller}}"que si es un asesino en serie"... {{/if}}
{{if _.catmilk}}"que si los gatos no digieren bien la leche"... {{/if}}
{{if _.pokemon}}que si canciones paródicas de ^mierda^... {{/if}}

h: solo quiero vivir mi vida.

h: solo quiero liberarme de todo este... dolor.

`bb({eyes:"look_sad"});`

b: Oye... humana...
`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: Todo irá bien.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: Como tu leal lobito guardián, siempre estaré ojo a vizor y me esforzaré al máximo para mantenerte a salvo.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: Te lo prometo.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Última aplicación, Instagram. A ver qué hay.

`hong({eyes:"sad"});`

h: ...Más fotos de la fiesta.

`hong({mouth:"sad"});`

h: Todos pasándoselo bien. Sin miedos. Sin ansiedades.

`hong({mouth:"anger"});`

h: Dios, ¿por qué no puedo ser como ellos? ¿Por qué no puedo ser *normal*?

`bb({eyes:"normal_right"});`

b: Hablando de fiestas, sobre la invitación para este finde. Mi decisión DEFINITIVA es:

`bb({eyes:"normal"});`

[Deberíamos ir.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[No deberíamos ir.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: Deb--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: QUE TE.

`hong({body:"2_you"});`

h: *^FOLLEN.^*

(...500)

b: q

(...1500)

`bb({eyes:"wat_2"});`

b: ¿qué?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: Voy a ir a esa fiesta,

{{if _.act1g=="go"}}
h: NO porque tú quieras, sino porque *yo* quiero.
{{/if}}

{{if _.act1g=="dont"}}
h: Precisamente porque NO quieres que vaya.
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: Tú NO tienes control sobre mí.

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: Y ahora déjame comerme este bocadillo tan rico en paz, ^joder^.
`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[AAAAH VAMOS A MORIR](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[AAAAH TODOS NOS ODIAN](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[AAAAH SOMOS PERSONAS HORRIBLES](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AAAAH VAMOS A MORIR AAAAAAAAAHHHH

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AAAAH TODOS NOS ODIAN AAAAAAAAAHHHH

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AAAAH SOMOS PERSONAS HORRIBLES AAAAAAAAAHHHH

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: FELICIDADES

(...500)

n: HAS PROTEGIDO EXITOSAMENTE LAS NECESIDADES FÍSICAS, SOCIALES Y MORALES DE TU HUMANA

n: ¡MIRA LO AGRADECIDA QUE ESTÁ!

(...500)

n: AHORA QUE SU ENERGÍA ESTÁ A CERO, PUEDES CONTROLAR DIRECTAMENTE SUS ACCIONES

`bb({mouth:"smile", eyes:"normal"});`

n: ELIGE UN GOLPE DE GRACIA

`bb({mouth:"small_lock", eyes:"fear"});`

n: *ACABA CON ELLA*

[{LUCHAR: ¡Castiga a tu estresante móvil!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{HUIR: ¡Ponte a llorar en posición fetal!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: ¡Tu móvil te ha dado un ataque de pánico!

`bb({eyes:"anger"})`

b: ¡Zuckerberg y sus amiguitos están secuestrando tu salud mental para ganar dinero para sus proyectos capitalistas!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Castiga a tu teléfono! ¡Destrúyelo! ¡Mátalo!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTALO MÁTAL--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: ¡El mundo está lleno de peligros!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: ¡Haz como los armadillos! ¡Hazte bolita como mecanismo de defensa!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: HAZTE BOLITA Y LLORA HAZTE BOLITA Y LLORA HAZTE BOLITA Y LLORA HAZTE BOLITA Y LLORA HAZTE BOLITA Y LLORA HAZTE BOLITA Y LLOR--

(#act1j)

# act1j

`SceneSetup.act1_outro()`
